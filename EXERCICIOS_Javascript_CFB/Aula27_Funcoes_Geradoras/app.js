
function* cores(){

    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'

}


const iterador = cores() //Chamando a função pela primeira vez, ativando-a


/*

console.log(iterador.next().value) //Função para no yield vermelho
console.log(iterador.next().value) //Função para no yield Verde 
console.log(iterador.next().value) //Função para no yield Azul

*/

//Outra forma

let i = 1
while (i <= 3){

    console.log(iterador.next().value)
    i++

}


function* perguntas(){

    const nome = yield 'Qual seu nome? '
    const esporte = yield 'Qual seu esporte favorito? '

    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`

}

const itc = perguntas()

console.log(itc.next().value)
console.log(itc.next('Caio').value)
console.log(itc.next('Futebol').value)

//criando contador


function* contador(){

    let i = 0

    while(true){

        yield ++i

    }

}


const numContador = contador()

console.log(numContador.next().value)