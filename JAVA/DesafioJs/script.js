window.onload = function(){
    let oferta = [
        {nome: 'moto', preco: 4.5},
        {nome: 'carro', preco: 7.7},
        {nome: 'caminhão', preco: 7.29},
        {nome: 'bicicleta', preco: 3.8},
        {nome: 'patinete', preco: 6.99},
    ];

    const prod = document.querySelector('#produtos');
    const cest = document.querySelector('#cestaDoCliente');
    const total = document.querySelector('#mostraTotalCompra');
    
    (()=>{
        
        for(let pro of oferta){
            const listaVenda = document.createElement('li');
            for(let list in pro){
                if(list == 'preco')
                {prod.appendChild(listaVenda).setAttribute('data-preco', pro[list]);
                } else{
                    prod.appendChild(listaVenda).textContent= `${pro[list]}`;
                };
                
            }
            
        }
        const novaLista = document.querySelectorAll('#produtos > li')
            novaLista.forEach(function(sacola){
                sacola.addEventListener('click', function(cesta){
                    let carrinho = document.createElement('li');
                    
                    cest.appendChild(carrinho).textContent = (cesta.target.textContent);
                    cest.appendChild(carrinho).getAttribute(`data-preco ${cesta}`)
                    
             
                })
            })
          
            
    })()
}















// window.onload = function(){
// // function calcular (Mercadorias, valorTotal ){
//         const prod = document.querySelectorAll('#produtos > li');
//         const cest = document.querySelector('#cestaDoCliente');
//         const total = document.querySelector('#mostraTotalCompra');

//         // function calc (){
//         //     for(let i of prod){
//         //         const soma =0;
//         //         const resul = soma + Number(lista.dataset.preco);
//         //     }
//         //     total.value=resul
//         // }
//         // calc()
//         prod.forEach(function(lista){
//             lista.addEventListener('click', function(){

                
//         //         //  for( let i of lista){
//         //         //      const soma = 0;
//         //         //      const resul = soma + Number(lista.dataset.preco);
                    
//         //         //  }
//                 //  total.value=resul
//                 const soma = 0;
//                 const resul =soma + Number(lista.dataset.preco)
//                 // console.log(valor)
//                 total.value=resul
            
//              })
//         })
        
//         // let soma = 0;

//         // for( let i of prod ){
//         //     soma += Number(i.dataset.preco);
//         //     console.log(i.dataset.preco)
//         // };
//         // total.value = soma;
//     // }
//         // function adiciona(list){
//         //     const mesa = document.querySelectorAll('#produtos')
//         //     const produ = document.querySelectorAll(`#${list} > li`);

//         //     for(let lista of produ){
//         //         lista.addEventListener('click', function(){
//         //             const cria = document.createElement('li');
                    
//         //         })
//         //     }
//         // }
        
//         // // prod.forEach(function(lista){
//         // //     const itens = document.querySelectorAll('#produtos')
//         // //     for( let cesta of lista){
//         // //         lista.addEventListener('click', function(elementos){
//         // //         const cria = document.createElement('li');
//         // //         cest.appendChild(cria).innerHTML= (elementos.target.innerHTML);
//         // //         calcular('produtos', 'mostraTotalCompra')
//         // //         })
//         // //     }
//         // // })
//         // calcular('produtos', 'mostraTotalCompras')
//  }
 
