import { ALL_CHAINS } from "../../chains";
import { testnetTokens } from "../../tokens";
import { TChainName, TTestnetTokenNames, TestnetTokenNames, TokenBalanceObject, testnets } from "../../types";
import { formatChainName } from "../format";
import { isEvmAddress } from "../verifiers";
import { getContract } from "./getContract";
import { getPublicClient } from "./getPublicClient";

/**
 * Loops through Token contracts & extracts user allowances
 * @param account checked account
 * @returns an empty or filled `allowances` Object
 */
export async function getEvmTokenAllowances(
    account: string,
    chainName: TChainName
): Promise<TokenBalanceObject | undefined> {

    let allowances: { [key: TTestnetTokenNames | string]: string } = {};

    if (isEvmAddress(account) && chainName) {

        const publicClient = getPublicClient(account, chainName, testnets, true);

        for await (const tokenName of TestnetTokenNames) {
            const token = testnetTokens[tokenName]

            const address: string = token.address[chainName.toLowerCase()];

            if (address) {

                const contract = getContract(
                    address,
                    token.abi,
                    publicClient,
                );

                const chain = ALL_CHAINS[formatChainName(chainName) as keyof typeof ALL_CHAINS];

                allowances[tokenName] = (await contract.read.allowance([
                    account,
                    chain.bridge.toString()
                ])).toString();
            }

        }
    }
    return allowances || undefined;
}