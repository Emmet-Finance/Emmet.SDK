const WERC20 = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "symbol_",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_bridge",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "decimals_",
                "type": "uint8"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BRIDGE_ROLE",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
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
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
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
        "name": "grantRole",
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
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
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
        "name": "symbol",
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
        "inputs": [],
        "name": "totalSupply",
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
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "newDecimals",
                "type": "uint8"
            }
        ],
        "name": "updateDecimals",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
export default WERC20;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZEVSQzIwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FiaS93cmFwcGVkRVJDMjAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUc7SUFDZDtRQUNDLFFBQVEsRUFBRTtZQUNUO2dCQUNDLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDQyxjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0MsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixNQUFNLEVBQUUsT0FBTzthQUNmO1NBQ0Q7UUFDRCxpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLE1BQU0sRUFBRSxhQUFhO0tBQ3JCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUU7WUFDVDtnQkFDQyxTQUFTLEVBQUUsSUFBSTtnQkFDZixjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDQyxTQUFTLEVBQUUsSUFBSTtnQkFDZixjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0MsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNqQjtTQUNEO1FBQ0QsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLE9BQU87S0FDZjtJQUNEO1FBQ0MsV0FBVyxFQUFFLEtBQUs7UUFDbEIsUUFBUSxFQUFFO1lBQ1Q7Z0JBQ0MsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsY0FB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