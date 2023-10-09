const username = document.getElementById('username')
const password = document.getElementById('password')
const codigo=document.getElementById('codigo')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
        codigo: codigo.value,
        
    }
    console.log(data)
    alert("EXITO")
})