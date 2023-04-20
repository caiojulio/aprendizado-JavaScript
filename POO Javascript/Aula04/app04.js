
import modificador from './modificador.js'
import ingredientes from './ingredientes.js' 
import saladas from './saladas.js'

console.log(ingredientes)
console.log(typeof ingredientes)
console.log(Array.isArray(ingredientes))

console.log(saladas[2].nome)


/*

var ingredientes = [ 'mel', 'água' , 'sal' , 'mostarda' ]

let resultadoCapitalizar = modificador.capitalizar(ingredientes)
let resultadoOrdernar = modificador.ordenar(resultadoCapitalizar)
let resultadoCaixaAlta = modificador.caixaAlta(ingredientes)

let resultadoCaixaBaixa = modificador.caixaBaixa(ingredientes)
let resultadoCaixaBaixaOrdenado = modificador.caixaBaixa(resultadoOrdernar)

console.log(resultadoCapitalizar)
console.log(resultadoOrdernar)
console.log(resultadoCaixaAlta)

let divRes = document.getElementById('res-cb')

divRes.innerHTML += `Resultado em caixa baixa: ${resultadoCaixaBaixa} <strong>ordenado:</strong> ${resultadoCaixaBaixaOrdenado} `

*/