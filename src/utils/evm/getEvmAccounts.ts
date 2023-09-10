import { ethereum } from "../../interfaces";
import { MESSAGE_TYPE } from "../../wallets";

/**
 * Extracts EVM accounts from the wallet provider
 * @returns an array of EVM accounts or []
 */
export async function getEvmAccounts(): Promise<string[]> {
    try {
        if (ethereum) {
            const accounts: string[] = await ethereum?.request<string[]>({
                method: MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS,
            }) as string[];

            if (accounts) return accounts;
        }
    } catch (error) {
        throw new Error("Failed to get EVM accounts");
    }
    return [];
}