import Web3 from 'web3';

const alchemyKey = 'oa8se28ffhlz_VDAffaI-yyeYSB_fcEA';
const rpcURL = 'https://eth-goerli.g.alchemy.com/v2/oa8se28ffhlz_VDAffaI-yyeYSB_fcEA';

const web3 = new Web3(rpcURL);

const contractAddress = '0x9e3d83f4aec538247b80ef85033a5a15576e6ab6';

// ABI вашего смарт-контракта (замените на свой ABI)
const contractABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "integerValue",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "stringValue",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "addressValue",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "boolValue",
                    "type": "bool"
                }
            ],
            "name": "addStructure",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "removeStructure",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "integerValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "stringValue",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "addressValue",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "boolValue",
                    "type": "bool"
                }
            ],
            "name": "StructureAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "StructureRemoved",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "customStructures",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "integerValue",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "stringValue",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "addressValue",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "boolValue",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "integerValue",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "stringValue",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "addressValue",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "boolValue",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

// Создание объекта контракта с использованием Alchemy
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Пример вызова функции смарт-контракта
async function callContractFunction() {
  try {
    // Ваш вызов функции с использованием Alchemy
    const result = await contract.methods.addStructure('ключ', 42, 'строка', '0x9eef86b5f45cab6f1d3b5596255f3af0c4f18ffa', true).send({ from: '0x08a33Fd0f4ccE8A1977C2eD9E1BAc2777FeE69D9' });

    console.log('Транзакция успешно отправлена. Результат:', result);
  } catch (error) {
    console.error('Ошибка отправки транзакции:', error);
  }
}

// Пример просмотра storage смарт-контракта
async function viewStorage() {
  try {
    const storageValue = await contract.methods.customStructures('ключ').call();
    console.log('Значение в слоте storage:', storageValue);
  } catch (error) {
    console.error('Ошибка при запросе storage:', error);
  }
}

// Вызов функции
callContractFunction();

// Просмотр storage
viewStorage();