function calculaKm() {
    var numKm = Number(document.getElementById('km').value)
    var numCombust = Number(document.getElementById('combustivel').value)
    var result = document.getElementById('resultado')

    var total = (numKm / numCombust)
    result.innerHTML = `Comsumo médio = ${total.toFixed(3)}`
}