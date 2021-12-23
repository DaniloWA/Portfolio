import { getDadosEntrada, getHora} from "./index.js"
import { nomes } from "./gerarnomes.js"



export function Email(){
    let dados = getDadosEntrada()
    let email = [
        "@gmail.com",
        "@iCloud.com",
        "@outlook.com",
        "@Inbox.com",
    ]

    if(regexGerarEmail().exec(dados)){
        console.log("Gerando Email")
        
        let nomesTratados = nomes[[random(19,0)]].replace(regexLimparEmail(), "")
        console.log(nomesTratados, " ,TESTANDO NOMES TRATADOS SEM ESPAÇO")
        let div = document.getElementById("res") 
        let paragrafo = document.createElement("p")
        paragrafo.id = 'resposta'
        paragrafo.innerHTML = getHora() + " : " + nomesTratados + email[random(3,0)]
        div.appendChild(paragrafo)
    }

}

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function regexGerarEmail() {
    let regExp = /gerar email/i
    return regExp
}

function regexLimparEmail(){
    let regExp1 = /\s?/ig
    return regExp1
}


/*

*/

