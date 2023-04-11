function areaRetang() {
    var base = Number(document.getElementById('numBase').value)
    var altura = Number(document.getElementById('numAltura').value)
    var resultArea = document.getElementById('AREA')
    var resultPer = document.getElementById('PERIMETRO')
    var resultDiag = document.getElementById('DIAGONAL')

    var area = base * altura
    resultArea.innerHTML = `Area é igual a: ${area.toFixed(4)}`


    var perimetro = 2 * (base + altura)
    resultPer.innerHTML = `O perimetro é igual a: ${perimetro.toFixed(4)}`


    var diagonal = Math.sqrt((Math.pow(base, 2)) + (Math.pow(altura, 2)))
    resultDiag.innerHTML = `A diagonal é igual a: ${diagonal.toFixed(4)}`
}