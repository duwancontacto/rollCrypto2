// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC1155, Ownable {
    /*

    * 5 uris nfts,  con maximos iguales, agortar stock
    * funcion transfer bloqueda
    * lista de compra
    * control de fondos. (bnb)

    */ 
    uint256 idsNumber;// Numero del iD del token (1-5 uno por cada nft(foto que tienes))
    uint maxMint; // Maximo para todos los nfts. Editable, pero siempre sera el mismo numero para todos.
    uint[5] balanceMint;// pos [0] -> balance actual para numero de id del nft. 
    uint[3] pricePerNFT; // 3 cajas 3 precios, de menor a mayor. 
    address[] listLow; // lista para los cofres baratos
    address[] listMid; //lista para los cofres medios
    address[] listHigh; //lista para los cofres caros

    event FoundsOut(address,uint,address); // withdraw found of this contract(msg.sender, total, address founds)


    constructor(uint _priceLow, uint _priceMid, uint _priceHigh, uint _maxMint) ERC1155("https://ipfs.io/ipfs/{id}") {
        pricePerNFT[0] = _priceLow; //seteo de la caja
        pricePerNFT[1] = _priceMid;
        pricePerNFT[2] = _priceHigh;
        maxMint = _maxMint;
    }

    function buy()public payable returns(bool){
        require((msg.value ==pricePerNFT[0])|| (msg.value ==pricePerNFT[1]) || (msg.value ==pricePerNFT[2]), "not founds");
        if(msg.value == pricePerNFT[0]){
            listLow.push(msg.sender);
        }
        if(msg.value == pricePerNFT[1]){
            listLow.push(msg.sender);
        }
        if(msg.value == pricePerNFT[2]){
            listLow.push(msg.sender);
        }
        mint(msg.sender);
        //event buy(addres)
        return true;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account)
        internal
    {
        uint id;
        if(balanceMint[0] < maxMint){
            id = 0;
            balanceMint[0]++;
        }else if(balanceMint[1] < maxMint) {
            id = 1;
            balanceMint[1]++;
        }else if(balanceMint[2] < maxMint) {
            id = 2;
            balanceMint[2]++;
        }else if(balanceMint[3] < maxMint) {
            id = 3;
            balanceMint[3]++;
        }else  {
            id = 4;
            balanceMint[4]++;
        }
        require(balanceMint[id] <=  maxMint, "Vendido todos los nfts");

        _mint(account, id, 1, "");
    }

    //funcion para cambiar el precio de cada cofre.
    function setNewPrice(uint _priceLow, uint _priceMid, uint _priceHigh) public onlyOwner{
        pricePerNFT[0] = _priceLow; //seteo de la caja
        pricePerNFT[1] = _priceMid;
        pricePerNFT[2] = _priceHigh;
        //todo: event
    }
    //funcion para nuevo maximo de nfts, seteado en el constructor
    function setNewMax(uint _newMax) public onlyOwner{
        maxMint = _newMax;
        //todo: Event
        //puede usarse para aumentar el maximo, junto a aumentar el precio si es que tiene ventas instantaneas.
    }

    //funcion para retirar fondos. emite un evento, _to, es la direccion donde terminan los fondos.
    function trasnferFoundsOUT(uint _amount, address _to) public payable onlyOwner(){
        payable(_to).transfer(_amount);
        emit FoundsOut(msg.sender, _amount,_to);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
    
}