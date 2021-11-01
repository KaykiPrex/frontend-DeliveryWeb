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
  let prod = document.createElement("h1");
  const desc = document.createElement("p");
  const precio = document.createElement("p");
  const div_item_details = document.createElement("div");
  const div_item = document.createElement("div");
  precio.className = "text-light bg-danger";
  prod.className = "producto";
  desc.className = "descripcion";

  prod.textContent = data.name;
  desc.textContent = `Descripcion : ${data.description}`;
  precio.textContent = `Precio : $ ${data.price}`;
  div_item_details.className = "item__details";
  div_item.className = "item item--large";
  //div_item.style.backgroundImage=`url(/IMG_DB/product_${data.pic})`; //Change Image
  checkImage(`/IMG_DB/product_${data.pic}`, function(){ div_item.style.backgroundImage=`url(/IMG_DB/product_${data.pic})`; }, function(){ div_item.style.backgroundImage=`url(/IMG_DB/product_empty.jpg)`; } );
  div_item_details.appendChild(prod);
  div_item_details.appendChild(desc);
  div_item_details.appendChild(precio);
  div_item.appendChild(div_item_details);

  grid.appendChild(div_item);

  if (sessionStorage["carrito"]) {
    const num_productos = document.getElementById("carrito_numero");

    div_item.addEventListener("click", (e) => {
      e.preventDefault();
      contador_productos += 1;
      num_productos.innerHTML = `${contador_productos}`;

      var carritoJSON = [];
      if (sessionStorage.getItem("carritoJSON").length > 0) carritoJSON = JSON.parse(sessionStorage.getItem("carritoJSON"));
      carritoJSON.push(data);
      sessionStorage.setItem("carritoJSON", JSON.stringify(carritoJSON));
      sessionStorage.setItem("carrito", contador_productos);
      console.log(JSON.parse(sessionStorage.getItem("carritoJSON")));
    });
  }
}

function checkImage(imageSrc, good, bad) {
  var img = new Image();
  img.onload = good; 
  img.onerror = bad;
  img.src = imageSrc;
}
