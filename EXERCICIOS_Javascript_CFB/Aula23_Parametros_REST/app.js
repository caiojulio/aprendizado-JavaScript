
'use strict'




function soma(...valores){ //Parãmetros REST
    
    
    //usando spread para obter quantidade ilimitada de valores, 
    //desse modo reunindo os valores passados como argumento em um só array

    let tam = valores.length

    console.log(valores)
    console.log(typeof(valores))

    let resultado = 0

    for (let item of valores){
        resultado += item
    }

    return resultado

}

let res = soma(4, 5, 10)

console.log(res)





