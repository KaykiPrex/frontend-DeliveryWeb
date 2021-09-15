const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const tienda_nombre = document.querySelector("#input_tienda-nombre");
const tienda_dir = document.querySelector("#input_tienda-dir");
const tienda_tel = document.querySelector("#input_tienda-tel");
const tienda_mail = document.querySelector("#input_mail");
const tienda_pass = document.querySelector("#input_pass");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



btn_tienda.addEventListener("click", (e) =>{
    e.preventDefault(); 
    guardarTienda();
    window.location.replace ("success.html");
})

function guardarTienda(){
      var url = 'http://localhost:8080/store/save';
      var data = {
                'name': tienda_nombre.value,
                'phone': tienda_tel.value,
                'address': tienda_dir.value,
                'latitude': 5540,
                'longitude': 3584,
                'distance': 20};
      
      fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}