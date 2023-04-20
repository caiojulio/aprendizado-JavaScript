
const pArray = document.getElementById('array')
const btnPesquisar = document.getElementById('btnPesquisar')
const pResultado = document.getElementById('resultado')


const elementosArray = [12,12,12,19,12, 12]

pArray.innerHTML = `[${elementosArray}]`

btnPesquisar.addEventListener('click', () => {

        pResultado.innerText = 'Array não encontrou elementos de acordo com a condição'

        elementosArray.some( (elemento, pos) => {


             if (elemento >= 18){
                 pResultado.innerText = `elemento de acordo com a condição na posição ${pos}`
             }

        })

})