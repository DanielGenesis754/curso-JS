function contar(){
    var res = window.document.getElementById('res')
    
    var caixa1 = window.document.getElementById('txtn1')
    
    var caixa2 = document.getElementById('txtn2')
    
    var caixa3 = document.getElementById('txtn3')
    


    if (caixa1.value.length == 0 || caixa2.value.length == 0 || caixa3.value.length == 0){
        window.alert('ERRO - Digite um número')
    } else{
        res.innerHTML += (`Contando: </br>`)
        var n1 = Number.parseInt(caixa1.value)
        var n2 = Number.parseInt(caixa2.value)
        var n3 = Number.parseInt(caixa3.value)

        if (n3 <= 0){
            window.alert('Passo inválido')
            n3 = 1
        }

        if (n1 < n2){
            for(let c = n1 ; c <= n2  ; c = c + n3){
                res.innerHTML += (`${c} \u{1F449}`)
            }
        } else {
            for(let c = n1; c >= n2; c -= n3){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}