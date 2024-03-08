
function verNumeroPrimo(numero) {
    for(let i=2; i<numero/2; i++) {
        if(numero%i==0) {
            return false
        }
    }
    return true
}

function fatorial(numero) {
    let fat = 1;
    for(let i=1; i<=numero; i++) {
        fat = fat * i
    }
    return fat
}

export { verNumeroPrimo, fatorial }