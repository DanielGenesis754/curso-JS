var num = document.getElementById('ntxt');
var valoresDigitados = [];

function add() {
    let numero = num.value; 
    let tab = document.getElementById('analtab')
    

    if (isNaN(numero) || numero >= 100 || num.value.length==0){
        window.alert('errado')
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