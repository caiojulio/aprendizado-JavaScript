
const caixaCursos = document.getElementById('caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')


cursos.map((element, index)=>{

    const newElement = document.createElement('div')
    newElement.setAttribute('id', `curso ${index+1}`)
    newElement.setAttribute('class', 'curso c1')
    newElement.innerHTML = element

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    newElement.appendChild(comandos)
    caixaCursos.appendChild(newElement)
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


