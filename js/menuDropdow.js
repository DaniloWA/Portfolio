console.log("Confirm MenuDropDow") 

const sb = document.querySelector('#menu')

sb.onchange = (event) => {
    event.preventDefault();
    switch(sb.value){
        case "Home": window.location ='index.html'; break;
        case "Sobre": window.location ='sobre.html'; break;
        case "Contatos": window.location ='contatos.html'; break;
        case "Projetos": window.location ='projetos.html'; break;
    }
}

