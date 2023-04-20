

'use strict'

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]


let n3 = [...n1] // copiando um array com o operador spread

console.log(n3)

let valores = [ 1, 2, 3 ]

let soma = function(v1, v2, v3){

    return v1+v2+v3

}

console.log(soma(...valores))