

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


function fnOrdenar(vetor){

    return vetor.sort(

        function(a, b){

            return a.localeCompare(b)

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

    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta,
    caixaBaixa: fnCaixaBaixa

}