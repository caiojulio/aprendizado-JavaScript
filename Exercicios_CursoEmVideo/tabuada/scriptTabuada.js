
function tabuada(){

    let valor = Number(document.getElementById('valor').value)
    let areaTabuada = document.getElementById('areaTab')

    if (valor.length == 0){
        alert('Verifique os dados e tente novamente')
    } else {

        areaTabuada.innerHTML = ''

        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${valor} x ${i} = ${valor*i}`
            //item.setAttribute('option', `value="v${i}"`)
            item.value = `v${i}`
            areaTabuada.appendChild(item)
        }

    }

}