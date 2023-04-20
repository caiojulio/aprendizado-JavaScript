

let divCaixa = document.getElementById('caixa')

let mapa = new Map()

mapa.set('curso', 'javascript')

console.log(mapa)

divCaixa.innerHTML = mapa.get('curso')