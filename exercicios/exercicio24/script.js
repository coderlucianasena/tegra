function ordena() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var num3 = Number(document.getElementById('num3').value)
    var num4 = Number(document.getElementById('num4').value)
    var num5 = Number(document.getElementById('num5').value)
    var result = document.getElementById('resultado')

    var vetor = [num1, num2, num3, num4, num5]

    vetor.sort((a, b) => a - b)

    for (var i = 0; i < 5; i++) {
        result.innerHTML += `${vetor[i]}, `
    }
}