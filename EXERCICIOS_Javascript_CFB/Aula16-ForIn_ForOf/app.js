
'use strict'

let num = [10, 20, 30, 40, 50]


// for in

for (let pos in num){ // Por padrão, o for in guarda a posição dos elementos do vetor

    console.log(pos)

}

for (let i = 0 ; i < num.length ; i++){

    console.log(i)

}

/* 

for in é equivalente ao seguinte trecho de código:

for (let i = 0 ; i < num.length ; i++){

    console.log(i)

}

*/


for (let item of num){ // por padrão, o for of guarda em cada iteração do laço, um elemento do vetor

    console.log(item)

}

/*

for of é equivalente ao seguinte trecho de código:

for (let i = 0 ; i < num.length ; i++){

    console.log(num[i])

}

*/

