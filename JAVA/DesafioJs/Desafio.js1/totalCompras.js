
let base = 0;

function resultadoCompra (oferta, produto){
    let valorCompra = document.querySelector('#mostraTotalCompra');
    
    base += produto[oferta.target.id].preco;
    valorCompra.value= `${Number(base.toFixed(2))} R$`;

};
export{resultadoCompra}