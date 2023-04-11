function calculaFinal() {
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var result = document.getElementById('resultado')

    var media = (nota1 + nota2)

    if (media < 60) {
        result.innerHTML = `NOTAL FINAL = ${media.toFixed(1)} REPROVADO`
    }
    else {
        result.innerHTML = `NOTAL FINAL = ${media.toFixed(1)} APROVADO`
    }
}