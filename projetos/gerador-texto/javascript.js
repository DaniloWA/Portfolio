let linhasNum = window.document.getElementById("linhas").value
let paragrafosNum = window.document.getElementById("paragrafos").value
let corTxt = window.document.getElementById("corTxt").value
let fontStyle = window.document.getElementById("fonte").value


function start() {
    linhasNum = window.document.getElementById("linhas").value
    paragrafosNum = window.document.getElementById("paragrafos").value
    corTxt = window.document.getElementById("corTxt").value
    fontStyle = window.document.getElementById("fonte").value

    criarTexto(paragrafosNum,linhasNum,fontStyle,corTxt)
}

function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

function aleatorioTxt() {
    linhasNum = random(30,1)
    paragrafosNum = random(10,1)
    criarTexto(paragrafosNum,linhasNum)
  
    console.log(linhasNum, ", Linhas Aleatorias")
    console.log(paragrafosNum, ", Paragrafos Aleatorias")
}

function input(){
    linhasNum = window.document.getElementById("linhas").value
    paragrafosNum = window.document.getElementById("paragrafos").value
    corTxt = window.document.getElementById("corTxt").value
    fontStyle = window.document.getElementById("fonte").value
    
    console.log(fontStyle, ", Fonte do texto")
    console.log(corTxt, ", Cor do texto")
    console.log(linhasNum, ", Numeros de linha")
    console.log(paragrafosNum, ", Numeros de Paragrafos")
}

function criarTexto(paragrafosNums,linhasNums,font = "",cor = ""){

    for(let i = 0; i < paragrafosNums; i++){
        let section = document.getElementById("section")
        let titulo = document.createElement("h1")
        let paragrafo = document.createElement("p")

        titulo.id = "new"
        titulo.className = "txttitulo"
        titulo.innerHTML = "Why do we use it?"
        
        for( let i = 0; i < linhasNums; i++){
            paragrafo.style.color = cor
            paragrafo.style.fontFamily = font
            paragrafo.id="new"
            paragrafo.innerHTML += " caraIt is a long established fact that a reader will be distracted by the readable. content of a page when looking at its layout."
        }
    
        section.appendChild(titulo)
        section.appendChild(paragrafo)
       
    }
}

function cleanAll(){
    linhasNum = " "
    paragrafosNum = " "
    corTxt = " "
    fontStyle = " "

    while (document.getElementById("new")) {
        let section = document.getElementById("new").remove() 
    }
}