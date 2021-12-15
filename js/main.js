let botao = document.getElementsByClassName("btnSlide")
for(let i = 0; i < botao.length; i++){
    botao[i].onclick = function() { slide() }
}


function slide(){ //Escolhe foto do slide
    let foto = document.getElementsByTagName('html')[0].getAttribute('slide');
    let slide = document.getElementsByTagName('html')[0]
    console.log("Var foto: " + foto)

    if(foto == "foto1"){
        slide.setAttribute("slide", "foto2")
        return
    }
    if(foto == "foto2"){
        slide.setAttribute("slide", "foto3")
        return
    }
    if(foto == "foto3"){
        slide.setAttribute("slide", "foto1")
        return
    }
}