declare const DAI: {
    readonly address: {
        readonly goerly: "0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a";
        readonly bsctestnet: "0x2AEaD32687aB9D18bb63248f94cD0ADA3ce45ce0";
        readonly mumbai: "0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48";
        readonly sparknet: "0xe0157e7a2C90A88371b508aD5818715680010086";
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
    readonly logo: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.9 7.942h-2.016c-1.11-3.08-4.094-5.192-8.029-5.192H3.384v5.192H1.136v1.862h2.248v1.954H1.136v1.863h2.248v5.129h6.471c3.89 0 6.85-2.095 7.989-5.13h2.055v-1.862h-1.602c.04-.329.062-.668.062-1.008v-.045c0-.306-.017-.606-.045-.9h1.59V7.941H19.9zM5.195 4.409h4.66c2.887 0 5.033 1.421 6.023 3.527H5.196V4.41zm4.66 12.665h-4.66v-3.46h10.672c-.997 2.073-3.137 3.46-6.013 3.46zm6.63-6.284c0 .328-.024.65-.069.962H5.196V9.8h11.227c.04.306.062.623.062.945v.046z\" fill=\"#FABB37\"/>\n</svg>";
    readonly name: "DAI";
    readonly native: "goerly";
};
export default DAI;
