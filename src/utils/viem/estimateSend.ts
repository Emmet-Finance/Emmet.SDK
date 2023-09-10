import FTBridge from "../../abi/FTBridge";
import { TChainName, allChainNameToIndex, testnets } from "../../types";
import { getPublicClient } from "./getPublicClient";

/**
 * Estimates local TX fee in `wei`
 * @param amount number of tokens planned for transfer
 * @param account the address of the owner & sender of the tokens
 * @param fromChainName the name of the departure chain
 * @param toChainName the name of the destination chain
 * @param tokenName the uppercased token name (symbol)
 * @returns a bigint | 83889n * 20n
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