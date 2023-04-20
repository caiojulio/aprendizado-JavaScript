
const pArray = document.getElementById('array')
const inputPesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')
const pResultado = document.getElementById('resultado')


const elementosArray = [1,2,3,4,5,6]

pArray.innerHTML = `[${elementosArray}]`

btnPesquisar.addEventListener('click', () => {

    pResultado.innerText = 'Nada encontrado'
 
    if(inputPesquisar.value == ''){
        alert('Insira algum conteudo para pesquisa ')

    } else {

        elementosArray.find( (elemento, pos, array) => {

            if (elemento == inputPesquisar.value){
                pResultado.innerText = `Encontramos ${elemento} na posição ${pos} do array: [${array}]`
            }

        })

    }

})