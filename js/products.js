import { menuUnregistered } from "../common/menu-unregistered.js";
import { menuProfileStore } from "../common/menuprofile-store.js";

const grid = document.querySelector("#grid_gallery");
const h1 = document.getElementById("title");

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

function receive() {
  const params = new URLSearchParams(window.location.search);
  // You can access specific parameters:
  console.log("parametro: " + params.get("arg1"));

  traerProductos(params.get("arg1"));
}
window.onload = receive;

function traerProductos(storeid) {
  fetch(`http://localhost:8080/store/${storeid}`)
    .then((res) => res.json())
    .then((data) => {
      h1.textContent = h1.textContent + ` ${data.name}`;
      data.products.forEach((element) => {
        newItem(element);
      });
    });
}

function newItem(data) {
  const h2 = document.createElement("h1");
  const precio = document.createElement("p");
  const reco = document.createElement("p");
  const div_item_details = document.createElement("div");
  const div_item = document.createElement("div");

  h2.textContent = `${data.name}`;
  precio.textContent = `Descripcion : ${data.description}`;
  reco.textContent = `Precio : ${data.price}`;
  div_item_details.className = "item__details";
  div_item.className = "item item--large";
  div_item_details.appendChild(h2);
  div_item_details.appendChild(precio);
  div_item_details.appendChild(reco);
  div_item.appendChild(div_item_details);

  grid.appendChild(div_item);

  if (sessionStorage["carrito"]) {
    const num_productos = document.getElementById("carrito_numero");
    
    div_item.addEventListener("click", (e) => {
      e.preventDefault();
      contador_productos += 1;
      num_productos.innerHTML = `${contador_productos}`;
      //INICIO carrito de compras
      var carritoJSON = [];
      //suma_carrito.push(JSON.parse(sessionStorage.getItem("carritoJSON")));CASI CASI
      if (sessionStorage.getItem("carritoJSON").length>0 ) carritoJSON = JSON.parse(sessionStorage.getItem("carritoJSON")); // Checkear SI JSON tiene datos entonces hacer eso !!!
      //
      carritoJSON.push(data);
      sessionStorage.setItem("carritoJSON", JSON.stringify( carritoJSON));
      //
      sessionStorage.setItem("carrito", contador_productos);
      //sessionStorage.setItem("carritoJSON", JSON.stringify(data)); OK FUNCIONA BORRAR cuando esta completo
      //console.log(data);
      console.log(JSON.parse(sessionStorage.getItem("carritoJSON")));
      //window.location.href = "index.html"; // enlace a la siguiente pagina // FIN carrito de compras
    });
  }
}
