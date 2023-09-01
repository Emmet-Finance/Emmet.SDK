# New Chain Integration


## 1. Deploy the endpoint

Deploy the bridge contract on the new chain and save its address.
## 2. Logo

Add the chain logo in SVG format to:

```bash
./src/logos/chain/lowercasedname.svg
```
## 3. Chain Info

Add the chain info in JSON format to:

```bash
./src/data/<environment>.json
```

Wehere `<environment>` must be replaced with `mainnet` | `testnet`.

Example:

```json
"goerli": {
        "bridge": "0x52c5cF8d571b1c8cBF75b5f1bD088C1Dd4598bC7",
        "chainName": "goerli",
        "chainId": "0x5",
        "explorer": "https://goerli.etherscan.io",
        "logo":"eth.svg",
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rpc.ankr.com/eth_goerli",
            "https://eth-goerli.public.blastapi.io",
            "https://goerli.blockpi.network/v1/rpc/public",
            "https://endpoints.omniatech.io/v1/eth/goerli/public"
        ]
    }
```