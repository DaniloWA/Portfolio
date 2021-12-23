import { getDadosEntrada, getHora} from "./index.js"

let texto = 
["It is a long established fact that a reader ","will be distracted by the readable content ","packages and web page editors ","have evolved over the years ","alteration in some form ","Contrary to popular belief ","classical Latin literature from 45 BC ","on the theory of ethics, very popular ","don't look even slightly believable. ","predefined chunks as necessary ","The generated Lorem Ipsum is therefore always free ","injected humour, or non-characteristic words etc"," Many desktop publishing packages ","tandard dummy text ever since the 1500s ","make a type specimen book ",
]

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function gerarTexto(){
    let vezes = random(14,0)
    let dados = getDadosEntrada()
    if(regexGerarTexto().exec(dados)){
        console.log("Gerando Texto Aleatorio")
        let div = document.getElementById("res")
        //Criando elemento  
        for(let i = 0; i < vezes ; i++){

            let paragrafo = document.createElement("p")
            paragrafo.id = 'resposta'
            paragrafo.innerHTML = getHora() + " : " + texto[random(14,0)] 
            div.appendChild(paragrafo)

        }
    }
}

export function regexGerarTexto() {
    let regExp = /gerar texto/i
    return regExp
}

