
var ingredientes = [ 'mel', 'água' , 'sal' , 'mostarda' ]

function capitalizar(ingredientes){

    let modificado = []

    for (let i = 0 ; i < ingredientes.length ; i++){

        let letraInicial = ingredientes[i].chatAt(0).toUpperCase()

        let restoTexto = ingredientes[i].slice(1)

        let resultado = letraInicial + restoTexto

        modificado.push(resultado)

    } 

    return modificado

}

function ordernar(ingredientes){

    return ingredientes.sort(

        function(a, b){

            return a.localeCompare(b)

        }

    )

}

let resultadoCapitalizar = capitalizar(ingredientes)
let resultadoOrdernar = ordernar(resultadoCapitalizar)

console.log(resultadoCapitalizar)
console.log(resultadoOrdernar)