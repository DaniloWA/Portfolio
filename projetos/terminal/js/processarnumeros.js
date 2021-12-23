import { getDadosEntrada, getHora} from "./index.js"
import * as Extenso from "./numerosextensos.js"



export function processandoNumeros(){
    let dados = getDadosEntrada()
    let numeroEntrada = dados.match(regexALLNumber())[0] || 0
    let dezena = true
    let centena = false

    console.log(numeroEntrada," eNTROU")
    console.log()

    if(numeroEntrada > 999){
        return alert("Error numero muito grande")
    }

    if(numeroEntrada <= 9){
        return adcLinha(Extenso.numeros0_9()[numeroEntrada])
    }

    if(numeroEntrada <= 19){
       numeroEntrada -= 10
       return adcLinha(Extenso.numeros10_19()[numeroEntrada])
    }

    if(numeroEntrada.length >= 3) {
        dezena = false
        centena = true
    }

    if(dezena){
        let saida = Extenso.numeros20_90()[numeroEntrada[0]]
        let complemento = Extenso.numeros0_9()[numeroEntrada[1]]
        let linha = saida
        if (numeroEntrada[1] > 0) {
            linha += " e " + complemento
        }
        return adcLinha(linha)
    }

    if(centena){
        let numero01 = numeroEntrada[0]
        let numero02 = numeroEntrada[1]
        let numero03 = numeroEntrada[2]

        let saida = Extenso.numerosCentena()[numero01]
        let complemento = Extenso.numeros20_90()[numero02]
        let complemento2 = Extenso.numeros0_9()[numero03]
        let linha = saida

        if(numero02 > 0){
            linha += " e " + complemento
        }

        if(numero03 > 0){
            linha += " e " + complemento2
        }
        
        return adcLinha(linha)
        
    }
}


function preparandoSwitch(){
    let dados = getDadosEntrada()
   // let numeroS = dados.match(regexALLNumber())
    let dadosEntrada = dados.replace(regexProcessarNumeros(),'')

    cerebro(numeroS)
    //Processar Numero 22
}

function cerebro(numeroX){
    let numerosInteiros = numeroX[0]
    let digito1 = ""
    let digito2 = ""
    let digito3 = ""
    let de10em10 = ""
    console.log(numerosInteiros, ", numerosInteiros")
    
    // de 0 a 9
    if(numerosInteiros){
        switch (numerosInteiros[0]) {
            case "0":
                digito1 = numeros0_19[0]
                break;
            case "1":
                digito1 = numeros0_19[1]
                break;
            case "2":
                digito1 = numeros0_19[2]
                break;
            case "3":
                digito1 = numeros0_19[3]
                break;
            case "4":
                digito1 = numeros0_19[4]   
                break;
            case "5":
                digito1 = numeros0_19[5]
                break;
            case "6":
                digito1 = numeros0_19[6]
                break;
            case "7":
                digito1 = numeros0_19[7]
                break;
            case "8":
                digito1 = numeros0_19[8]
                break;
            case "9":
                digito1 = numeros0_19[9]
                break;   
        }
    }

    // de 10 a 20
    if(numerosInteiros.length == 2 && numeroX < 21){
        
        switch (numerosInteiros) {
            case "10":
                de10em10 = numeros0_19[10]
                break;
            case "11":
                de10em10 = numeros0_19[11]   
                break;
            case "12":
                de10em10 = numeros0_19[12]   
                break;
            case "13":
                de10em10 = numeros0_19[13]   
                break;
            case "14":
                de10em10 = numeros0_19[14]   
                break;
            case "15":
                de10em10 = numeros0_19[15]
                break;
            case "16":
                de10em10 = numeros0_19[16]
                break;
            case "17":
                de10em10 = numeros0_19[17]
                break;
            case "18":
                de10em10 = numeros0_19[18]
                break;
            case "19":
                de10em10 = numeros0_19[19]
                break;
            case "20":
                de10em10 = numeros0_19[20]
                break;    
        }

    }

    // de 20 a 30
    if(numerosInteiros.length == 2  && numeroX < 31 && numeroX > 20){
        switch (numerosInteiros[1]) {
            case "1":
                digito3 = numeros20_90[0] + " e " + numeros0_19[1]
                break;
            case "2":
                digito3 = numeros20_90[0] + " e " + numeros0_19[2]  
                break;
            case "3":
                digito3 = numeros20_90[0] + " e " + numeros0_19[3]
                break;
            case "4":
                digito3 =numeros20_90[0] + " e " + numeros0_19[4]  
                break;
            case "5":
                digito3 =numeros20_90[0] + " e " + numeros0_19[5]  
                break;
            case "6":
                digito3 =numeros20_90[0] + " e " + numeros0_19[6]
                break;
            case "7":
                digito3 =numeros20_90[0] + " e " + numeros0_19[7]
                break;
            case "8":
                digito3 =numeros20_90[0] + " e " + numeros0_19[8]
                break;
            case "9":
                digito3 =numeros20_90[0] + " e " + numeros0_19[9]
                break;
            case "0":
                digito3 =numeros20_90[1]
                break;  
        }
    }

     // de 30 a 40
    if(numerosInteiros.length == 2  && numeroX < 41 && numeroX > 30){
        switch (numerosInteiros[1]) {
            case "1":
                digito3 = numeros20_90[1] + " e " + numeros0_19[1]
                break;
            case "2":
                digito3 = numeros20_90[1] + " e " + numeros0_19[2]  
                break;
            case "3":
                digito3 = numeros20_90[1] + " e " + numeros0_19[3]
                break;
            case "4":
                digito3 = numeros20_90[1] + " e " + numeros0_19[4]  
                break;
            case "5":
                digito3 = numeros20_90[1] + " e " + numeros0_19[5]  
                break;
            case "6":
                digito3 = numeros20_90[1] + " e " + numeros0_19[6]
                break;
            case "7":
                digito3 = numeros20_90[1] + " e " + numeros0_19[7]
                break;
            case "8":
                digito3 = numeros20_90[1] + " e " + numeros0_19[8]
                break;
            case "9":
                digito3 = numeros20_90[1] + " e " + numeros0_19[9]
                break;
            case "0":
                digito3 = numeros20_90[2]
                break;  
        }
    }

     // de 40 a 50
    if(numerosInteiros.length == 2  && numeroX < 51 && numeroX > 40){
    switch (numerosInteiros[1]) {
        case "1":
            digito3 = numeros20_90[2] + " e " + numeros0_19[1]
            break;
        case "2":
            digito3 = numeros20_90[2] + " e " + numeros0_19[2]  
            break;
        case "3":
            digito3 = numeros20_90[2] + " e " + numeros0_19[3]
            break;
        case "4":
            digito3 = numeros20_90[2] + " e " + numeros0_19[4]  
            break;
        case "5":
            digito3 = numeros20_90[2] + " e " + numeros0_19[5]  
            break;
        case "6":
            digito3 = numeros20_90[2] + " e " + numeros0_19[6]
            break;
        case "7":
            digito3 = numeros20_90[2] + " e " + numeros0_19[7]
            break;
        case "8":
            digito3 = numeros20_90[2] + " e " + numeros0_19[8]
            break;
        case "9":
            digito3 = numeros20_90[2] + " e " + numeros0_19[9]
            break;
        case "0":
            digito3 = numeros20_90[3]
            break;  
    }
    }

    
    if(digito1 != "" && de10em10 == "" && digito3 == ""){
        console.log("Entrou no Digito01")
        adcLinha(digito1)
    }

    if(de10em10 != "" && digito3 == ""){
        adcLinha(de10em10)
    }

    if(digito3 != "" && de10em10 == ""){
        adcLinha(digito3)
    }


    
}
//Processar Numero 0
export function regexProcessarNumeros() {
    let regExp = /Processar Numeros? /ig
    return regExp
}
export function regexALLNumber() {
    let regExp1 = /[0-9]+/i
    return regExp1
}

function switchFunction(key,key2){
    let dados = getDadosEntrada()
    let dadosEntrada = dados.replace(/Processar Numeros /i,'')
    let dadosFinal
    switch (key) {
        case "0":
            dadosFinal = dadosEntrada.replace(/0/g,numeros0_19[0])
            return adcLinha(dadosFinal)
            break;
        case "1":
            dadosFinal = dadosEntrada.replace(/1/g,numeros0_19[1])
            return adcLinha(dadosFinal)
            break;
        case "2":
            dadosFinal = dadosEntrada.replace(/2/g,numeros0_19[2])
            return adcLinha(dadosFinal)
            break;    
        case "3":
            dadosFinal = dadosEntrada.replace(/3/g,numeros0_19[3])
            return adcLinha(dadosFinal)
            break;   
    }

    switch (key2) {
        case "0":
            dadosFinal = dadosEntrada.replace(/0/g,numeros0_19[0])
            return adcLinha(dadosFinal)
            break;
        case "1":
            dadosFinal = dadosEntrada.replace(/1/g,numeros0_19[1])
            return adcLinha(dadosFinal)
            break;
        case "2":
            dadosFinal = dadosEntrada.replace(/2/g,numeros0_19[2])
            return adcLinha(dadosFinal)
            break;    
        case "3":
            dadosFinal = dadosEntrada.replace(/3/g,numeros0_19[3])
            return adcLinha(dadosFinal)
            break;   
    }





}
 

function adcLinha(texto){
            
    let div = document.getElementById("res") 
    let paragrafo = document.createElement("p")
    paragrafo.id = 'resposta'

    paragrafo.innerHTML = getHora() + " : " + texto
    div.appendChild(paragrafo)  
}
/*

length

Processar Numeros 1 32 203 320 2 42 492


    let numerosDados1 = dados.match(regexALLNumber())[1]
    let numerosDados2 = dados.match(regexALLNumber())[2]
    let numerosDados3 = dados.match(regexALLNumber())[3]
    let numerosDados4 = dados.match(regexALLNumber())[4]
    let numerosDados5 = dados.match(regexALLNumber())[5]
    let numerosDados6 = dados.match(regexALLNumber())[6]
    let numerosDados7 = dados.match(regexALLNumber())[7]
    let numerosDados8 = dados.match(regexALLNumber())[8]
    let numerosDados9 = dados.match(regexALLNumber())[9]
    let numerosDados10 = dados.match(regexALLNumber())[10]

    if(dados.match(regexALLNumber())[0].length <= 1){
        console.log("ENTROU AQUI")
    }


*/
