var num = document.getElementById('ntxt');
var valoresDigitados = [];
var resultado = document.getElementById('res')

function add() {
    let numero = parseInt(num.value); 
    let tab = document.getElementById('analtab')
    

    if (isNaN(numero) || numero > 100 || num.value.length==0 || numero <= 0 || valoresDigitados.includes(numero)){
        window.alert('Valor inválido ou inexistente, digite um número dentro do intervalo e que não esteja na lista!')
    } else if (valoresDigitados== -1) {
        window.alert('Este valor já está em sua lista.')
    }
    else {
        valoresDigitados.push(numero);
        analtab.innerHTML = ""
        for (var i = 0; i < valoresDigitados.length; i++){
            let item = document.createElement('option')
            item.text = `O valor é ${valoresDigitados[i]}`
            tab.appendChild(item)
        }
    }
}

function end(){
    let numero = parseInt(num.value); 
    let maiorValor = valoresDigitados[0]; 
    let menorValor = valoresDigitados[0]
    let soma = valoresDigitados[0]
    let media = valoresDigitados[0]
    
    if (valoresDigitados== -1){
        valoresDigitados.push(numero)
    }
    
    for (let i = 1; i < valoresDigitados.length; i++) {
        if (valoresDigitados[i] > maiorValor) {
            maiorValor = valoresDigitados[i];
        }
    }
    for (let i = 1; i > valoresDigitados.length; i++){
        if (valoresDigitados[i] < menorValor){
            menorValor =  valoresDigitados[i]
        }
    }
    for (let i = 1; i < valoresDigitados.length; i++){
         soma += valoresDigitados[i]
         media = soma/valoresDigitados.length
    }
    resultado.innerHTML = `Ao todo temos ${valoresDigitados.length} números cadastrados.
    </br> O maior valor é ${maiorValor}.
    </br> O menor valor é ${menorValor}.
    </br> A soma dos valores é ${soma}.
    </br> A média dos valores é ${media}.`
}