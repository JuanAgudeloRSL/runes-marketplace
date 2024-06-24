export const Abi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "components": [
                                    {
                                        "internalType": "string",
                                        "name": "name",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "metadataURI",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "implementation",
                                        "type": "address"
                                    }
                                ],
                                "internalType": "struct IExtension.ExtensionMetadata",
                                "name": "metadata",
                                "type": "tuple"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "bytes4",
                                        "name": "functionSelector",
                                        "type": "bytes4"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "functionSignature",
                                        "type": "string"
                                    }
                                ],
                                "internalType": "struct IExtension.ExtensionFunction[]",
                                "name": "functions",
                                "type": "tuple[]"
                            }
                        ],
                        "internalType": "struct IExtension.Extension[]",
                        "name": "extensions",
                        "type": "tuple[]"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyEngineAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "nativeTokenWrapper",
                        "type": "address"
                    }
                ],
                "internalType": "struct MarketplaceV3.MarketplaceConstructorParams",
                "name": "_marketplaceV3Params",
                "type": "tuple"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_size",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_start",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_end",
                "type": "uint256"
            }
        ],
        "name": "InvalidCodeAtRange",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "WriteError",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "prevURI",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newURI",
                "type": "string"
            }
        ],
        "name": "ContractURIUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            },
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.Extension",
                "name": "extension",
                "type": "tuple"
            }
        ],
        "name": "ExtensionAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.Extension",
                "name": "extension",
                "type": "tuple"
            }
        ],
        "name": "ExtensionRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            },
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.Extension",
                "name": "extension",
                "type": "tuple"
            }
        ],
        "name": "ExtensionReplaced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "flatFee",
                "type": "uint256"
            }
        ],
        "name": "FlatPlatformFeeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "bytes4",
                "name": "functionSelector",
                "type": "bytes4"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "metadataURI",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.ExtensionMetadata",
                "name": "extMetadata",
                "type": "tuple"
            }
        ],
        "name": "FunctionDisabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "bytes4",
                "name": "functionSelector",
                "type": "bytes4"
            },
            {
                "components": [
                    {
                        "internalType": "bytes4",
                        "name": "functionSelector",
                        "type": "bytes4"
                    },
                    {
                        "internalType": "string",
                        "name": "functionSignature",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.ExtensionFunction",
                "name": "extFunction",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "metadataURI",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                    }
                ],
                "indexed": false,
                "internalType": "struct IExtension.ExtensionMetadata",
                "name": "extMetadata",
                "type": "tuple"
            }
        ],
        "name": "FunctionEnabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "PlatformFeeInfoUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum IPlatformFee.PlatformFeeType",
                "name": "feeType",
                "type": "uint8"
            }
        ],
        "name": "PlatformFeeTypeUpdated",
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
                "name": "previousAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newAddress",
                "type": "address"
            }
        ],
        "name": "RoyaltyEngineUpdated",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
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
                "internalType": "string",
                "name": "_extensionName",
                "type": "string"
            },
            {
                "internalType": "bytes4",
                "name": "_functionSelector",
                "type": "bytes4"
            }
        ],
        "name": "_disableFunctionInExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IExtension.Extension",
                "name": "_extension",
                "type": "tuple"
            }
        ],
        "name": "addExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractType",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURI",
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
        "name": "contractVersion",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "defaultExtensions",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_extensionName",
                "type": "string"
            },
            {
                "internalType": "bytes4",
                "name": "_functionSelector",
                "type": "bytes4"
            }
        ],
        "name": "disableFunctionInExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_extensionName",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "bytes4",
                        "name": "functionSelector",
                        "type": "bytes4"
                    },
                    {
                        "internalType": "string",
                        "name": "functionSignature",
                        "type": "string"
                    }
                ],
                "internalType": "struct IExtension.ExtensionFunction",
                "name": "_function",
                "type": "tuple"
            }
        ],
        "name": "enableFunctionInExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllExtensions",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IExtension.Extension[]",
                "name": "allExtensions",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "extensionName",
                "type": "string"
            }
        ],
        "name": "getExtension",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IExtension.Extension",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFlatPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
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
                "internalType": "bytes4",
                "name": "_functionSelector",
                "type": "bytes4"
            }
        ],
        "name": "getImplementationForFunction",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "functionSelector",
                "type": "bytes4"
            }
        ],
        "name": "getMetadataForFunction",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "metadataURI",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                    }
                ],
                "internalType": "struct IExtension.ExtensionMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
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
        "name": "getPlatformFeeType",
        "outputs": [
            {
                "internalType": "enum IPlatformFee.PlatformFeeType",
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
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
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
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "count",
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
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "getRoyalty",
        "outputs": [
            {
                "internalType": "address payable[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoyaltyEngineAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "royaltyEngineAddress",
                "type": "address"
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
        "name": "hasRoleWithSwitch",
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
                "name": "_defaultAdmin",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_contractURI",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_trustedForwarders",
                "type": "address[]"
            },
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "_platformFeeBps",
                "type": "uint16"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
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
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "multicall",
        "outputs": [
            {
                "internalType": "bytes[]",
                "name": "results",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_extensionName",
                "type": "string"
            }
        ],
        "name": "removeExtension",
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
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "metadataURI",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "implementation",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionMetadata",
                        "name": "metadata",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes4",
                                "name": "functionSelector",
                                "type": "bytes4"
                            },
                            {
                                "internalType": "string",
                                "name": "functionSignature",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct IExtension.ExtensionFunction[]",
                        "name": "functions",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IExtension.Extension",
                "name": "_extension",
                "type": "tuple"
            }
        ],
        "name": "replaceExtension",
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
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "setContractURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_flatFee",
                "type": "uint256"
            }
        ],
        "name": "setFlatPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "setPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum IPlatformFee.PlatformFeeType",
                "name": "_feeType",
                "type": "uint8"
            }
        ],
        "name": "setPlatformFeeType",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_royaltyEngineAddress",
                "type": "address"
            }
        ],
        "name": "setRoyaltyEngine",
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
        "stateMutability": "payable",
        "type": "receive"
    }
]