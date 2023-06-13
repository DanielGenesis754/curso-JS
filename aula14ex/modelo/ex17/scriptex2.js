function calcular (){
    var msg1 = window.document.getElementById('txtn1')
    let resultado = document.getElementById('seltab')

    if(msg1.value.length == 0){
        window.alert = ('Erro Informações Inválidas')
    } else{
        var num = Number.parseInt(msg1.value)
        resultado.innerHTML = ''

        for (c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `resultado${c}` 
        resultado.appendChild(item)
        }
    }
}