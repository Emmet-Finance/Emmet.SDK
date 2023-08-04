declare const BUSD: {
    readonly address: {
        readonly goerly: "0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a";
        readonly bsctestnet: "0xeB7A36D0B2700851c370283c83f31CfC670bF933";
        readonly mumbai: "0xCbD10d57EE3bc0088B3db30777E8b415C95f3747";
        readonly sparknet: "0xbF99037F929222cc7C0aa67acd91A12f4782b96A";
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
    readonly logo: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m1.037 9.99 2.248-2.248L5.533 9.99l-2.248 2.248L1.037 9.99zM4.421 6.607 9.99 1.04l2.248 2.248L6.67 8.855 4.421 6.607zM4.397 13.352l8.952-8.953 2.248 2.248L6.645 15.6l-2.248-2.248zM7.757 16.712 16.71 7.76l2.248 2.248-8.953 8.953-2.248-2.248z\" fill=\"#F0B90B\"/>\n</svg>";
    readonly name: "BUSD";
    readonly native: "goerly";
};
export default BUSD;
