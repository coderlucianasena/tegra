function multiplo() {
    var divisor = Number(document.getElementById('divi').value)
    var numerador = Number(document.getElementById('num').value)
    var result = document.getElementById('resultado')

    if (numerador % divisor == 0) {
        result.innerHTML = `São Multiplos`
    }
    else {
        result.innerHTML = `Não são multiplos`
    }
}
