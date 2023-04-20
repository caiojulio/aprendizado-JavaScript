
const pArray = document.getElementById('array')
const btnPesquisar = document.getElementById('btnPesquisar')
const pResultado = document.getElementById('resultado')


const elementosArray = [18,22,31,42,53,46]

pArray.innerHTML = `[${elementosArray}]`

btnPesquisar.addEventListener('click', () => {

       const verificaElementos = elementosArray.every( elemento => {

           return elemento>=18 ?  true : false

        })

        if (verificaElementos == true){
            pResultado.innerText = 'Todos os elementos estão em conformidade'

        } else {
            pResultado.innerText = 'Array não conforme'
        }



})