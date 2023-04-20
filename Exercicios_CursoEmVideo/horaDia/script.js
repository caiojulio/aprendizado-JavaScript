
function carregar(){

    horaAtual = new Date().getHours()
    minutosAtuais = new Date().getMinutes()

    if (minutosAtuais < 10){
        minutosAtuais = `0${minutosAtuais}`
    }

    var textoHora = document.getElementById('hora')
    var divFotografia = document.getElementById('fotografia')
    var foto = document.getElementById('fotoDia')


    if (horaAtual > 4 && horaAtual < 12){
        textoHora.innerHTML = `Horario Atual: ${horaAtual}:${minutosAtuais} AM`
        foto.src = 'banco_imgs/amanhecer.jpg'
        document.body.style.background = 'blue'
    } else if (horaAtual >= 12 && horaAtual < 19){
        textoHora.innerHTML = `Horario Atual: ${horaAtual}:${minutosAtuais} PM`
        foto.src = 'banco_imgs/entardecer.jpg'
        document.body.style.background = '#f4a16e'
    } else{
        textoHora.innerHTML = `Horario Atual: ${horaAtual}:${minutosAtuais} PM`
        foto.src = 'banco_imgs/noite.jpg'
        document.body.style.background = '#191919'
    }

}