
//Calculadora basica utilizando funções dentro de array

let inputNum1 = document.getElementById('num1')
let inputNum2 = document.getElementById('num2')

let btnSoma = document.getElementById('btnSoma')
let btnSub = document.getElementById('btnSub')
let btnMult = document.getElementById('btnMult')
let btnDiv = document.getElementById('btnDiv')

let divRes = document.getElementById('res')

const operacoes = [

    (n1, n2) => {

        let soma = n1 + n2
        return soma
        

    },

    (n1, n2) => {

        let sub = n1 - n2
        return sub

    },

    (n1, n2) => {

        let mult = n1*n2
        return mult

    },


    (n1, n2) => {

        let div = n1 / n2
        return div

    }
]

btnSoma.addEventListener('click', () => {

    if (inputNum1.value.length != 0 && inputNum2.value.length != 0){

        let resultadoSoma = operacoes[0](Number(inputNum1.value), Number(inputNum2.value))
        divRes.innerHTML =  `A Soma de ${inputNum1.value} e  ${inputNum2.value} equivale a: ${resultadoSoma}`

    } else {
        
        alert('TODOS OS CAMPOS DEVEM SER PREENCHIDOS')

    }

})

btnSub.addEventListener('click', () => {

    if (inputNum1.value.length != 0 && inputNum2.value.length != 0){

        let resultadoSub = operacoes[1](Number(inputNum1.value), Number(inputNum2.value))
        divRes.innerHTML =  `A Subtração de ${inputNum1.value} e  ${inputNum2.value} equivale a: ${resultadoSub}`

    } else {
            
        alert('TODOS OS CAMPOS DEVEM SER PREENCHIDOS')

    }


})

btnMult.addEventListener('click', () => {

    if (inputNum1.value.length != 0 && inputNum2.value.length != 0){

        let resultadoMult = operacoes[2](Number(inputNum1.value), Number(inputNum2.value))
        divRes.innerHTML =  `A Multiplicação de ${inputNum1.value} e  ${inputNum2.value} equivale a: ${resultadoMult}`

    } else {
            
        alert('TODOS OS CAMPOS DEVEM SER PREENCHIDOS')

    }


})

btnDiv.addEventListener('click', () => {

    if (inputNum1.value.length != 0 && inputNum2.value.length != 0){

        let resultadoDiv = operacoes[3](Number(inputNum1.value), Number(inputNum2.value))
        divRes.innerHTML =  `A Divisão de ${inputNum1.value} e  ${inputNum2.value} equivale a: ${resultadoDiv}`

    } else {
            
        alert('TODOS OS CAMPOS DEVEM SER PREENCHIDOS')

    }


})

