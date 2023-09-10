import { createPublicClient, createWalletClient, custom, http } from "viem";
import { ALL_CHAINS } from "../../chains";
import { TChainName } from "../../types";
import { formatChainName } from "../format";


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