const areaPressiona = document.getElementById("areaPressiona")
const areaVezes = document.getElementById("areaVezes")
const areaHistorico = document.getElementById("areaHistorico")
let contadorLinha = 0
let contador = 0
 
document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    const code = event.keyCode;
    digitos(key,code)
    areaHistorico.scrollTo(0,99999)
    
    console.log(`Key: ${key}, Code ${code}`);
  });

  function digitos(key,code){
    areaPressiona.innerHTML = "Tecla : '" + key + "' Code : '" + code +"'"
    areaHistorico.innerHTML += "Tecla : '" + key + "' Code : '" + code + "'\n" 

    contador += 1
    contadorLinha += 1;

    areaVezes.innerHTML = contador
  }

  function limpar() {
    areaPressiona.innerHTML = " "
    areaHistorico.innerHTML = " "
    areaVezes.innerHTML = ""
    contador = 0;
  }
 