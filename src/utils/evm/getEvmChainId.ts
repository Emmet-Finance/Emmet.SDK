import { ethereum } from '../../interfaces';
import EtherConstants from '../../wallets/EthreumConstants';

/**
 * Extracts EVM chainId from the wallet provider
 * @returns an empty string or a hex encoded chainId (ex. 0x12345)
 */
export async function getEvmChainId(): Promise<string> {
    try {
        if (ethereum) {
            const chainid: string = await ethereum?.request<string>({
                method: EtherConstants.ETH_CHAIN_ID
            }) as string;
            if (chainid) return chainid;
        }
    } catch (error) {
        throw new Error("Failed to get the current chain ID");
    }
    return "";
}