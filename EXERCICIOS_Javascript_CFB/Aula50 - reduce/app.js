
const pArray = document.getElementById('array')
const btnReduzir = document.getElementById('btnReduzir')
const pResultado = document.getElementById('resultado')


const elementosArray = [1, 2, 3, 4, 5]

pArray.innerHTML = `[${elementosArray}]`

btnReduzir.addEventListener('click', () => {

    pResultado.innerText = elementosArray.reduce( (anterior, atual, pos, array) => {

        return anterior+atual

    })

})