import { menuStore } from "../common/menu-store.js";
import { menuUnregistered } from "../common/menu-unregistered.js";
import { menuProfileStore } from "../common/menuprofile-store.js";
const input = document.querySelector("input");
const container = document.querySelector("#main_container");
const btnSearch = document.querySelector("#search_product");

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  postForm("/stores.html", { arg1: input.value });
});

function loginUsuario() {
  // Si en el storage se encuentra un login , cambio al menu correspondiente (commprador o vendedor)
  if (sessionStorage["login"]) { 
      menuProfileStore();
      const nav_login = document.querySelector("#nav_demo");
      const nav_salir = document.getElementById("nav_salir");
      const num_productos = document.getElementById("carrito_numero"); 
      num_productos.innerHTML=`${sessionStorage.getItem("carrito")}`;

      let storage_login = JSON.parse(sessionStorage.getItem("login"));
      var newtext = document.createTextNode(" " + storage_login.name);
      nav_login.appendChild(newtext);
      
      if ((JSON.parse(sessionStorage.getItem("login")).rol == "store")) { 
      menuStore();
      const milista = document.getElementById("lista_productos");
      JSON.parse(sessionStorage.getItem("login")).store.products.forEach((element) => {
        newItem(element,milista);
      });
      const btn_addproducts = document.getElementById("btn_addproducts");
      const in_name = document.getElementById("input_name");
      const in_desc = document.getElementById("input_description");
      const in_price = document.getElementById("input_price");
      btn_addproducts.addEventListener("click", (e) => {
        e.preventDefault();
        guardarProducto(in_name, in_desc, in_price);
        console.log("OK");
      });
    } 
  } else menuUnregistered();
}

function postForm(path, params, method = "GET") {
  const form = document.createElement("form");
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }
  document.body.appendChild(form);
  form.submit();
}

function guardarProducto(name, desc, price) {
  var url = `http://localhost:8080/store/${
    JSON.parse(sessionStorage.getItem("login")).store.idStore
  }`;
  var data = {
    name: name.value,
    description: desc.value,
    price: price.value,
    pic: "empty.jpg",
  };
  console.log(data);
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}

function newItem(data,milista) {
  
  const producto = document.createElement("h2");
  const desc = document.createElement("p");
  const precio = document.createElement("p");
  const div_card_body = document.createElement("div");
  const div_card = document.createElement("div");

  producto.textContent = `${data.name}`;
  precio.textContent = `$ ${data.price}`;
  desc.textContent = data.description;
  div_card_body.className = "card-body";
  div_card.className = "card";
  producto.className = "card-title";
  precio.className = "card-text";
  desc.className = "card-text";
  div_card_body.appendChild(producto);
  div_card_body.appendChild(desc);
  div_card_body.appendChild(precio);
  div_card.appendChild(div_card_body);

  milista.appendChild(div_card);
}

loginUsuario();
