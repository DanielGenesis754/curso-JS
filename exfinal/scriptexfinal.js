let msg1 = document.getElementById('txtn')
let valores = []
let arm = document.getElementById('numcont')
let result = document.getElementById('res')


function adicionar(){
    if (msg1.value <= 0 || msg1.value > 100 || msg1.value <= valores.length  ){
        window.alert('ERRO - Digite um número válido')
    } else {
        valores.push(Number(msg1.value))
        let item = document.createElement('option')
        item.text = `O valor ${msg1.value} foi adicionado.`
        arm.appendChild(item)
    }
}

function finalizar(){
    valores.sort()
    let ultimo = valores[valores.length - 1]
    let primeiro = valores[0]
    let soma = 0
    let media = 0
    for (let pos = 0; pos < valores.length; pos++){
        soma += valores[pos]
        media += valores[pos]/valores.length
    }
    if (msg1.value <= 0 || msg1.value > 100){
        window.alert('ERRO - Digite um número válido')
    } else {
    result.innerHTML = (`Ao todo, temos ${valores.length} números cadastrados. </br> 
                        O maior valor informado foi ${ultimo}. </br>
                        O menor valor informado foi ${primeiro}. </br>
                        Somando todos os valores temos ${soma} </br>
                        A média dos valores digitados é ${media}`)
    }
    
}




