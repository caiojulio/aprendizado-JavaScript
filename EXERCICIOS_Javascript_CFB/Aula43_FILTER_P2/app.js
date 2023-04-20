
const caixaCursos = document.getElementById('caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')


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


btnCursoSelecionado.addEventListener('click', ()=>{

    const radios =  [...document.getElementsByName('rb_curso')]
    
    let radioSelected = radios.filter(inputRadio => inputRadio.checked)

    radioSelected = radioSelected[0]

    const cursoSelecionado = radioSelected.parentNode.parentNode.firstChild.textContent

    alert(`Curso Selecionado: ${cursoSelecionado}`)


})