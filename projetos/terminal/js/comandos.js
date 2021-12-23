import { getDadosEntrada, getHora} from "./index.js"

export function cleanTxt(){
    let dados = getDadosEntrada()
    var clean = null
  
    if(comandos().exec(dados)){
        clean = comandos().exec(dados)[0]
    }

    if(clean == "clean"|| clean == "clear"||clean == "cls" || clean == "clean"){
        while (document.getElementById("resposta")) {
               document.getElementById("resposta").remove() 
        }
        console.log("Removendo tudo!")
    }
}

export function help(){
    let dados = getDadosEntrada()
    let help 
        if(comandos().exec(dados)){
            help = comandos().exec(dados)[0]
        }
        if(help == "help" || help == true) {
            console.log("Mostrando Help no Terminal")

            let div = document.getElementById("res")
            let paragrafo = document.createElement("p")
       
            paragrafo.id = 'resposta'
            paragrafo.innerHTML = getHora() +" : Comandos: help|clear|cls|clean|analisar texto <br>" 
            paragrafo.innerHTML += getHora() +" : Aqui Você pode somar,multiplicar,dividir,subtrair e contar quantas palavras e letras tem no seu texto."
            div.appendChild(paragrafo)

        }
}

export function comandos() {
    let regExp = /clear|cls|clean|help|gerar texto/i
    return regExp
}