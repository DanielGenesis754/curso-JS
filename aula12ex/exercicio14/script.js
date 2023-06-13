function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var body = window.document.getElementById('corpo')
    var dataatual = new Date()
    var horaatual = dataatual.getHours()
    msg.innerHTML = (`Agora são ${horaatual} horas`)

    if (horaatual >= 0 && horaatual < 12){
        //BOM DIA
        foto.src = 'imagens/manha.png'
        window.document.body.style.background = '#bac000'
    } else if (horaatual >= 12 && horaatual < 18){
        //BOA TARDE
        foto.src = 'imagens/tarde.png'
        window.document.body.style.background = '#E45826'
    } else if (horaatual >= 18 && horaatual < 24){
        //BOA NOITE
        foto.src = 'imagens/noite.png'
        window.document.body.style.background = '#00004F'
    } else {
        //ERROR
    }

}
