import { menuUnregistered } from "../common/menu-unregistered.js";
import { menuProfileStore } from "../common/menuprofile-store.js";

const grid = document.querySelector("#grid_gallery");

if (sessionStorage["login"]) { //Pasar a nav-utils
  menuProfileStore();
  const nav_login = document.querySelector("#nav_demo");
  const nav_salir = document.getElementById("nav_salir");
  const num_productos = document.getElementById("carrito_numero");
  num_productos.innerHTML = `${sessionStorage.getItem("carrito")}`;

  let storage_login = JSON.parse(sessionStorage.getItem("login"));
  var newtext = document.createTextNode(" " + storage_login.name);
  nav_login.appendChild(newtext);
} else menuUnregistered();

function receive() {
  const params = new URLSearchParams(window.location.search);
  traerStore(params.get("arg1"));
}

window.onload = receive;

function traerStore(producto) {
  fetch(`http://localhost:8080/store/productname?name=${producto}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length == 0) {
        document.getElementById("title_search").textContent = "No se encontró el producto seleccionado en los negocios cercanos. . . siga participando";
      } else {
        data.forEach((element) => {
          newItem(element);
        });
      }
    });
}

function newItem(data) {
  let numdiv = data.name;

  const store = document.createElement("h1");
  const dir = document.createElement("p");
  const tel = document.createElement("p");
  const div_item_details = document.createElement("div");
  const div_item = document.createElement("div");
  store.className = "p-store text-light bg-danger";
  dir.className = "p-store-details";
  tel.className = "p-store-details";

  store.textContent = `${data.name}`;
  dir.textContent = `Direccion : ${data.address}`;
  tel.textContent = `Telefono : ${data.phone}`;
  div_item_details.className = "item__details";
  div_item.className = "item item--large";
  div_item_details.appendChild(store);
  div_item_details.appendChild(dir);
  div_item_details.appendChild(tel);
  div_item.appendChild(div_item_details);

  grid.appendChild(div_item);

  div_item.addEventListener("click", (e) => {
    e.preventDefault();
    postForm("/products.html", { arg1: data.idStore, arg2: "value2" });
  });
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
