import { encodePacked, keccak256 } from "viem";
import { TChainName, allChainNameToIndex, testnets } from "../../types";
import FTBridge from "../../abi/FTBridge";
import { getPublicClient } from "./getPublicClient";


/**
 * Retrieves the destination chain fee estimation in `wei`
 * @param amount number of tokens planned for transfer
 * @param senderAddress the address of the owner & sender of the tokens
 * @param destinationAddress the address of the token receiver
 * @param fromChainName the chain of origin
 * @param toChainName the chain of destination
 * @param tokenSymbol the 4-6 short identifier of the token
 * @returns bigint | 22880n
 */
export async function estimateReceive(
    amount: string | bigint,
    senderAddress: string,
    destinationAddress: string,
    fromChainName: TChainName,
    toChainName: string,
    tokenSymbol: string
): Promise<bigint> {

    try {

        const selectedChain = testnets.filter(net =>
            net.name === fromChainName)[0];

        const publicClient = getPublicClient(senderAddress, fromChainName, [selectedChain], true);

        // Departure internal bridge nonce
        const nativeChainId: number = allChainNameToIndex[fromChainName];
        // Destination internal bridge nonce
        const toChainId: number = allChainNameToIndex[toChainName];
        // For estimation we use the MAX uint256
        const actionId: bigint = 2n ** 256n - 1n;

        const txHash = keccak256(encodePacked(
            ['uint16', 'string', 'uint16', 'string', 'uint256'],
            [nativeChainId, "-", toChainId, "-", actionId]
        ));

        const populatedArgs: [bigint, number, string, string] = [
            BigInt(amount),
            toChainId,
            tokenSymbol,
            destinationAddress
        ];

        const estimation = await publicClient?.estimateContractGas({
            address: `0x${selectedChain.bridge.slice(2)}`,
            abi: FTBridge,
            functionName: 'receiveInstallment',
            args: [txHash, populatedArgs],
            account: `0x${senderAddress.slice(2)}`
        }) as bigint;

        const gasPrice = await publicClient!.getGasPrice();

        return estimation * gasPrice;

    } catch (error) {
        console.error("estimateReceive Error:", error);
    }
    return 22880n * 20n;
}