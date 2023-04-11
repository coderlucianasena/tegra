function continuar() {
    var temperatura = Number(document.getElementById('num').value)
    var result = document.getElementById('resultado')
    var tipo = document.getElementsByName('tipo')

    if (tipo[0].checked) {

        result.innerHTML = Tf(temperatura).toFixed(2);
    }
    else if (tipo[1].checked) {
        result.innerHTML = Tc(temperatura).toFixed(2);
    }

}


function Tf(c) {
    var f = (c * (9 / 5)) + 32
    return f
}

function Tc(f) {
    var c = (f - 32) * 5 / 9
    return c
}
