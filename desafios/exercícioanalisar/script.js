var num = document.getElementById('ntxt');
var valoresDigitados = [];
var resultado = document.getElementById('res')

function add() {
    let numero = parseInt(num.value); 
    let tab = document.getElementById('analtab')
    

    if (isNaN(numero) || numero > 100 || num.value.length==0 || numero <= 0){
        window.alert('Valor inválido ou inexistente, digite um número dentro do intervalo!')
    } else {
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
    let soma = ""
    
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
    for (let i = 1; valoresDigitados.length; i++){
         soma += valoresDigitados[i]
    }
    resultado.innerHTML = `Ao todo temos ${valoresDigitados.length} números cadastrados.
    </br> O maior valor é ${maiorValor}
    </br> O menor valor é ${menorValor}`
}