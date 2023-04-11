function glicose() {
    var nivel = Number(document.getElementById('nivelGlic').value)
    var result = document.getElementById('resultado')

    switch (true) {
        case (nivel <= 100):
            result.innerHTML = `Classificação: NORMAL`
            break
        case (nivel >= 100 && nivel <= 140):
            result.innerHTML = `Classificação: ELEVADO`
            break
        case (nivel > 140):
            result.innerHTML = `Classificação: DIABETES`
            break
    }
}