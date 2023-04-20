let valores = []
let sel_Valores = document.getElementById('selectNum')
let formulario_valor = document.getElementById('form_numero')
let div_res = document.getElementById('res')

function adicionarNum(valor){

    valores.push(Number(valor))

    let opValor = document.createElement('option')
    opValor.text = `Valor ${valor} foi adicionado`

    sel_Valores.appendChild(opValor)

    formulario_valor.value = ''
    formulario_valor.focus()

}


function verificaLista(valor, valores){


    if (valores.indexOf(valor) != -1){
        return true
    } else{
        return false
    }

}

function validaNum(){
    form_valor = formulario_valor.value

    if (form_valor.length == 0){

        alert('Formulario vazio, tente novamente')

    } else if (form_valor > 100 || form_valor < 1 ){

        alert('Dado invalido, tente novamente')
        formulario_valor.value = ''

    } else if (verificaLista(Number(form_valor), valores)){

        alert('Valor ja inserido')
        formulario_valor.value = ''

    } else {

        adicionarNum(form_valor)

    }
}

function finalize(){

    
    let soma = 0
    let media = 0
    let maior =  valores[0]
    let menor = valores[0]

    if(sel_Valores.length == 0){
        alert('Nao ha valores para analise')
    } else{

        for (let pos in valores){
            soma += Number(valores[pos])
        }

        media = soma/Number(sel_Valores.length)

        for (let pos in valores){
            
            if(maior < valores[pos]){
                maior = valores[pos]
            } else if (menor > valores[pos]){
                menor = valores[pos]
            }

        }

        div_res.innerHTML = `<p>Ao todo temos ${valores.length} valores cadastrados <br>
        O <strong>Maior</strong> valor cadastrado: ${maior} <br>
        O <strong>Menor</strong> valor cadastrado: ${menor} <br>
        A <strong>Soma</strong> de todos os valores: ${soma} <br>
        A <strong>Media</strong> dos valores cadastrados: ${media} </p>`

    }

}