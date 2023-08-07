function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#dac553'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#d88665'
    } else{
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#858be0'
    }
}
