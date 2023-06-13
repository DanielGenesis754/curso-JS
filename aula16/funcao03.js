function fatorial(x){
    let fat = 1
    for(let c = x; c > 1; c--){
        fat = fat * c
    }
    return fat
}
console.log(fatorial(4)) 