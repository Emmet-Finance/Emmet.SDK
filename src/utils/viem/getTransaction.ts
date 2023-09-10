import { TChainName } from "../../types";
import { config } from "./config";

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