function calculaTroco() {
    var numPreco = Number(document.getElementById('preco').value)
    var numQtde = Number(document.getElementById('quantidade').value)
    var numDinero = Number(document.getElementById('dinheiro').value)
    var result = document.getElementById('resultado')

    var total = numQtde * numPreco


    if (numDinero >= total) {
        var troco = numDinero - total
        result.innerHTML = `Aqui está o troco R$ ${troco.toFixed(2)}`
    }
    else {
        result.innerHTML = `Dinheiro Insuficiente`
    }
}