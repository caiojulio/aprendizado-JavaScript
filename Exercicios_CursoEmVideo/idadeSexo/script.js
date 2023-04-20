

function verificar(){

    var anoAtual = new Date().getFullYear()

    var formulario_idade = document.getElementById('anosNascimento').value

    var rad_sexo = document.getElementsByName('radSex')
    var div_resultado = document.getElementById('res')

    if (formulario_idade.length == 0 || Number(formulario_idade) > anoAtual){
        alert('verifique os dados e tente novamente')
    } else {

        var idade = anoAtual - Number(formulario_idade)

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (rad_sexo[0].checked){
            genero = 'um homem'
        } else if (rad_sexo[1].checked){
            genero = 'uma mulher'
        }


        if (idade >= 0 && idade < 11){ //crianças
            if (rad_sexo[0].checked){
                img.setAttribute('src', 'banco_img/menino.png')
            } else{
                img.setAttribute('src', 'banco_img/menina.png')
            }
        } else if (idade < 22){ //jovens
            if (rad_sexo[0].checked){
                img.setAttribute('src', 'banco_img/homem_adolescente.png')
            } else{
                img.setAttribute('src', 'banco_img/mulher_adolescente.png')
            }
        } else if(idade < 50){ //adultos
            if (rad_sexo[0].checked){ 
                img.setAttribute('src', 'banco_img/homem_adulto.png')
            } else{
                img.setAttribute('src', 'banco_img/mulher_adulta.png')
            }
        } else {
            if (rad_sexo[0].checked){ //idosos
                img.setAttribute('src', 'banco_img/homem_velho.png')
            } else{
                img.setAttribute('src', 'banco_img/mulher_velha.png')
            }
        }

        div_resultado.innerHTML = `Detectamos ${genero} de ${idade} anos`

        //Para redimensionar a imagem

        img.style.width = '300px' 
        img.style.height = '250px'

        div_resultado.appendChild(img)

        
    }
}