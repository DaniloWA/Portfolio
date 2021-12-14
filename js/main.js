function slide(){ //Escolhe foto do slide
    let foto = document.getElementsByTagName('html')[0].getAttribute('slide');
    console.log("Var foto: " + foto)
    let slide = document.getElementsByTagName('html')[0]
    let temaTxt = document.getElementById("temaTxt");

    if(foto == "foto1"){
        slide.setAttribute("slide", "foto1")
        return
    }
    if(foto == "foto2"){
        slide.setAttribute("slide", "foto2")
        return
    }
    if(foto == "foto3"){
        slide.setAttribute("slide", "foto3")
        return
    }
    
}