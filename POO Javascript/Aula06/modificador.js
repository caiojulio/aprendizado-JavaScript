
/*

function fnCapitalizarNovoMINHAFORMA(colecao){

    if (typeof colecao[0] == 'string'){

        return fnCapitalizar(colecao)

    } else if (typeof colecao[0] == 'object'){

        for (var i = 0 ; i < colecao.length ; i++){

            let letraInicial = colecao[i].nome.charAt(0).toUpperCase()
            let restoTexto = colecao[i].nome.slice(1)
            let resultado = letraInicial + restoTexto


            colecao[i].nome = resultado

        }

        return colecao

    }

}

*/

function fnCapitalizarNovo(colecao, atributo){

    if (typeof colecao[0] == 'string'){

        let resultado_map = colecao.map(

            function (ingrediente){

                let letraInicial = ingrediente.charAt(0).toUpperCase()
                let restoString = ingrediente.slice(1)

                return ingrediente = letraInicial + restoString

            }

        )

        return resultado_map

    } else if (typeof colecao[0] == 'object'){

        var resultado = colecao.map( 

            function (objeto){

                let letraInicial = objeto[atributo].charAt(0).toUpperCase()
                let restoTexto = objeto[atributo].slice(1)

                objeto[atributo] = letraInicial + restoTexto

                return objeto

            }

        )

        return resultado

    }



}

/*

PRIMEIRA VERSÃO CAPITALIZAR

function fnCapitalizar(vetor){

    let modificado = []

    for (let i = 0 ; i < vetor.length ; i++){

        let letraInicial = vetor[i].charAt(0).toUpperCase()

        let restoTexto = vetor[i].slice(1)

        let resultado = letraInicial + restoTexto

        modificado.push(resultado)
    } 

    return modificado

}

*/


function fnOrdenar(vetor){

    return vetor.sort(

        function(a, b){

            return a.localeCompare(b)

        }

    )

}

function fnOrdenarNovo(colecao, atributo){

    return atributo ?
        colecao.sort(

            function(a, b){

                return typeof a[atributo] == 'number' ?  a[atributo] - b[atributo] : a[atributo].localeCompare(b[atributo])
                
            }

        ):
        colecao.sort(

            function(a, b){

                return typeof a == 'number' ? a - b : a.localeCompare(b)

            }

        )

}

function fnCaixaAlta(vetor){

    let vetor_modificado = []

    for(let i = 0 ; i < vetor.length ; i++){

        vetor_modificado.push(vetor[i].toUpperCase())

    }

    return vetor_modificado

}

function fnCaixaBaixa(vetor){

    let vetor_modificado = []

    for(let i = 0 ; i < vetor.length ; i++){

        vetor_modificado.push(vetor[i].toLowerCase())

    }

    return vetor_modificado


}

export default {

    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta,
    caixaBaixa: fnCaixaBaixa,
    capitalizarNovo: fnCapitalizarNovo,
    ordenarNovo: fnOrdenarNovo

//    capitalizarNovo: fnCapitalizarNovoMINHAFORMA
//    capitalizar: fnCapitalizar,

}