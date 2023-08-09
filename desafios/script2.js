function verificar(){
    var data = new Date()
    let ano = data.getFullYear()

    var txtn = document.getElementById('nasc')
    let nascimento = Number(txtn.value)
    let datanasc = ano - nascimento
    let imagem = document.getElementById('foto')

    if (nascimento <= 1900 || nascimento > ano){
        window.alert('ERRO digite um ano valido')
    } else {
        var fsex = document.getElementsByName('radsex')
        let genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (datanasc >= 0 && datanasc < 10){
                imagem.src = 'imagens/homem-crianca.png'
            } else if (datanasc < 18){
                imagem.src = 'imagens/homem-adolescente.png'
            } else if (datanasc < 40){
                imagem.src = 'imagens/homem-adulto.png'
            } else if (datanasc < 65){
                imagem.src = 'imagens/homem-maduro.png'
            } else{
                imagem.src = 'imagens/homem-idoso.png'
            }

            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (datanasc >= 0 && datanasc < 10){
                    imagem.src = 'imagens/mulher-crianca.png'
                } else if (datanasc < 18){
                    imagem.src = 'imagens/mulher-adolescente.png'
                } else if (datanasc < 40){
                    imagem.src = 'imagens/mulher-adulta.png'
                } else if (datanasc < 65){
                    imagem.src = 'imagens/mulher-madura.png'
                } else{
                    imagem.src = 'imagens/mulher-idosa.png'
                }
            } 
        res.innerHTML = `Você é ${genero}. Sua idade é ${datanasc} anos! </br> `
        res.appendChild(imagem)
    }
}