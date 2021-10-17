import { itemCarrinho } from "./cesta.js";

function prateleira (oferta, itens){
    for(let lista of oferta){
        let list = document.createElement('li');
        itens.appendChild(list).textContent= lista.produto;
    };
    

    const localItens = document.querySelectorAll(`#produtos > li`)
    let index = 0;
    for (let item of localItens){
        item.addEventListener('click', function(item){
            itemCarrinho(item, oferta);
        });
        item.setAttribute('id', index);
        index++;
    }
}
export{prateleira}

