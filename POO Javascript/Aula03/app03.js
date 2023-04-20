
import modificador from './modificador.js'

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