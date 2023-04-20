

const caixa1 = document.getElementsByClassName('caixa')[0]
const btn_c1 = document.getElementById('c1')

const cursosHTML = document.getElementsByClassName('curso')

console.log(cursosHTML)


caixa1.addEventListener('click', ()=>{
    console.log('clicou')
})

/*

btn_c1.addEventListener('click', evt=>{

    evt.stopPropagation()
    console.log('clicou c1')

})

*/

let arrayCursos = [...cursosHTML]

console.log(arrayCursos)

/*

MINHA TENTATIVA

for (item of arrayCursos){

    item.addEventListener('click', (event)=>{
        
        console.log(event)
        event.stopPropagation()
       
    })

}

*/

// COMO REGISTRAR QUAL CURSO FOI CLICADO?


arrayCursos.map(item=>{

    item.addEventListener('click', (event)=>{
        
        console.log(event)
        event.stopPropagation()
       
    })
    
})


