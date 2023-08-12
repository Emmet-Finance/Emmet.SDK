import {
    getContract as getViemContract,
    createPublicClient,
    custom,
    http,
    PublicClient,
} from 'viem';
import { isEvmAddress } from './evm';
import { 
    EVMChain,
    TChainName, 
    TTestnetTokenNames, 
    TestnetTokenNames, 
    TokenBalanceObject, 
    allChainNameToIndex,
    testnets 
} from '../types';
import { testnetTokens } from '../tokens';
import { TESTNETS } from '../chains';
import FTBridge from '../abi/FTBridge';


/**
 * Estimates local TX fee
 * @param amount number of tokens planned for transfer
 * @param account the address of the owner & sender of the tokens
 * @param fromChainName the name of the departure chain
 * @param toChainName the name of the destination chain
 * @param tokenName the uppercased token name (symbol)
 * @returns a bigint | undefined
 */
export async function estimateSend(
    amount:string|bigint,
    account: string,
    fromChainName: TChainName,
    toChainName: string,
    tokenName: string
): Promise<bigint | undefined> {

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
        });

        return estimation;

    } catch (error) {
        console.error("estimateSend Error:", error)
    }
    return undefined;

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

                const testnet = TESTNETS[chainName.toLowerCase().replace(/[^a-zA-Z]/g, '') as keyof typeof TESTNETS];

                allowances[tokenName] = (await contract.read.allowance([
                    account,
                    testnet.bridge.toString()
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

            const address: string = token.address[chainName.toLowerCase().replace(' ', '')];

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