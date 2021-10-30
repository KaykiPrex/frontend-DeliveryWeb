const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

btn_tienda.addEventListener("click", (e) => {
  guardarTienda();
  e.preventDefault();
  //Si funciona bien "success" y mal "ERROR"
  window.location.replace("success.html");
});

btn_cliente.addEventListener("click", (e) => {
  guardarCliente();
  e.preventDefault();
  //Si funciona bien "success" y mal "ERROR"
  window.location.replace("success.html");
});

async function guardarTienda() {
  const tienda_nombre = document.querySelector("#input_tienda-nombre");
  const tienda_dir = document.querySelector("#input_tienda-dir");
  const tienda_tel = document.querySelector("#input_tienda-tel");
  const tienda_mail = document.querySelector("#input_tienda-mail");
  const tienda_pass = document.querySelector("#input_tienda-pass");

  let url = "http://localhost:8080/usuario/save";
  let data = {
    email: tienda_mail.value,
    password: tienda_pass.value,
    rol: "store",
    name: tienda_nombre.value,
    phone: tienda_tel.value,
    address: tienda_dir.value,
    latitude: 0,
    longitude: 0,
    distance: 0,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}

async function guardarCliente() {
  const cliente_nombre = document.querySelector("#input_cliente-nombre");
  const cliente_dir = document.querySelector("#input_cliente-dir");
  const cliente_tel = document.querySelector("#input_cliente-tel");
  const cliente_mail = document.querySelector("#input_cliente-mail");
  const cliente_pass = document.querySelector("#input_cliente-pass");

  let url = "http://localhost:8080/usuario/save";
  let data = {
    email: cliente_mail.value,
    password: cliente_pass.value,
    rol: "client",
    name: cliente_nombre.value,
    phone: cliente_tel.value,
    address: cliente_dir.value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}
