
function validaDados(){
    var formValorInicial = document.getElementById('valorInicial').value
    var formValorFinal = document.getElementById('valorFinal').value
    var formPasso = document.getElementById('diferenca').value

    var div_resposta = document.getElementById('res')

    if (formValorInicial.length == 0 || formValorFinal.length == 0 || formPasso.length == 0){
        
        div_resposta.innerHTML = 'Verifique os dados e tente novamente'

    } else if(formPasso <= 0){
        alert('Passo Invalido, considerando Passo = 1')

        var valorInicial = Number(formValorInicial)
        var valorFinal  = Number(formValorFinal)

        if(valorInicial >= valorFinal){

            for (valorInicial; valorInicial <= valorFinal; valorInicial+=1){

                    div_resposta.innerHTML += `${valorInicial} \u{1F449}`

            }

            div_resposta.innerHTML += `${valorInicial} \u{1F38C}`
        } else {

            for (valorInicial; valorInicial >= valorFinal; valorInicial-=1){

                div_resposta.innerHTML += `${valorInicial} \u{1F449}`

        }
            div_resposta.innerHTML += `${valorInicial} \u{1F38C}`
        }

    }else {
        var valorInicial = Number(formValorInicial)
        var valorFinal  = Number(formValorFinal)
        var passo = Number(formPasso)

        if(valorInicial >= valorFinal){

            for (valorInicial; valorInicial <= valorFinal; valorInicial+=passo){

                    div_resposta.innerHTML += `${valorInicial} \u{1F449}`

            }

            div_resposta.innerHTML += `${valorInicial} \u{1F38C}`
        } else {

            for (valorInicial; valorInicial >= valorFinal; valorInicial-=passo){

                div_resposta.innerHTML += `${valorInicial} \u{1F449}`

        }

            div_resposta.innerHTML += `${valorInicial} \u{1F38C}`
        }
    
    }
}

