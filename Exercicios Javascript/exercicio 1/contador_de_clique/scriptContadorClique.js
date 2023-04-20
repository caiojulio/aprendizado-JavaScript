
let div_contagem = document.getElementById('contClique')
let contador = 0


function incremento(){

    contador+= 1

    if ((contador % 2) == 0){

        div_contagem.innerHTML = `${contador}`
        div_contagem.style.color = `blue`

    } else {

        div_contagem.innerHTML = `${contador}`
        div_contagem.style.color = `red`

    }

}

function decremento(){

    contador-=1

    if(contador == 0){

        div_contagem.innerHTML = `${contador}`
        div_contagem.style.color = `black`

    } else {

    

        if (contador < 0){

            alert('Decremento invalido')

        } else {

            if (contador%2 == 0){
                div_contagem.innerHTML = `${contador}`
                div_contagem.style.color = `blue`
            } else{
                div_contagem.innerHTML = `${contador}`
                div_contagem.style.color = `red`
            }

        }
    }

}

function reset(){

    contador = 0
    div_contagem.innerHTML = `${contador}`
    div_contagem.style.color = `black`

}