const grid = document.querySelector("#grid_gallery");
const h1 = document.getElementById("title");

function receive() {
    const params = new URLSearchParams(window.location.search);

    
    // You can access specific parameters:
    console.log(params.get('arg1'));

    traerProductos(params.get('arg1'));
}

window.onload = receive;

function traerProductos(storeid) {
    fetch(`http://localhost:8080/store/${storeid}`)
        .then(res => res.json())
        .then(data => {
            h1.textContent = h1.textContent+` ${data.name}`;
            data.products.forEach(element => {
                newItem(element);
            });
        })

}

function newItem(data) {
  
    const h2 = document.createElement('h1');
    const precio = document.createElement('p');
    const reco = document.createElement('p');
    const div_item_details = document.createElement('div');
    const div_item = document.createElement('div');

    h2.textContent = `${data.name}`;
    precio.textContent = `Descripcion : ${data.description}`;
    reco.textContent = `Precio : ${data.price}`;
    div_item_details.className = "item__details"
    div_item.className = "item item--large";
    div_item_details.appendChild(h2);
    div_item_details.appendChild(precio);
    div_item_details.appendChild(reco);
    div_item.appendChild(div_item_details);

    grid.appendChild(div_item);

}


