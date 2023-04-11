function areaCirculo() {
    var numRaio = Number(document.getElementById('raio').value)
    var result = document.getElementById('resultado')

    var pi = 3.14159
    var area = (pi * Math.pow(numRaio, 2))

    result.innerHTML = `A área do círculo é igual a ${area.toFixed(3)}`
}