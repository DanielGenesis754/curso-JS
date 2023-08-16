function fatorial (num){
    let calc = 1
     for (c = num; c >= 1; c = c - 1){
        calc = calc * c
    }
    return calc
}
let res = fatorial(5)
console.log(res)


