import { getDadosEntrada, getHora} from "./index.js"

export function start(){
    let dados = getDadosEntrada()
    if(dados.match(analisarTxt())){
        let numeroLinhas = dados.match(analisarTxt())[1]
    
        for(let i = 0; i < numeroLinhas ;i ++) {
            escreverseila()
        }
    }
}

export function analisarTxt() {
    let regExp = /gerar matrix (\d+) (\d+)/i
    // gerar matrix 40 30 
    return regExp
}
 
export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function randomLine(num){
    let line = []
    for(let i = 0; i < num ; i++){
        line[i] =  random(999,1)
    }
    return line
}

export function escreverseila(){
    let dados = getDadosEntrada()
    let div = document.getElementById("res")
    let paragrafo = document.createElement("p")

    let linhaResposta = ""


    console.log(dados.match(analisarTxt()), " MATRIX INTEIRA")
  
    if(dados.match(analisarTxt())){
        let numeroLinhas = dados.match(analisarTxt())[1]
        let numeroColunas = dados.match(analisarTxt())[2] 
        let randomInt=randomLine(numeroColunas)

    for(let i = 0; i < numeroColunas ;i++){
        linhaResposta += randomInt[i] + " "
    }

    paragrafo.id="reposta"
    paragrafo.innerHTML += getHora() + ` : ` + linhaResposta
    div.appendChild(paragrafo)


       console.log(numeroLinhas, ", Num1")
       console.log(numeroColunas, ", Num2")
    }
}


