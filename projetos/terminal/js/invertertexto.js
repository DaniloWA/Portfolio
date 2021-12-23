import { getDadosEntrada, getHora} from "./index.js"

export function inverterTexto(){
 let dados = getDadosEntrada()
 
 if(regexInverterTexto().exec(dados)){
    console.log("Invertendo Texto")
    
    let div = document.getElementById("res") 
    let paragrafo = document.createElement("p")
    paragrafo.id = 'resposta'
    paragrafo.innerHTML = getHora() + " : " + reverse(dados) 
    div.appendChild(paragrafo)
 }
}

function reverse(s) {
    var o = '';
    for (var i = s.length -1 ; i >= 14; i--) {
        o += s[i];
    }
    return o;
}

export function regexInverterTexto() {
    let regExp = /inverter texto/i
    return regExp
}

/*
inverter texto(13) Danilo Oliveira , TEXTO
inverter texto Danilo Oliveira
*/