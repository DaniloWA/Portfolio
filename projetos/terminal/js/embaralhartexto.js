import { getDadosEntrada, getHora} from "./index.js"

export function embaralharTexto(){
    let dados = getDadosEntrada()
    let dadosLimpos = dados.replace('embaralhar texto ', '' )
    var embaralhar = dadosLimpos.split('').sort(function(){return 0.5-Math.random()}).join('');

    if(regexEmbaralharTexto().exec(dados)){
       console.log("Embaralhando Texto")
       let div = document.getElementById("res") 
       let paragrafo = document.createElement("p")
       paragrafo.id = 'resposta'
       paragrafo.innerHTML = getHora() + " : " + embaralhar
       div.appendChild(paragrafo)
    }
   }

export function regexEmbaralharTexto() {
    let regExp = /embaralhar texto /i
    return regExp
}

