import { PublicClient, createPublicClient, custom, http } from "viem";
import { EVMChain, TChainName } from "../../types";
import { isEvmAddress } from "../verifiers";

/**
 * Creates a signer or a provider
 * @param address of a user
 * @param chainName the connected chain name
 * @param blockchains an array of supported chains
 * @param provider an EVM provider enabling chain interaction
 * @param isSigner a flag wheather can sign & write
 * @param url custom RPC uri
 * @returns PublicClient | undefined
 */
export function getPublicClient(
    address: string,
    chainName: TChainName,
    blockchains: EVMChain[],
    provider:any,
    isSigner: boolean = false,
    url: string = '',
): PublicClient | undefined {
    if (isEvmAddress(address)) {
        const selectedChain = blockchains.filter(net =>
            net.name === chainName)[0];

        return createPublicClient({
            chain: selectedChain,
            transport: isSigner ? custom(provider) : http(url),
        });
    }
    return undefined;
}