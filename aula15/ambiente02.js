var num = [3, 7, 5, 2]

/*
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let place = num.indexOf(8)

if (place == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor esperado está na posição ${place}.`) 
}
