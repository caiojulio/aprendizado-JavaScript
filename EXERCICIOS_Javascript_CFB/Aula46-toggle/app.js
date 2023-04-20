
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

const tirarSelecao = () =>{

    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]

    cursosSelecionados.map (element => {

        element.classList.remove('selecionado')

    })

}

const criarCurso = element  => {

    const newElement = document.createElement('div')
    newElement.setAttribute('id', `curso ${indice+1}`)
    newElement.setAttribute('class', 'curso c1')
    newElement.innerHTML = element

//    const comandos = document.createElement('div')
//    comandos.setAttribute('class', 'comandos')

//    const rb = document.createElement('input')
//    rb.setAttribute('type', 'radio')
//    rb.setAttribute('name', 'rb_curso')

//    comandos.appendChild(rb)

//    newElement.appendChild(comandos)

    newElement.addEventListener('click', evt => {

        tirarSelecao()
        evt.target.classList.toggle('selecionado')

    })

    return newElement

}

cursos.map( element =>{

    const novoElemento = criarCurso(element)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const cursoSelecionado = () => {

    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]

    return cursosSelecionados[0]

}

btnCursoSelecionado.addEventListener('click', ()=>{


    const curso = cursoSelecionado()

    if (curso != undefined){

        alert(`Curso Selecionado: ${curso.innerHTML}`)
    
    }else {

        alert('Nenhum curso selecionado')

    }
})

btnRemoverCurso.addEventListener('click', ()=>{


    const curso = cursoSelecionado()

    if (curso != undefined ){

        curso.remove()

        alert(`Curso Removido: ${curso.innerHTML}`)
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

            elementoSelecionado = elementoSelecionado.nextSibling
            const novoElemento = criarCurso(curso)
            caixaCursos.insertBefore(novoElemento, elementoSelecionado)
        
        } else {

            alert('Digite o nome do curso')

        }

    }

})