
'use strict'

let f = function(...valores /* parametro REST */ ){ //não é necessária associar um nome a esta função

    let soma = 0


    for (let item of valores){

        soma += item

    }

    return soma

}


let resultado = f(10, 5)

console.log(resultado)

const c = new Function('v1', 'v2','return v1 + v2') // Função Construtora Anõnima

console.log(c(10, 5))