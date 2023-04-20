
import modificador from './modificador.js'
import ingredientes from './ingredientes.js' 
import saladas from './saladas.js'

let ingredientes_ordenar = modificador.ordenarNovo(ingredientes, 'nome')

let ingredientesCapitalizar = modificador.capitalizarNovo(ingredientes_ordenar, 'nome')

let ingredientes_formatados =  ingredientesCapitalizar

var div_ingredientes = document.getElementById('container-ingredientes')

for( let ingredientes of ingredientes_formatados ){

    let textoHTML = `
        <div class='ingrediente'>
            <img src='img/${ingredientes.img}'>
            <p class='nome-ingrediente'>${ingredientes.nome}</p>
        </div>
    `

    div_ingredientes.innerHTML += textoHTML

}




/*

            MINHA TENTATIVA

var div_ingredientes = document.getElementById('container-ingredientes')

for (let pos in ingredientes_formatados){

    let imagem = ingredientes_formatados[pos].img
    let nome = ingredientes_formatados[pos].nome

    let div_ingrediente = document.createElement('div').setAttribute('class', 'ingrediente')

    div_ingredientes.appendChild(div_ingrediente)

    let paragrafo = document.createElement('p').setAttribute('class', 'nome-ingrediente')
    let img = document.createElement('img').setAttribute('src', `img/${imagem}`)

    paragrafo = `${nome}`

    div_ingrediente.appendChild(paragrafo)
    div_ingrediente.appendChild(img)

}

*/
