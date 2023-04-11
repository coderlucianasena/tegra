function horoscopo() {
    var dia = Number(document.getElementById('day').value)
    var mes = Number(document.getElementById('month').value)
    var result = document.getElementById('resultado')

    switch (true) {
        case ((mes == 3 && dia >= 21 && dia <= 30) || (mes == 4 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Áries`
            break
        case ((mes == 4 && dia >= 21 && dia <= 30) || (mes == 5 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Touro`
            break
        case ((mes == 5 && dia >= 21 && dia <= 30) || (mes == 6 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Gêmeos`
            break
        case ((mes == 6 && dia >= 21 && dia <= 30) || (mes == 7 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Câncer`
            break
        case ((mes == 7 && dia >= 23 && dia <= 30) || (mes == 8 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Leão`
            break
        case ((mes == 8 && dia >= 23 && dia <= 30) || (mes == 9 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Virgem`
            break
        case ((mes == 9 && dia >= 23 && dia <= 30) || (mes == 10 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Libra`
            break
        case ((mes == 10 && dia >= 23 && dia <= 30) || (mes == 11 && dia >= 1 && dia <= 21)):
            result.innerHTML = `Escorpião`
            break
        case ((mes == 11 && dia >= 22 && dia <= 30) || (mes == 12 && dia >= 1 && dia <= 21)):
            result.innerHTML = `Sagitário`
            break

        case ((mes == 12 && dia >= 22 && dia <= 30) || (mes == 1 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Capricórnio`
            break

        case ((mes == 1 && dia >= 21 && dia <= 30) || (mes == 2 && dia >= 1 && dia <= 18)):
            result.innerHTML = `Aquário`
            break

        case ((mes == 2 && dia >= 19 && dia <= 30) || (mes == 3 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Peixes`
            break
    }
}