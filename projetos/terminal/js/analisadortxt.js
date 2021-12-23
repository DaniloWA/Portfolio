import { getDadosEntrada, getHora} from "./index.js"

export function analisarTexto(){
    let dados = getDadosEntrada()
    if(analisarTxt().exec(dados)){
        console.log(analisarTxt().exec(dados), ", Analizando Texto")
        console.log(dados.match(contaPalavras()), ", CONTANDO PALAVRAS")
        console.log(dados.match(contaCaracteres()), ", CONTANDO LETRAS")
        let numPalavras = dados.match(contaPalavras()).length -1 // o -1 elimina o Analisar texto da equação
        let numCaracteres = dados.match(contaCaracteres()).length -13 // o -1 elimina o Analisar texto da equação
        console.log(numPalavras, " Variavel Numero de Palavras")
        console.log(numCaracteres, " Variavel Numero de LETRAS")

        let div = document.getElementById("res")
        let paragrafo = document.createElement("p")
        paragrafo.id = 'resposta'
        paragrafo.innerHTML = getHora() + ` : Analize do seu texto: Palavras: ${numPalavras} Letras: ${numCaracteres}`
        div.appendChild(paragrafo)
    }
}

export function analisarTxt() {
    let regExp = /^analisar texto/i
    return regExp
}

export function contaPalavras() {
    let regExp = /\s+/ig
    return regExp
}

export function contaCaracteres() {
    let regExp = /\w/ig
    return regExp
}



