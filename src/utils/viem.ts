import {
    getContract as getViemContract,
    createPublicClient,
    createWalletClient,
    custom,
    encodePacked,
    http,
    keccak256,
    PublicClient,
} from 'viem';
import { isEvmAddress } from './evm';
import {
    allChainNameToIndex,
    EVMChain,
    SupportedTokenType,
    TChainName,
    testnets,
    TTestnetTokenNames,
    TestnetTokenNames,
    TokenBalanceObject,
    BridgeChainIds,
} from '../types';
import { testnetTokens } from '../tokens';
import { ALL_CHAINS } from '../chains';
import FTBridge from '../abi/FTBridge';
import { formatChainName } from './format';

/**
 * @dev Approves the bridge to spend the `amount` of ERC20
 * @param chainName the chain name where to approve
 * @param tokenName the token symbol
 * @param amount the token quantity x decimals
 * @returns the hash of the transaction
 */
export async function approveERC20(
    chainName: TChainName,
    tokenName: string,
    amount: string,
) {

    const {
        account,
        chain,
        publicClient,
        signer
    } = await config(chainName);

    const tokenContract: SupportedTokenType = testnetTokens[
        tokenName
            .toLocaleUpperCase() as keyof typeof testnetTokens
    ];

    const args: [string, string] = [
        chain.bridge,
        amount
    ];

    const tokenContractAddress: string = tokenContract.address[
        formatChainName(chainName)
    ];

    const { request } = await publicClient.simulateContract({
        address: `0x${tokenContractAddress.slice(2)}`,
        abi: tokenContract.abi,
        functionName: 'approve',
        args,
        account,
        chain,
    });

    return await signer.writeContract(request);

}


/**
 * Setup boilerplate
 * @param chainName TChainName (includes mainnet & testnet names)
 * @returns \{ account, chain, publicClient, signer \}
 */
export async function config(chainName: TChainName) {

    const chain = ALL_CHAINS[
        formatChainName(chainName) as keyof typeof ALL_CHAINS
    ];

    const publicClient = createPublicClient({
        chain,
        transport: http(chain.rpcUrls.default.http[0])
    });

    const signer = createWalletClient({
        chain,
        transport: custom(window?.ethereum!)
    });

    // JSON-RPC Account
    const [account] = await signer.getAddresses();

    return {
        account,
        chain,
        publicClient,
        signer
    }

}


/**
 * Retrieves the destination chain fee estimation in `wei`
 * @param amount number of tokens planned for transfer
 * @param senderAddress the address of the owner & sender of the tokens
 * @param destinationAddress the address of the token receiver
 * @param fromChainName the chain of origin
 * @param toChainName the chain of destination
 * @param tokenSymbol the 4-6 short identifier of the token
 * @returns bigint | 22880n
 */
export async function estimateReceive(
    amount: string | bigint,
    senderAddress: string,
    destinationAddress: string,
    fromChainName: TChainName,
    toChainName: string,
    tokenSymbol: string
): Promise<bigint> {

    try {

        const selectedChain = testnets.filter(net =>
            net.name === fromChainName)[0];

        const publicClient = getPublicClient(senderAddress, fromChainName, [selectedChain], true);

        const nativeChainId: number = allChainNameToIndex[fromChainName];
        const toChainId: number = allChainNameToIndex[toChainName];

        // For estimation we use the MAX uint256
        const actionId: bigint = 2n ** 256n - 1n;

        const txHash = keccak256(encodePacked(
            ['uint16', 'string', 'uint16', 'string', 'uint256'],
            [
                nativeChainId,
                "-",
                toChainId,
                "-",
                actionId
            ]
        ));

        const chainId = allChainNameToIndex[toChainName];

        const populatedArgs: [bigint, number, string, string] = [

            BigInt(amount),
            chainId,
            tokenSymbol,
            destinationAddress
        ];

        const estimation = await publicClient?.estimateContractGas({
            address: `0x${selectedChain.bridge.slice(2)}`,
            abi: FTBridge,
            functionName: 'receiveInstallment',
            args: [txHash, populatedArgs],
            account: `0x${senderAddress.slice(2)}`
        }) as bigint;

        const gasPrice = await publicClient!.getGasPrice();

        return estimation * gasPrice;

    } catch (error) {
        console.error("estimateReceive Error:", error);
    }
    return 22880n * 20n;
}

/**
 * Estimates local TX fee in `wei`
 * @param amount number of tokens planned for transfer
 * @param account the address of the owner & sender of the tokens
 * @param fromChainName the name of the departure chain
 * @param toChainName the name of the destination chain
 * @param tokenName the uppercased token name (symbol)
 * @returns a bigint | 83889n
 */
export async function estimateSend(
    amount: string | bigint,
    account: string,
    fromChainName: TChainName,
    toChainName: string,
    tokenName: string
): Promise<bigint> {

    try {

        const selectedChain = testnets.filter(net =>
            net.name === fromChainName)[0];

        const publicClient = getPublicClient(account, fromChainName, [selectedChain], true);

        const chainId = allChainNameToIndex[toChainName];

        const populatedArgs: [bigint, number, string, string] = [
            BigInt(amount),
            chainId,
            tokenName,
            account
        ];

        const estimation = await publicClient?.estimateContractGas({
            address: `0x${selectedChain.bridge.slice(2)}`,
            abi: FTBridge,
            functionName: 'sendInstallment',
            args: [populatedArgs],
            account: `0x${account.slice(2)}`
        }) as bigint;

        const gasPrice = await publicClient!.getGasPrice();

        return estimation * gasPrice;

    } catch (error) {
        console.error("estimateSend Error:", error)
    }
    return 83889n * 20n;

}


/**
 * Builds a contract handler
 * @param address of the required contract
 * @param abi a JSON-like interface to contract's binary
 * @param publicClient a signer | provider
 * @returns a functional contract handler
 */
export function getContract(
    address: string,
    abi: any,
    publicClient: PublicClient | undefined
) {
    return getViemContract({
        address: `0x${address.slice(2)}`,
        abi,
        publicClient,
    });
}


/**
 * Loops through Token contracts & extracts user allowances
 * @param account checked account
 * @returns an empty or filled `allowances` Object
 */
export async function getEvmTokenAllowances(
    account: string,
    chainName: TChainName
): Promise<TokenBalanceObject | undefined> {

    let allowances: { [key: TTestnetTokenNames | string]: string } = {};

    if (isEvmAddress(account) && chainName) {

        const publicClient = getPublicClient(account, chainName, testnets, true);

        for await (const tokenName of TestnetTokenNames) {
            const token = testnetTokens[tokenName]

            const address: string = token.address[chainName.toLowerCase()];

            if (address) {

                const contract = getContract(
                    address,
                    token.abi,
                    publicClient,
                );

                const chain = ALL_CHAINS[formatChainName(chainName) as keyof typeof ALL_CHAINS];

                allowances[tokenName] = (await contract.read.allowance([
                    account,
                    chain.bridge.toString()
                ])).toString();
            }

        }
    }
    return allowances || undefined;
}


/**
 * Loops through Token contracts & extracts user balances
 * @param account checked account
 * @returns an empty or filled `balances` Object
 */
export async function getEvmTokenBalances(
    account: string,
    chainName: TChainName
): Promise<TokenBalanceObject | undefined> {

    let balances: { [key: TTestnetTokenNames | string]: string } = {};

    if (isEvmAddress(account) && chainName) {

        const publicClient = getPublicClient(account, chainName, testnets, true);

        for await (const tokenName of TestnetTokenNames) {

            const token = testnetTokens[tokenName]

            const address: string = token.address[formatChainName(chainName)];

            if (address && publicClient) {

                const contract = getContract(
                    address,
                    token.abi,
                    publicClient,
                );

                balances[tokenName] = (await contract.read.balanceOf([account])).toString();;
            }
        }
    }
    return balances || undefined;
}


/**
 * Creates a signer or a provider
 * @param address of a user
 * @param chainName the connected chain name
 * @param blockchains an array of supported chains
 * @param isSigner a flag wheather can sign & write
 * @param url custom RPC uri
 * @returns 
 */
export function getPublicClient(
    address: string,
    chainName: TChainName,
    blockchains: EVMChain[],
    isSigner: boolean = false,
    url: string = ''
): PublicClient | undefined {
    if (isEvmAddress(address)) {
        const selectedChain = blockchains.filter(net =>
            net.name === chainName)[0];

        return createPublicClient({
            chain: selectedChain,
            transport: isSigner ? custom(window?.ethereum!) : http(url),
        });
    }
    return undefined;
}


/**
 * Calls the sendInstallment function of the bridge contract
 * @param fromChain the name of the chain of departure
 * @param toChainName the name of the chain of destination
 * @param tokenName the token symbol
 * @param amount the token quantity x decimals
 * @param receiver the beneficiary address
 * @returns the transaction hash
 */
export async function transferERC20(
    fromChain: TChainName,
    toChainName: TChainName,
    tokenName: string,
    amount: string,
    receiver: string
): Promise<string> {

    const {
        // account,
        chain,
        publicClient,
        signer
    } = await config(fromChain);

    const chainId: number = BridgeChainIds[
        formatChainName(toChainName) as keyof typeof BridgeChainIds]

    const bridgeAddress: string = chain.bridge;

    const args: [[bigint, number, string, string]] = [[
        BigInt(amount),
        chainId,
        tokenName.toUpperCase(),
        receiver
    ]];

    const { request } = await publicClient.simulateContract({
        address: `0x${bridgeAddress.slice(2)}`,
        abi: FTBridge,
        functionName: 'sendInstallment',
        args,
        // account,
        chain,
    });

    return await signer.writeContract(request);

}


/**
 * Fetches the transaction from a chain
 * @param chainName where the TX took place
 * @param hash the TX hash
 * @returns JSONified Transaction Receipt
 */
export async function getTransaction(
    chainName: TChainName,
    hash: `0x${string}`
) {
    const { publicClient } = await config(chainName);

    return await publicClient.waitForTransactionReceipt({ hash })
}


/**
 * Finds one chain by name
 * @param chains a hashmap of supported chains
 * @param chainName the selected one
 * @returns only the selected chain
 */
export function findChain<T>(
    chains: { [key in keyof T]: EVMChain },
    chainName: string
): EVMChain {
    if (chains && chainName) {
        const cleanName = formatChainName(chainName)
        return chains[cleanName as keyof T]
    }
    const keys = Object.keys(chains);
    const key = keys[0] as keyof T;
    return chains[key];
}

/**
 * Removes the selected chain from the list
 * @param chains an array of supported chains
 * @param chainName the selected one
 * @returns the original list minus selected
 */
export function filterOneOut<T>(
    chains: { [key in keyof T]: EVMChain },
    chainName: string
): EVMChain[] | [] {

    if (chains && chainName) {
        const chainValues: EVMChain[] | [] = Object.values(chains)
        try {
            return chainValues.filter(chain =>
                chain.name.toLowerCase() !== chainName.toLowerCase());
        } catch (error) {
            console.error(error)
            return [];
        }

    }
    return [];
}