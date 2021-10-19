const user = document.getElementById("user");
const pass = document.getElementById("pass");
const btn_login = document.getElementById("btn_login");
const btn_signup = document.getElementById("signUp");

btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    validarUsuario();
})
btn_signup.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace("signup.html");
})

async function validarUsuario() {
    var url = 'http://localhost:8080/usuario/login';
    var data = {
        'email': user.value,
        'password': pass.value
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()
        .then(data => {
            if (data != null) {
                console.log(JSON.stringify(data));
                sessionStorage.setItem('login', JSON.stringify(data));
                sessionStorage.setItem('carrito',0); // MODIFICAR : guardar el JSON de producto
                sessionStorage.setItem('carritoJSON',new Array());
                window.location.replace("index.html");
            }
        }))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}