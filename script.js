const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const acepto = document.getElementById('acepto')

form.addEventListener('submit', (e) => {
    let messages = []
    if (nombre.value === '' || nombre.value == null){
        messages.push('Debe ingresar su nombre.')
    }

    if (password.lenght <= 6) {
        messages.push('La contrasena debe contener más de 6 caracteres.')
    }

    if(messages.lenght > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})