// let Pessoas = {
//     'nome': 'Antonio',
//     'sexo': 'm',
//     'profissão': 'marceneiro',
// }

// for(let propriedade in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.sexo);
// }

// let carros = ['gol', 'fusca', 'opala', 'uno']

// for(let valorCarros of carros){
//     console.log(" os carros são", valorCarros);
// }

let Pessoas = [
    {
        'nome': 'antonio',
        'profissão': 'marceneiro',
        'sexo': 'M',
    },
    {
        'nome': 'ana',
        'profissão': 'merendeira',
        'sexo': 'F',
    }
];

Pessoas.push({
        'nome': 'carlos',
        'profissão': 'padeiro',     //>>USANDO UM PUSH PARA ACRECENTAR UM ELEMENTO AO ARRAY
        'sexo': 'M',
})

// let idenditidade = Pessoas[0].nome

// console.log(idenditidade)

for(let objeto of Pessoas){
    // console.log(Pessoas)
    for(let h in objeto){
        console.log(`${h} : ${objeto[h]}`)
    }
}
