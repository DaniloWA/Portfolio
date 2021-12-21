import * as index from "./index.js"
import * as sobre from "./sobre.js"
import * as contatos from "./contatos.js"
import * as projetos from "./projetos.js"
import * as menuDrop from "./menuDropdow.js"


let page = document.getElementsByTagName('html')[0].getAttribute('page');

switch(page){
    case "index": 
        console.log("Case: " + page);
        window.onload = index.botaoADC(); 
        window.onload = menuDrop.menuSelect();
    break;

    case "sobre": 
        console.log("Case: " + page); 
        window.onload = menuDrop.menuSelect();
    break;

    case "contatos": 
        console.log("Case: " + page);
        window.onload = contatos.sobrePage();
        window.onload = menuDrop.menuSelect();
    break;    

    case "projetos": 
        console.log("Case: " + page); 
        window.onload = menuDrop.menuSelect();
    break;
}



/*
        dadosEntrada.addEventListener("keypress", function(e) {
            if(e.key === 'Enter') {
                console.log("Apertou Enter")
                start()
            }
        }
        )
*/

