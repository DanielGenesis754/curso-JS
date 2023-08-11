var begin = document.getElementById('iniciotxt')
var res = document.getElementById('res')
var end = document.getElementById('fimtxt')
var step = document.getElementById('passotxt')

function contagem(){
    let inicio = Number(begin.value)
    let fim = Number(end.value)
    let passo = Number(step.value)

    let numeros = ""

    
    if (inicio <= 0){
        res.innerHTML = `</br> Preencha o campo <strong>início</strong> corretamente. Comece com um número maior que 1`
    } else if (passo > fim || passo <= 0){
        window.alert('Escreva os passos corretamente. Devem ser maiores que 0 e menores que o fim')
    } else if (fim <= 0){
        window.alert ('Os números precisam ser inteiros e positivos.')
    } else {
       for (var c = inicio; c <= fim; c = c + passo){
        numeros += c + " "
        }
        res.innerHTML = `</br> Mostrando ${numeros}`  
    }
    
}