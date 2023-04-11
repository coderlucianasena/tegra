function par() {
    var final = Number(document.getElementById('x').value)
    var result = document.getElementById('resultado')

    var inicial
    var atual
    var total

    for (inicial = 1; inicial <= final; inicial++) {
        atual = inicial
        if (atual % 2 == 0) {
            total = atual
            result.innerHTML += `${total}<br>`
        }
    }
}