"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FTBridge = [
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_chainId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "_chainName",
                "type": "string"
            }
        ],
        "name": "addChain",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_validator",
                "type": "address"
            }
        ],
        "name": "addValidator",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_contract",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
            }
        ],
        "name": "mapNativeContract",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_nativeCoin",
                "type": "string"
            },
            {
                "internalType": "uint16",
                "name": "_nativeChainId",
                "type": "uint16"
            }
        ],
        "stateMutFTBridgelity": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "required",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "approved",
                "type": "uint256"
            }
        ],
        "name": "InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "declared",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "provided",
                "type": "uint256"
            }
        ],
        "name": "InsufficientFunds",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_contract",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
            }
        ],
        "name": "mapWrappedContract",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_validator",
                "type": "address"
            }
        ],
        "name": "removeValidator",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "UnsupportedToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "fromChain",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "toChain",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "ReceivedInstallment",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint16",
                        "name": "chainId",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "tokenSymbol",
                        "type": "string"
                    },
                    {
                        "internalType": "address payable",
                        "name": "destinationAddress",
                        "type": "address"
                    }
                ],
                "internalType": "struct BridgeStorage.InstallmentIn",
                "name": "params",
                "type": "tuple"
            }
        ],
        "name": "receiveInstallment",
        "outputs": [],
        "stateMutFTBridgelity": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint16",
                        "name": "chainId",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "tokenSymbol",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "destinationAddress",
                        "type": "string"
                    }
                ],
                "internalType": "struct BridgeStorage.InstallmentOut",
                "name": "params",
                "type": "tuple"
            }
        ],
        "name": "sendInstallment",
        "outputs": [],
        "stateMutFTBridgelity": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "fromChain",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "toChain",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "toAddress",
                "type": "string"
            }
        ],
        "name": "SendInstallment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "stateMutFTBridgelity": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_chainId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "_chainName",
                "type": "string"
            }
        ],
        "name": "updateChain",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFees",
        "outputs": [],
        "stateMutFTBridgelity": "nonpayable",
        "type": "function"
    },
    {
        "stateMutFTBridgelity": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "actionId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "first",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "second",
                "type": "string"
            }
        ],
        "name": "areStringsEqual",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutFTBridgelity": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "BRIDGE_VALIDATOR_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fees",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "incomming",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "chainId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "destinationAddress",
                "type": "address"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAPPING_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nativeChainId",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nativeCoin",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "nativeTokens",
        "outputs": [
            {
                "internalType": "address",
                "name": "constractAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "decimals",
                "type": "uint8"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "outgoing",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "chainId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destinationAddress",
                "type": "string"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "name": "supportedChains",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TVL",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WITHDRAWER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "wrappedTokens",
        "outputs": [
            {
                "internalType": "address",
                "name": "constractAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "decimals",
                "type": "uint8"
            }
        ],
        "stateMutFTBridgelity": "view",
        "type": "function"
    }
];
exports.default = FTBridge;
//# sourceMappingURL=FTBridge.js.map