
const caixaCursos = document.getElementById('caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')

const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const NomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarCurso = element  => {

    const newElement = document.createElement('div')
    newElement.setAttribute('id', `curso ${indice+1}`)
    newElement.setAttribute('class', 'curso c1')
    newElement.innerHTML = element

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    newElement.appendChild(comandos)

    return newElement

}

cursos.map( element =>{

    const novoElemento = criarCurso(element)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const cursoSelecionado = () => {

    const radios =  [...document.getElementsByName('rb_curso')]
    
    let radioSelected = radios.filter(inputRadio => inputRadio.checked)

    return radioSelected[0]

}

btnCursoSelecionado.addEventListener('click', ()=>{


    const radioSelected = cursoSelecionado()

    if (radioSelected != undefined){

        const cursoSelect = radioSelected.parentNode.parentNode.firstChild.textContent

        alert(`Curso Selecionado: ${cursoSelect}`)
    
    }else {

        alert('Nenhum curso selecionado')

    }
})

btnRemoverCurso.addEventListener('click', ()=>{


    const radioSelected = cursoSelecionado()

    if (radioSelected != undefined ){

        const cursoSelect = radioSelected.parentNode.parentNode

        cursoSelect.remove()

        alert(`Curso Removido: ${cursoSelect.firstChild.textContent}`)
    } else {

        alert('Nenhum curso selecionado')

    }   
})

btnAdicionarNovoCursoAntes.addEventListener('click', curso => {

    curso = NomeCurso.value

    let elementoSelecionado = cursoSelecionado()

    if (elementoSelecionado == undefined){

        alert('Nenhum curso selecionado')

    } else {

        if (curso != ''){

            elementoSelecionado = elementoSelecionado.parentNode.parentNode 
            const novoElemento = criarCurso(curso)
            caixaCursos.insertBefore(novoElemento, elementoSelecionado)
        
        } else {

            alert('Digite o nome do curso')

        }

    }

})

btnAdicionarNovoCursoDepois.addEventListener('click', curso => {

    curso = NomeCurso.value

    let elementoSelecionado = cursoSelecionado()
    

    if (elementoSelecionado == undefined){

        alert('Nenhum curso selecionado')

    } else {

        if (curso != ''){

            elementoSelecionado = elementoSelecionado.parentNode.parentNode.nextSibling
            const novoElemento = criarCurso(curso)
            caixaCursos.insertBefore(novoElemento, elementoSelecionado)
        
        } else {

            alert('Digite o nome do curso')

        }

    }

})