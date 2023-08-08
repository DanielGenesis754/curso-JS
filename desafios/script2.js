function verificar(){
    var txtn = document.getElementById('nasc')
    let nascimento = String(txtn.value)
    
    res.innerHTML = `Nasceu em ${nascimento}. Sua idade é ${2023 - nascimento}! `
}