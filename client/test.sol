// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MySmartContract {
    // Структура произвольного содержания
    struct CustomStructure {
        uint256 integerValue;
        string stringValue;
        address addressValue;
        bool boolValue;
    }
    CustomStructure public myData;
    constructor(){
        myData.addressValue = msg.sender;
    }
    // Отображение (mapping) с ключом произвольного типа на значение структуры
    mapping(bytes32 => CustomStructure) public customStructures;

    // События
    event StructureAdded(bytes32 indexed key, uint256 integerValue, string stringValue, address indexed addressValue, bool boolValue);
    event StructureRemoved(bytes32 indexed key);

    // Функция добавления структуры в отображение
    function addStructure(bytes32 key, uint256 integerValue, string memory stringValue, address addressValue, bool boolValue) external {
        CustomStructure memory newStructure = CustomStructure({
            integerValue: integerValue,
            stringValue: stringValue,
            addressValue: addressValue,
            boolValue: boolValue
        });

        customStructures[key] = newStructure;

        // Отправляем событие
        emit StructureAdded(key, integerValue, stringValue, addressValue, boolValue);
    }

    // Функция удаления структуры из отображения
    function removeStructure(bytes32 key) external {
        // Проверяем, что структура существует перед удалением
        require(customStructures[key].boolValue, "Structure does not exist");

        delete customStructures[key];

        // Отправляем событие
        emit StructureRemoved(key);
    }
}
