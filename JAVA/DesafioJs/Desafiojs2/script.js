window.onload = function(){
    function resultado (resulCep){
        for (let texto in resulCep){
            if(document.querySelector(`#${texto}`)){
                document.querySelector(`#${texto}`).value = resulCep[texto]
            }
        }
    }
    
    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json`;
        try{
        let dadosF = await fetch(url);
        let dadosJ = await dadosF.json();
        resultado(dadosJ);
        } catch (error){
            alert('Ocorreu um erro')
        }
    }

    const bot = document.querySelector('#botao')
    const textCep = document.querySelector('#cep')

    bot.addEventListener('click' , function(){
        dadosCep(textCep.value);
    })
    
}