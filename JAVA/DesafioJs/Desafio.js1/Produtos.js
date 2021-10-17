import{prateleira} from './prateleira.js'
window.onload = function(){
    const produtos = document.querySelector('#produtos');
    let oferta = [
        {'produto': 'Banana', 'preco': 4.5},

        {'produto': 'Goiaba', 'preco': 7.7},

        {'produto': 'Melão', 'preco': 7.29},

        {'produto': 'Uva', 'preco': 3.8},

        {'produto': 'Tomate', 'preco': 6.99},

        {'produto': 'Laranja', 'preco': 2.84}

        
    ];
   
    prateleira(oferta, produtos)
};
