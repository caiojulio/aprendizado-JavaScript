

'use strict'

//Arrow Functions

const soma = (v1, v2) => { //Declaração de uma Arrow Function
    return v1 + v2

}

console.log(soma(v1, v2))

const um_parametro = n => { // quando há somente a utilização de um parâmetro na função, não é necessário o uso dos () 

    return n << 1 // deslocamento de bit para a esquerda, dobra o valor

}

let dobro = um_parametro(20)

console.log(dobro)

const sem_retorno = p => p * p // declarando arrow functions sem { }, não há obrigatoriedade do return, ou seja, não é necessário declarar return em arrow function, se for uma função simples de uma linha

console.log(sem_retorno(10))








