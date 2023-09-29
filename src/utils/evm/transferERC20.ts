import { BridgeChainIds, TChainName } from "../../types";
import { formatChainName } from "../format";
import { isThisChainsNativeCoin } from "../verifiers";
import { getBridgeContract } from "./getBridgeContract";
import { getMetamaskProvider } from "./getMetamaskProvider";

/**
 * Transfer ERC20 tokens between two Ethereum chains via a bridge contract.
 *
 * @param {TChainName} fromChain - The source Ethereum chain from which tokens are being sent.
 * @param {TChainName} toChainName - The target Ethereum chain to which tokens are being sent.
 * @param {string} tokenName - The name of the ERC20 token to transfer.
 * @param {string} amount - The amount of tokens to transfer as a string.
 * @param {string} receiver - The recipient's Ethereum address on the target chain.
 * @returns {Promise<{ hash: string, status: number, amount: string }>} - A Promise that resolves with transaction details: transaction hash, status (1 for success, 0 for failure), and the transferred amount.
 */
export async function transferERC20(
    fromChain: TChainName,
    toChainName: TChainName,
    tokenName: string,
    amount: string,
    receiver: string
): Promise<{ hash: string, status: number, amount: string }> {
    try {
        const ethereum: any = getMetamaskProvider();
        // Get the current sender account
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' }) as string[];
        // get the bridge contract
        const contract = await getBridgeContract(fromChain, account)

        const chainId: number = BridgeChainIds[formatChainName(toChainName).toLowerCase() as keyof typeof BridgeChainIds]
        // Arguments of the function
        const args: [[bigint, number, string, string]] = [[
            BigInt(amount),
            chainId,
            tokenName.toUpperCase(),
            receiver
        ]];
        const receipt = isThisChainsNativeCoin(tokenName.toUpperCase(), fromChain, 'testnet')
            ? await contract!.functions.sendInstallment(...args, { value: amount })
            : await contract!.functions.sendInstallment(...args);
        // Await the result to get the status
        const result = await receipt.wait();
        if (result) {
            // Get the transaction hash
            const hash: string = result.transactionHash;
            // 1 - success, 0 - reverted
            const status: number = result.status as number;
            return { hash, status, amount }
        } else {
            throw new Error("Failed to receive the transfer transaction response");
        }

    } catch (error) {
        console.error(error);
        return { hash: '', status: 0, amount: '' };
    }
}