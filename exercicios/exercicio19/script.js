function aumento() {
    var salar = Number(document.getElementById('salario').value)
    var result = document.getElementById('resultado')

    var aumento

    switch (true) {
        case (salar <= 999.00):
            aumento = ((salar * 20) / 100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 20%`
            break
        case (salar >= 1000.00 && salar <= 2999.00):
            aumento = ((salar * 15) / 100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 15%`
            break
        case (salar >= 3000.00 && salar <= 7999.00):
            aumento = ((salar * 10) / 100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 10%`
            break
        case (salar > 8000.00):
            aumento = ((salar * 5) / 100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 5%`
            break
    }
}   