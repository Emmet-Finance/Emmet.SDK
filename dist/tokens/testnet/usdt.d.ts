declare const USDT: {
    readonly address: {
        readonly goerly: "0x291E558C60FB567087D9b87bd62b84Af67b9a376";
        readonly bsctestnet: "0x65329f02eb198478E18212253B186D9e1AFA04f9";
        readonly mumbai: "0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01";
        readonly sparknet: "0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F";
    };
    readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    readonly decimals: 18;
    readonly logo: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.646 1.75v3.09h-6.389v2.143c4.488.23 7.854 1.17 7.88 2.297v2.35c-.026 1.128-3.392 2.068-7.88 2.297v5.259H8.015v-5.259C3.528 13.698.161 12.757.136 11.63V9.28c.025-1.127 3.392-2.068 7.879-2.297V4.841H1.626V1.75h17.02zm-8.51 10.563c4.789 0 8.791-.796 9.77-1.858-.83-.9-3.834-1.61-7.648-1.804v2.244a41.69 41.69 0 0 1-4.243 0V8.65c-3.814.195-6.819.904-7.65 1.804.98 1.062 4.983 1.858 9.771 1.858z\" fill=\"#009393\"/>\n</svg>";
    readonly name: "USDT";
    readonly native: "goerly";
};
export default USDT;
