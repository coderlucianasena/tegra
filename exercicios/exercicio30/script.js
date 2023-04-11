function numeros() {
    var num = String(document.getElementById('valor').value)
    var result = document.getElementById('resultado')

    var unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    var especiais = ["Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"];
    var dezenas = ["Dez", " Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

    if (num.length === 1) {
        for (var i = 0; i <= 9; i++) {
            if (i == num) {
                result.innerHTML = `${unidades[i]}`
            }
        }
    }

    else if (num.length === 2) {
        if (num[0] == 1 && num[1] != 0) {
            for (var i = 0; i <= 9; i++) {
                if (i == num[1]) {
                    result.innerHTML = `${especiais[i - 1]}`
                }
            }
        }

        else if (num[0] >= 1 && num[0] <= 9) {
            for (var i = 0; i <= 9; i++) {
                if (num[0] == i) {
                    if (num[0] == 1 && num[1] == 0) {
                        result.innerHTML = `${dezenas[0]}`
                    }

                    else {
                        result.innerHTML = `${dezenas[i - 1]}`

                        for (var i = 0; i <= 9; i++) {
                            if (i == num[1] && i != 0) {
                                result.innerHTML += ` e ${unidades[i]}`
                            }
                        }
                    }
                }
            }
        }
    }
}