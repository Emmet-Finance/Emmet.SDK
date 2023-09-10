import { testnetTokens } from "../../tokens";
import { SupportedTokenType, TChainName } from "../../types";
import { formatChainName } from "../format";
import { config } from "./config";


/**
 * @dev Approves the bridge to spend the `amount` of ERC20
 * @param chainName the chain name where to approve
 * @param tokenName the token symbol
 * @param amount the token quantity x decimals
 * @returns the hash of the transaction
 */
export async function approveERC20(
    chainName: TChainName,
    tokenName: string,
    amount: string,
) {

    const {
        account,
        chain,
        publicClient,
        signer
    } = await config(chainName);

    const tokenContract: SupportedTokenType = testnetTokens[
        tokenName
            .toLocaleUpperCase() as keyof typeof testnetTokens
    ];

    const args: [string, string] = [
        chain.bridge,
        amount
    ];

    const tokenContractAddress: string = tokenContract.address[
        formatChainName(chainName)
    ];

    const { request } = await publicClient.simulateContract({
        address: `0x${tokenContractAddress.slice(2)}`,
        abi: tokenContract.abi,
        functionName: 'approve',
        args,
        account,
        chain,
    });

    return await signer.writeContract(request);

}