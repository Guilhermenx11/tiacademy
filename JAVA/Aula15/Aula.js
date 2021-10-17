

// let i= false;

// // console.log(typeof i)

// if(typeof i === 'number'){
//     console.log(`Dado é um number: ${i}`)
// }
// else{
//     console.log(`Dado não é um number: ${i}`)
// } 

window.onload= function(){
    // prompt('Digite');
    const botao = document.getElementById('bt');

    const tx = document.querySelector('#tx');

    const box = document.querySelector('#box')
    
    botao.addEventListener('click', function(){
        box.innerHTML += tx.value +' ';
    })
}