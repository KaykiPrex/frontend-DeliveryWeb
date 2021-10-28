import { menuUnregistered } from "../common/menu-unregistered.js";
import { menuProfileStore } from "../common/menuprofile-store.js";

const grid = document.querySelector("#card_gallery");
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
  /*let list = document.createElement("ul");
  list.className="list-group";*/
  let total = 0;
  for (let i of data) {
    /*let item = document.createElement("li");
    item.className="list-group-item";
    item.innerHTML = `Producto: ${JSON.stringify(i)}`;*/ //JSON.stringify(i)
    /*list.appendChild(item);*/ newItem(i); 
    total += i.price ;
  }
  totalVista(total);
  //document.getElementById("listaProductos").appendChild(list);
}

function newItem(data) {
  const producto = document.createElement("h2");
  const precio = document.createElement("p");

  const div_card_body = document.createElement("div");
  const div_card = document.createElement("div");

  producto.textContent = `${data.name}`;
  precio.textContent = `$ ${data.price}`;
  div_card_body.className = "card-body";
  div_card.className = "card";
  producto.className = "card-title";
  precio.className = "card-text";
  div_card_body.appendChild(producto);
  div_card_body.appendChild(precio);
  div_card.appendChild(div_card_body);

  grid.appendChild(div_card);
}

function totalVista(data) {
  const total = document.createElement("h2");
  const precio = document.createElement("p");

  const div_card_body = document.createElement("div");
  const div_card = document.createElement("div");

  total.textContent = `Total`;
  precio.textContent = `$ ${data}`;
  div_card_body.className = "card-body bg-danger";
  div_card.className = "card";
  total.className = "card-title";
  precio.className = "card-text text-white";
  div_card_body.appendChild(total);
  div_card_body.appendChild(precio);
  div_card.appendChild(div_card_body);

  grid.appendChild(div_card);
}
