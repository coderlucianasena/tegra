function mediaIdade()
{
    var name1 = document.getElementById('nome1').value
    var age1 = Number(document.getElementById('idade1').value)
    var name2 = document.getElementById('nome2').value
    var age2 = Number(document.getElementById('idade2').value)
    var result = document.getElementById('resultado')

    //MEDIA

    var calculaMedia = (age1 + age2)/2
    result.innerHTML = `A média da idade de ${name1} e ${name2} é igual a ${calculaMedia}`
}