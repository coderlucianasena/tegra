function plano() {
    var min = Number(document.getElementById('minutos').value)
    var result = document.getElementById('resultado')

    if (min < 100) {
        result.innerHTML = `Valor a pagar: R$ 50.00`
    }
    else {
        var total = ((min - 100) * 2) + 50
        result.innerHTML = `Valor a pagar: R$ ${total.toFixed(2)}`
    }
}