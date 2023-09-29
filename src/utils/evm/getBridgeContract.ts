import FTBridge from "../../abi/FTBridge";
import { getBridgeAddress } from "./getBridgeAddress";
import { getSigner } from "./getSigner";
import { ethers } from "ethers";

export async function getBridgeContract(
    chainName: string,
    senderAddress: string
) {
    const bridgeAddress: string = getBridgeAddress(chainName);
    const signer = await getSigner(senderAddress);
    const contract = new ethers.Contract(
        bridgeAddress,
        FTBridge,
        signer
    );
    return contract;
}