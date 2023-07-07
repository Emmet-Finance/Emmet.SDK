# New Token Integration

## 1. Add to the bridge contract

Add the contract to the native bridge contracts on the chain of origin.

## 2. Add wrapped contracts

Bridge the token to all the supported chains. The wrapped contracts will be deployed automatically.

Find the addresses of the wrapped contracts.
## 3. Logo

Add the token logo in SVG format to:
```bash
./src/logos/token/lowercasedname.svg
```

## 4. Contract ABI

Add the contract ABI to the:

```bash
./src/abis/lowercasedname.ts
```

## 5. Info

Add the token information to the:

```bash
./src/data/<environment>Token.json
```
where `<environment>` is one of mainnet | testnet.

Every new token record must be represented like in this example:

```json
"usdt":{
        "abi":"usdt.ts",
        "decimals":"18",
        "logo":"usdt.svg",
        "name":"USDT",
        "native":{
            "address":"0x291E558C60FB567087D9b87bd62b84Af67b9a376",
            "chain":"goerly"
        },
        "wrapped":[
            {
                "address":"0x65329f02eb198478E18212253B186D9e1AFA04f9",
                "chain":"bsc"
            },
            {
                "address":"0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
                "chain":"mumbai"
            },
            {
                "address":"0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F",
                "chain":"sparknet"
            }
        ]
    }
```
