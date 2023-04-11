function maiorMenor() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var num3 = Number(document.getElementById('num3').value)
    var num4 = Number(document.getElementById('num4').value)
    var num5 = Number(document.getElementById('num5').value)
    var result = document.getElementById('resultado')

    var vetor = [num1, num2, num3, num4, num5]
    var menor = Math.min(...vetor)
    var maior = Math.max(...vetor)

    result.innerHTML = `${menor} e ${maior}`
}