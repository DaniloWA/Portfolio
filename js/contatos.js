console.log("Confirm CONTATOS")

export function sobrePage(){
    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const telefoneInput = document.querySelector('#telefone')
    const subimitButton = document.querySelector('#btnEnviar');
    const errorMessage = document.querySelector('.msg');

    const items = document.querySelector('.items')

    subimitButton.addEventListener('click', function(e){
        e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const telefoneValue = telefoneInput.value;

    if(nameValue == '' || emailValue == ''){
        errorMessage.textContent = "Por favor preencha as areas!"
        errorMessage.classList = 'error'

        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.classList = '';
        }, 3000)
        return;
    }

    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue} <br> Telefone: ${telefoneValue}`

    items.appendChild(li)

    nameInput.value = '';
    emailInput.value = '';
    telefoneInput.value = '';
})
}

 