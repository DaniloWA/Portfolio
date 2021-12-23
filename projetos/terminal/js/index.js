import * as Calculadora from "./calculadora.js"
import * as Comandos from "./comandos.js"
import * as GeradordeTexto from "./gerartexto.js"
import * as AnalisadorDeTexto from "./analisadortxt.js"
import * as MatrixNumero from "./matrixNum.js"
import * as GeradorNomes from "./gerarnomes.js"
import * as InvertendoTexto from "./invertertexto.js"
import * as EmbaralharTexto from "./embaralhartexto.js"
import * as GerarNumeroTelefone from "./gerarNumeroPortugues.js"
import * as GerarDestino from "./gerarDestino.js"
import * as GerarSenha from "./gerarSenha.js"
import * as GerarEmail from "./gerarEmail.js"
import * as ProcessandoNumeros from "./processarnumeros.js"



// document.querySelector('#submit').addEventListener('click', start())

dadosEntrada.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
      console.log("Apertou Enter")
      start()
  
  }
}
)

function start() { 

    createLinha()
    adcElemento(Calculadora.respostaCalculos(),Comandos.help)


    ProcessandoNumeros.processandoNumeros()

    GerarEmail.Email()
    GerarSenha.Senha()
    GerarDestino.destino()
    GerarNumeroTelefone.gerarNumerosPortugues()
    EmbaralharTexto.embaralharTexto()
    InvertendoTexto.inverterTexto()
    GeradordeTexto.gerarTexto()
    AnalisadorDeTexto.analisarTexto()
    MatrixNumero.start()
    GeradorNomes.gerarNomes()
    Comandos.cleanTxt()
    Comandos.help()

}

export function getDadosEntrada(){
  return window.document.getElementById("dadosEntrada").value.toString()
}

export function getLinhadetexto(){
  console.log('Pegou a linha de texto')
  return window.document.getElementById("res")
}

export function getElementoPai(){
     return document.getElementById("res")
}

export function adcElemento(txt){
  let dados = getDadosEntrada()
  let div = getElementoPai()

  //Criando elemento  
  let paragrafo = document.createElement("p")

  paragrafo.id = 'resposta'
  paragrafo.innerHTML = getHora() + ` : ${dados} <br>`
  
  if(Calculadora.calculadoraRG().exec(dados)) {
      paragrafo.innerHTML +=  getHora() + ` : ${txt}`
      return  div.appendChild(paragrafo)
  } 

  if(Comandos.comandos().exec(dados)){
    return  div.appendChild(paragrafo)
  } 
  
  if(AnalisadorDeTexto.analisarTxt().exec(dados)){
    return  div.appendChild(paragrafo)
  } 

  if(MatrixNumero.analisarTxt().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(GeradorNomes.regexGerarNomes().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(InvertendoTexto.regexInverterTexto().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(EmbaralharTexto.regexEmbaralharTexto().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(GerarNumeroTelefone.regexGerarNumeroTelefone().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(GerarDestino.regexGerarDestino().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(GerarSenha.regexGerarSenha().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(GerarEmail.regexGerarEmail().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  if(ProcessandoNumeros.regexProcessarNumeros().exec(dados)){
    return  div.appendChild(paragrafo)
  }

  paragrafo.innerHTML += getHora() + " : - - Dados invalidos"
  return  div.appendChild(paragrafo)

}

export function getHora() {
  let data    = new Date()
  var hora    = data.getHours();          // 0-23
  var min     = data.getMinutes();        // 0-59
  var seg     = data.getSeconds();        // 0-59
  
  var str_hora = hora + ':' + min + ':' + seg;
  
  return str_hora
}

export function createLinha(){
  let div = document.getElementById("res")
  let linhatxt = document.createElement("p")
  
  linhatxt.id = 'resposta'

  div.appendChild(linhatxt)
}






