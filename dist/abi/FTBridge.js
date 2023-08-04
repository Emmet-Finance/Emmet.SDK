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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "stateMutability": "payable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
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
        "stateMutability": "payable",
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
        "stateMutability": "payable",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
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
        "stateMutability": "view",
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
        "stateMutability": "pure",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
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
        "stateMutability": "view",
        "type": "function"
    }
];
exports.default = FTBridge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlRCcmlkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWJpL0ZUQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxRQUFRLEdBQUc7SUFDaEI7UUFDQyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxjQUFjLEVBQUUsUUFBUTtnQkFDeEIsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0MsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixNQUFNLEVBQUUsUUFBUTthQUNoQjtTQUNEO1FBQ0QsTUFBTSxFQUFFLFVBQVU7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLE1BQU0sRUFBRSxVQUFVO0tBQ2xCO0lBQ0Q7UUFDQyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxTQUFTO2FBQ2pCO1NBQ0Q7UUFDRCxNQUFNLEVBQUUsY0FBYztRQUN0QixTQUFTLEVBQUUsRUFBRTtRQUNiLGlCQUFpQixFQUFFLFlBQVk7UUFDL0IsTUFBTSxFQUFFLFVBQVU7S0FDbEI7SUFDRDtRQUNDLFFBQVEsRUFBRTtZQUNUO2dCQUNDLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNDLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLFNBQVM7YUFDakI7U0FDRDtRQUNELE1BQU0sRUFBRSxXQUFXO1FBQ25CLFNBQVMsRUFBRSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixNQUFNLEVBQUUsVUFBVTtLQUNsQjtJQUNEO1FBQ0MsUUFBUSxFQUFFO1lBQ1Q7Z0JBQ0MsY0FBYyxFQUFF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