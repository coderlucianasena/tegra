var nome = prompt("Qual o seu nome?");

var mesInformado = parseInt(prompt(nome + "Qual o mes do seu nascimento? (informe de forma numerica)"));

var diaDeNascimento = parseInt(prompt(nome + "Qual o dia do seu nascimento? "));

var mesJaneiro = ("Capricornio");
var mesFevereiro = ("Aquario");
var mesMarco = ("Peixes");
var mesAbril = ("Aries");
var mesMaio = ("Touro");
var mesJunho = ("Gemeos");
var mesJulho = ("Cancer");
var mesAgosto = ("Leao");
var mesSetembro = ("Virgem");
var mesOutubro = ("Libra");
var mesNovembro = ("Escorpiao");
var mesDezembro = ("Sagitario");

var mesDoSigno = 0;
var ano = 12;


while(mesInformado <= ano){

    if(mesInformado == 1 && diaDeNascimento <= 19) {
        alert("Seu signo e " + mesJaneiro);
        break;
    }

    else if(mesInformado == 2 && diaDeNascimento <= 18) {
        alert("Seu signo e " + mesFevereiro);
        break;
    }

    else if(mesInformado == 3 && diaDeNascimento <= 20) {
        alert("Seu signo e " + mesMarco);
        break;
    }

    else if(mesInformado == 4 && diaDeNascimento <= 19) {
        alert("Seu signo e " + mesAbril);
        break;
    }

    else if(mesInformado == 5 && diaDeNascimento <= 20) {
        alert("Seu signo e " + mesMaio);
        break;
    }

    else if(mesInformado == 6 && diaDeNascimento <= 20) {
        alert("Seu signo e " + mesJunho);
        break;
    }

    else if(mesInformado == 7 && diaDeNascimento <= 22) {
        alert("Seu signo e " + mesJulho);
        break;
    }

    else if(mesInformado == 8 && diaDeNascimento <= 22) {
        alert("Seu signo e " + mesAgosto);
        break;
    }    

    else if(mesInformado == 9 && diaDeNascimento <= 22) {
        alert("Seu signo e " + mesSetembro);
        break;
    }

    else if(mesInformado == 10 && diaDeNascimento <= 22) {
        alert("Seu signo e " + mesOutubro);
        break;
    }

    else if(mesInformado == 11 && diaDeNascimento <= 21) {
        alert("seu signo e " + mesNovembro);
        break;
    }

    else if(mesInformado == 12 && diaDeNascimento <= 21) {
        alert("seu signo e " + mesDezembro);
        break;
    }
}

alert("FIM");