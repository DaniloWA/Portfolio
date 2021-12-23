let tela = document.getElementById("tela")
let conta = []
let parte01 = " " 
let parte02 = " " 
let resultado = " "
let operador = " "
let alvo


window.addEventListener("click", function(atual){
     alvo = atual.target;
     digitos(alvo)
})

 function digitos(alvo){
    let d = alvo.value
    console.log("VALOR DO ALVO: " + typeof d + " : " + d)

        if(d == undefined) {
            //console.log("Alvo indefinido!")
            return 
        } 
            switch (Number(d)){
                case 1: 
                tela.innerHTML += 1
                conta.push(1)
                console.log("case 1"); 
                break;
    
                case 2: 
                tela.innerHTML += 2
                conta.push(2)
                console.log("case 2"); 
                break;

                case 3: 
                tela.innerHTML += 3
                conta.push(3)
                console.log("case 3"); 
                break;

                case 4: 
                tela.innerHTML += 4
                conta.push(4)
                console.log("case 4"); 
                break;

                case 5: 
                tela.innerHTML += 5
                conta.push(5)
                console.log("case 5"); 
                break;

                case 6: 
                tela.innerHTML += 6
                conta.push(6)
                console.log("case 6"); 
                break;

                case 7:  
                tela.innerHTML += 7
                conta.push(7)
                console.log("case 7"); 
                break;

                case 8: 
                tela.innerHTML += 8
                conta.push(8)
                console.log("case 8"); 
                break;

                case 9: 
                tela.innerHTML += 9
                conta.push(9)
                console.log("case 9"); 
                break;

                case 0: 
                tela.innerHTML += 0
                conta.push(0)
                console.log("case 0"); 
                break;
              }
                switch (d){
                    case "Limpar": 
                    console.log("LIMPANDO!")
                    tela.innerHTML = " "
                    conta = []
                    parte01 = " "
                    parte02 = " "
                    operador = " "
                    resultado = " "
                    break;

                    case "+": 
                    tela.innerHTML = "+ "
                    operador = "+" 
                    for(let i = 0; i < conta.length; i++) {
                        parte01 += conta[i];
                    }
                    conta = []
                    break;

                    case "-": 
                    tela.innerHTML = "- "
                    operador = "-" 
                    for(let i = 0; i < conta.length; i++) {
                        parte01 += conta[i];
                    }
                    conta = []
                    break;

                    case "=": 
                    for(let i = 0; i < conta.length; i++) {
                        parte02 += conta[i];
                    }
                    conta = []

                    if(operador == "+") {
                        resultado = Number(parte01) + Number(parte02)
                        tela.innerHTML = "= " + resultado
                    }

                    if(operador == "-") {
                        resultado = Number(parte01) - Number(parte02)
                        tela.innerHTML = "= " + resultado
                    }

                    if(operador == "*") {
                        resultado = Number(parte01) * Number(parte02)
                        tela.innerHTML = "= " + resultado
                    }

                    if(operador == "/") {
                        resultado = Number(parte01) / Number(parte02)
                        tela.innerHTML = "= " + resultado
                    }

                    console.log("Parte 01 : " + parte01)
                    console.log("Operador : " + operador)
                    console.log("Parte 02 : " + parte02)
                    console.log("resultado : " + resultado); 
                    break;

                    case "/": 
                    tela.innerHTML = "/ "
                    operador = "/" 
                    for(let i = 0; i < conta.length; i++) {
                        parte01 += conta[i];
                    }
                    conta = []
                    break;

                    case "*": 
                    tela.innerHTML = "* "
                    operador = "*" 
                    for(let i = 0; i < conta.length; i++) {
                        parte01 += conta[i];
                    }
                    conta = []
                    break;
            
        }
      
 }


 /*
 
 let n1 = document.getElementById("n1") 
 let n2 = document.getElementById("n2")
 let n3 = document.getElementById("n3")
 let n4 = document.getElementById("n4")
 let n5 = document.getElementById("n5")
 let n6 = document.getElementById("n6")
 let n7 = document.getElementById("n7")
 let n8 = document.getElementById("n8")
 let n9 = document.getElementById("n9")
 let n0 = document.getElementById("n0")

 let limpar = document.getElementById("limpar")
 let mais = document.getElementById("mais")
 let menos = document.getElementById("menos")
 let igual = document.getElementById("igual")
 let barra = document.getElementById("barra")
 let vezes = document.getElementById("vezes")
 */