var n = document.getElementById('ntxt')
var res = document.getElementById('res')

function gerar(){
    let numero = String(n.value)
    var result = ""
    let tab = document.getElementById('seltab')
    seltab.innerHTML = ""

    for(var c = 1; c <= 10; c++){
        let item = document.createElement('option')

        item.text = `${numero} x ${c} = ${numero * c}`

        tab.appendChild(item)
    }
}