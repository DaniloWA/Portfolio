let contadorNumero = Number(0)

function temas(){ //Escolhe entre Dark e Light

    let tema = document.getElementsByTagName('html')[0].getAttribute('tema');
    let temaVariavel = document.getElementsByTagName('html')[0]
    let temaTxt = document.getElementById("temaTxt");

    if(tema == "light"){
        temaVariavel.setAttribute("tema", "dark")
        temaTxt.innerHTML = "Dark"
        return
    }

    if(tema == "dark"){
        temaVariavel.setAttribute("tema", "light")
        temaTxt.innerHTML = "Light"
        return
    }
}

function getElementoPai(){ //Pega o elemento pai
    return document.getElementById("pai")
}

function adcElemento(){ //Cria e Adiciona os elementos novos
    let div = getElementoPai()
  
    //Criando elemento  
    let data = document.createElement("p")
    let divB = document.createElement("div")
    let inputTXT = document.createElement("input")
    let hr = document.createElement("hr")
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    let txtArea = document.createElement("textarea")

    divB.className = "bloco"

    data.id = "data"

    inputTXT.type = "text"
    inputTXT.autocomplete = "off"
    inputTXT.maxLength = "13"
    inputTXT.className = "titulo"
    inputTXT.id = "titulo"
    inputTXT.placeholder = "Titulo"

    hr.className = "hrBloco"

    a1.href="#" 
    a1.className="imgBlocoLapis"

    a2.href="#" 
    a2.id=`imgBlocoLixo-${contadorNumero}`
    a2.className="imgBlocoLixo"

    img1.src="img/pencil-fill.svg"
    img1.alt="lapis"

    img2.src="img/trash-fill.svg" 
    img2.alt="lixo"

    txtArea.className="textAreaBloco" 
    txtArea.name="textArea" 
    txtArea.id="textArea"
    txtArea.placeholder = "Escrava sua Nota!"
    
    //Adicionando elemenntos
    div.appendChild(divB)
    divB.appendChild(data)
    divB.appendChild(inputTXT)
    divB.appendChild(hr)
    divB.appendChild(a1)
    a1.appendChild(img1)
    divB.appendChild(a2)
    a2.appendChild(img2)
    divB.appendChild(txtArea)

    data.innerHTML = getHora()
    adicionarNumero()


}

function getHora() { //Pega a Data atual
    let data    = new Date();
    var dia     = data.getDate();          
    var hora    = data.getHours();        
    var mes     = (data.getMonth()+1);        
    var ano     = data.getFullYear();        
    var minutos = data.getMinutes();

    var str_hora = `<b> ${dia}/${mes}/${ano} <br>${hora}:${minutos}<b> `;
    
    return str_hora;
}

function adicionarNumero(){

    let txtContador = document.getElementById("ContadorHTML")

    contadorNumero ++

    console.log("Adicionar : + " + contadorNumero)

    txtContador.innerHTML = contadorNumero
}

window.addEventListener('click', function(event){
    let targetElement = event.target;
    let element = targetElement.parentElement;
    let elementMain = element.parentElement;

    if (element.className == 'imgBlocoLixo') {
        elementMain.remove();

        let txtContador = document.getElementById("ContadorHTML");
        contadorNumero--;
        txtContador.innerHTML = contadorNumero;
    }
})

/* 
function excluir(){


    // let lixo = document.getElementsByClassName("imgBlocoLixo")
    // let lixos = [] 

    // lixos.push("Contador : " + contadorNumero + " : " + lixo[2])
    // console.log("Lixos : - " + lixos)
    // 
    // lixo[contadorNumero].addEventListener("click", function(){

    //     console.log("Excluir : - " + contadorNumero)

    //     contadorNumero --   
    //     txtContador.innerHTML = contadorNumero 
    //   });
    //   

}
*/