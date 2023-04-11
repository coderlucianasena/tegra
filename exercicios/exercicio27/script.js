function palindroma() {
    var texto = document.getElementById('string').value
    var result = document.getElementById('resultado')

    texto = texto.toLowerCase()
    var textoInvert = texto.split('').reverse().join('')

    if (textoInvert == texto) {
        result.innerHTML = `É palíndroma`
    }
    else {
        result.innerHTML = `Não é palíndroma`
    }
}