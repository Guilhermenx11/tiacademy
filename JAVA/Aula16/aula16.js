window.onload = function(){

    const pai = document.querySelectorAll("#pai");

    console.log(pai)

    pai.forEach(function(lista){

        lista.addEventListener('click', function(elemento){
            alert(elemento.target.innerHTML);
        })
    })
}