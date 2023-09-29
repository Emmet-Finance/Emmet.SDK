import EtherConstants from '../../wallets/EthreumConstants';

/**
 * Checks a user native coin balance (ex. ETH, BNB, etc.)
 * @param account an EVM account whose balance we check
 * @param ethereum an EVM provider enabling read blockchain access
 * @returns an empty string or a hex encoded balance (ex. 0x12345)
 */
export async function getEvmBalance(account: string, ethereum:any): Promise<string> {
    try {
        if (ethereum) {
            // @ts-ignore
            const response = await ethereum.request<string>({
                method: EtherConstants.ETH_GET_BALANCE,
                params: [account, "latest"],
            }) as string;
            if (response) return response
        }
    } catch (error) {
        throw new Error("Failed to get the native coin balance");
    }
    return "";
}