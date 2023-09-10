import FTBridge from "../../abi/FTBridge";
import { BridgeChainIds, TChainName } from "../../types";
import { formatChainName } from "../format";
import { config } from "./config";

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