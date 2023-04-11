function troco() {
    var preco = Number(document.getElementById('preco').value)
    var qtde = Number(document.getElementById('quantidade').value)
    var dinero = Number(document.getElementById('dinheiro').value)
    var result = document.getElementById('resultado')

    var total = qtde * preco
    var troco = dinero - total

    if (troco < 0) {
        var insufnte = (troco * -1)
        result.innerHTML = `DINHEIRO INSUFICIENTE. FALTAM R$ ${insufnte.toFixed(2)}`
    }
    else {
        result.innerHTML = `TROCO = R$ ${troco.toFixed(2)}`
    }
}