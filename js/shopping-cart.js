import { menuUnregistered } from "../common/menu-unregistered.js";
import { menuProfileStore } from "../common/menuprofile-store.js";

let contador_productos = 0;
if (sessionStorage["carrito"]) {
  contador_productos = parseInt(sessionStorage.getItem("carrito"), 10);
}
if (sessionStorage["login"]) {
  // Pasar a una funcion en Nav-utils
  menuProfileStore();
  const nav_login = document.querySelector("#nav_demo");
  const nav_salir = document.getElementById("nav_salir");
  const num_productos = document.getElementById("carrito_numero");

  num_productos.innerHTML = `${sessionStorage.getItem("carrito")}`;
  let storage_login = JSON.parse(sessionStorage.getItem("login"));

  var newtext = document.createTextNode(" " + storage_login.name);
  nav_login.appendChild(newtext);
} else menuUnregistered();

// --------
if (sessionStorage.getItem("carritoJSON").length > 0) {
  let data = JSON.parse(sessionStorage.getItem("carritoJSON"));
  let list = document.createElement("ul");
  list.className="list-group";
  for (let i of data) {
    let item = document.createElement("li");
    item.className="list-group-item";
    item.innerHTML = `Producto: ${JSON.stringify(i)}`;//JSON.stringify(i)
    list.appendChild(item);
  }

  document.getElementById("listaProductos").appendChild(list);
}
