// String.prototype.extenso = function(c){
//     var ex = [
//         ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
//         ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
//         ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
//         ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
//     ];
//     var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
//     for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
//         j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
//         if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
//         for(a = -1, l = v.length; ++a < l; t = ""){
//             if(!(i = v[a] * 1)) continue;
//             i % 100 < 20 && (t += ex[0][i % 100]) ||
//             i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
//             s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
//             ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
//         }
//         a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
//         a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
//     }
//     return r.join(e);
// }
function Extenso(vlr){

    var Num=parseFloat(vlr);
    if (vlr == 0)
    {
    document.getElementById('teste').value = "zero";
}else{

    var inteiro = parseInt(vlr);; // parte inteira do valor
    if(inteiro<1000000000000000)
    {

    var resto = Num.toFixed(2) - inteiro.toFixed(2);       // parte fracionária do valor
    resto=resto.toFixed(2)
    var vlrS =  inteiro.toString();    

    var cont=vlrS.length;
    var extenso="";
    var auxnumero;
    var auxnumero2;
    var auxnumero3;

    var unidade =["", "um", "dois", "três", "quatro", "cinco",
    "seis", "sete", "oito", "nove", "dez", "onze",
    "doze", "treze", "quatorze", "quinze", "dezesseis",
    "dezessete", "dezoito", "dezenove"];

var centena = ["", "cento", "duzentos", "trezentos",
    "quatrocentos", "quinhentos", "seiscentos",
    "setecentos", "oitocentos", "novecentos"];

var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta",
    "sessenta", "setenta", "oitenta", "noventa"];

var qualificaS = ["reais", "mil", "milhão", "bilhão", "trilhão"];
var qualificaP = ["reais", "mil", "milhões", "bilhões", "trilhões"];

for (var i=cont;i > 0;i--)
{   
    var verifica1="";
    var verifica2=0;
    var verifica3=0;
    auxnumero2="";
    auxnumero3="";
    auxnumero=0;
    auxnumero2 = vlrS.substr(cont-i,1);    
    auxnumero = parseInt(auxnumero2);


    if((i==14)||(i==11)||(i==8)||(i==5)||(i==2))
    {
        auxnumero2 = vlrS.substr(cont-i,2);
        auxnumero = parseInt(auxnumero2);
    }

    if((i==15)||(i==12)||(i==9)||(i==6)||(i==3))
    {   
        extenso=extenso+centena[auxnumero];
        auxnumero2 = vlrS.substr(cont-i+1,1)
        auxnumero3 = vlrS.substr(cont-i+2,1)

        if((auxnumero2!="0")||(auxnumero3!="0"))
        extenso+=" e ";

    }else

    if(auxnumero>19){
        auxnumero2 = vlrS.substr(cont-i,1);
        auxnumero = parseInt(auxnumero2);
        extenso=extenso+dezena[auxnumero];
        auxnumero3 = vlrS.substr(cont-i+1,1)

        if((auxnumero3!="0")&&(auxnumero2!="1"))
        extenso+=" e ";
    }
        else if((auxnumero<=19)&&(auxnumero>9)&&((i==14)||(i==11)||(i==8)||(i==5)||(i==2)))
        {
            extenso=extenso+unidade[auxnumero];   
        }else if((auxnumero<10)&&((i==13)||(i==10)||(i==7)||(i==4)||(i==1)))
        {
            auxnumero3 = vlrS.substr(cont-i-1,1);
            if((auxnumero3!="1")&&(auxnumero3!=""))
            extenso=extenso+unidade[auxnumero]; 
        }

        if(i%3==1)
        {       
            verifica3 = cont-i;
            if(verifica3==0)
            verifica1 = vlrS.substr(cont-i,1);

            if(verifica3==1)
            verifica1 = vlrS.substr(cont-i-1,2);

            if(verifica3>1)
            verifica1 = vlrS.substr(cont-i-2,3);

         verifica2 = parseInt(verifica1);

         if(i==13)
         {
            if(verifica2==1){
            extenso=extenso+" "+qualificaS[4]+" ";
        }else if(verifica2!=0){extenso=extenso+" "+qualificaP[4]+" ";}}
            if(i==10)
            {
                if(verifica2==1){
                extenso=extenso+" "+qualificaS[3]+" ";
            }else if(verifica2!=0){extenso=extenso+" "+qualificaP[3]+" ";}}
            if(i==7)
            {
                if(verifica2==1){
                extenso=extenso+" "+qualificaS[2]+" ";
            }else if(verifica2!=0){extenso=extenso+" "+qualificaP[2]+" ";}}
            if(i==4)
            {
                if(verifica2==1){
                extenso=extenso+" "+qualificaS[1]+" ";
            }else if(verifica2!=0){extenso=extenso+" "+qualificaP[1]+" ";}}
            if(i==1)
            {
                if(verifica2==1){
                extenso=extenso+" "+qualificaS[0]+" ";
            }else {extenso=extenso+" "+qualificaP[0]+" ";}}
        }
    }
    resto = resto * 100;
    var aexCent=0;
    if(resto<=19&&resto>0)
    extenso+=" e "+unidade[resto]+" Centavos";
    if(resto>19)
    {
        aexCent=parseInt(resto/10);

    extenso+=" e "+dezena[aexCent]
    resto=resto-(aexCent*10);

    if(resto!=0)
    extenso+=" e "+unidade[resto]+" Centavos";
    else extenso+=" Centavos";
    }

    document.getElementById('teste').value = extenso;
}
else
{document.getElementById('teste').value = "Numero maior que 999 trilhões";}
}
}
