var n = document.getElementById('ntxt')
var res = document.getElementById('res')

function gerar(){
    let numero = String(n.value)
    var result = ""

    for(var c = 1; c <= 10; c++){
        var calc = numero * c + " </br>"
        result += `${numero} x ${c} = ${calc}`
    }
    res.innerHTML = `${result}`
}