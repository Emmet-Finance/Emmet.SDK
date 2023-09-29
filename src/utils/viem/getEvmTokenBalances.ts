import { testnetTokens } from "../../tokens";
import { TChainName, TTestnetTokenNames, TestnetTokenNames, TokenBalanceObject, testnets } from "../../types";
import { formatChainName } from "../format";
import { isEvmAddress } from "../verifiers";
import { getContract } from "./getContract";
import { getPublicClient } from "./getPublicClient";

/**
 * Loops through Token contracts & extracts user balances
 * @param account checked account
 * @param chainName the name of the required chain
 * @param provider an EVM chain connection and interaction provider
 * @returns filled `balances` Object | undefined
 */
export async function getEvmTokenBalances(
    account: string,
    chainName: TChainName,
    provider: any
): Promise<TokenBalanceObject | undefined> {

    let balances: { [key: TTestnetTokenNames | string]: string } = {};

    if (isEvmAddress(account) && chainName) {

        const publicClient = getPublicClient(account, chainName, testnets, provider, true);

        for await (const tokenName of TestnetTokenNames) {

            const token = testnetTokens[tokenName]

            const address: string = token.address[formatChainName(chainName)];

            if (address && publicClient) {

                const contract = getContract(
                    address,
                    token.abi,
                    publicClient,
                );

                balances[tokenName] = (await contract.read.balanceOf([account])).toString();;
            }
        }
    }
    return balances || undefined;
}