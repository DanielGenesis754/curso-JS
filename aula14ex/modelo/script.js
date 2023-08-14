    var begin = document.getElementById('iniciotxt')
    var res = document.getElementById('res')
    var end = document.getElementById('fimtxt')
    var step = document.getElementById('passotxt')
    

function contagem(){
    let inicio = Number(begin.value)
    let fim = Number(end.value)
    let passo = Number(step.value)

    let numerosp = ""
    let numerosn = ""

    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('[ERRO] Digite valores inteiros nas caixas abaixo!')
    } else if (inicio < fim){
       for (var c = inicio; c <= fim; c = c + passo){
        numerosp += c + "\u{1F449} "
        }
        res.innerHTML = `</br> Mostrando ${numerosp} \u{1F3F4}`  
    } else if (inicio > fim){
        for (var c = inicio; c >= fim; c = c - passo){
            numerosn += c + " \u{1F448}"
        }
        res.innerHTML = `</br> Mostrando \u{1F3F4} ${numerosn} `
    }
}