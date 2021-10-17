import { resultadoCompra } from "./totalCompras.js";

let carrinho = [];

function itemCarrinho (produto, oferta){
    let carrinhoCliente = document.querySelector('#cestaDoCliente');
    let list = document.createElement('li');

    if(carrinho.includes(produto.target.innerText, 0) === false){
        carrinhoCliente.appendChild(list).textContent = produto.target.innerText;
        carrinho.push(produto.target.innerText)
        resultadoCompra(produto, oferta)
            }else{
                alert(`Desculpe, o item ${produto.target.innerText} já se encontra em seu carrinho`)
    }
}
export{itemCarrinho}