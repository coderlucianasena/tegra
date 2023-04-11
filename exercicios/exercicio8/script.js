function calculadorDeArea() {
    var a = Number(document.getElementById('A').value)
    var b = Number(document.getElementById('B').value)
    var c = Number(document.getElementById('C').value)
    var result = document.getElementById('resultado')

    var areaQuad = (Math.pow(a, 2))
    var areaTri = (a * b) / 2
    var areaTrapz = ((a + b) * c) / 2

    result.innerHTML = `ÁREA DO QUADRADO = ${areaQuad.toFixed(4)} <br> ÁREA DO TRIÂNGULO = ${areaTri.toFixed(4)} <br> ÁREA DO TRAPÉZIO = ${areaTrapz.toFixed(4)}`
}