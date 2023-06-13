function calcular (){
    var data = new Date()
    var ano = data.getFullYear()
    var msg1 = window.document.getElementById('txtn1')
    var n1 = Number.parseInt(msg1.value)
    var s = ano - n1
    var foto = window.document.getElementById('imagem')
    var res = window.document.getElementById('res')

    var sex = document.getElementsByName('radsex')
    var genero = ''

    if (sex[0].checked && s >= 0 && s < 5){
        genero = 'Masculino'
        foto.src = 'imagens/garoto.png'
    }else if (sex[1].checked && s >= 0 && s < 5){
        genero = 'Feminino'
        foto.src = 'imagens/garota.png'
    } else if (sex[0].checked && s >= 5 && s < 15){
        genero = 'Masculino'
        foto.src = 'imagens/rapaz.png'
    } else if (sex[1].checked && s >= 5 && s < 15){
        genero = 'Feminino'
        foto.src = 'imagens/menina.png'
    } else if (sex[0].checked && s >= 15 && s < 18){
        genero = 'Masculino'   
        foto.src = 'imagens/adolescentemasc.png'    
    } else if (sex[1].checked && s >= 15 && s < 18){
        genero = 'Feminino'
        foto.src = 'imagens/adolescentefem.png'
    } else if (sex[0].checked && s >= 18 && s < 40){
        genero = 'Masculino'
        foto.src = 'imagens/homem.png'
    } else if (sex[1].checked && s>= 18 && s < 40) {
        genero = 'Feminino'
        foto.src = 'imagens/mulher.png'
    } else if (sex[0].checked && s >= 40 && s < 70){
        genero = 'Masculino'
        foto.src = 'imagens/homemmeiaidade.png'
    } else if (sex[1].checked && s >= 40  && s < 70) {
        genero = 'Feminino'
        foto.src = 'imagens/mulhermeiaidade.png'
    } else if (sex[0].checked && s >= 70 && s < 120) {
        genero = 'Masculino'
        foto.src = 'imagens/homemidoso.png'
    } else if (sex[1].checked && s >= 70 && s < 120) {
        genero = 'Feminino'
        foto.src = 'imagens/mulheridosa.png'
    } 

    if (msg1.value == 0 || Number(msg1.value) > ano || s > 120){
        window.alert('ERRO INSIRA DADOS VÁLIDOS')
    } else {
        res.innerHTML = (`Detectamos uma pessoa do gênero ${genero} com ${s} anos.`)
    }
}