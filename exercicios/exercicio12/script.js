function bhaskara() {
    var a = Number(document.getElementById('A').value)
    var b = Number(document.getElementById('B').value)
    var c = Number(document.getElementById('C').value)
    var result = document.getElementById('resultado')

    var delta = (Math.pow(b, 2) - 4 * a * c)
    var bhaskX1 = ((-b + Math.sqrt(delta)) / (2 * a))
    var bhaskX2 = ((-b - Math.sqrt(delta)) / (2 * a))

    if (bhaskX1 != 0 && bhaskX2 != 0) {
        result.innerHTML = `X1 = ${bhaskX1.toFixed(4)} <br> X2 = ${bhaskX2.toFixed(4)}`
    }
    else {
        result.innerHTML = `Esta equação não possui raízes reais`
    }

}
