console.log("Confirm INDEX") 

export function botaoADC(){
    let botao = document.getElementsByClassName("btnSlide") 

    for(let i = 0; i < botao.length; i++){
        botao[i].onclick = function() { slide() } 
        
    }
}

export function slide(){ //Escolhe foto do slide
    console.log("Função SLIDE") 

    let foto = document.getElementsByTagName('html')[0].getAttribute('slide');
    let slide = document.getElementsByTagName('html')[0]

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