
const grid = document.querySelector("#grid_gallery");
var autodiv = [];

function receive() {
    const params = new URLSearchParams(window.location.search);

    // You can access specific parameters:
    console.log(params.get('arg1'));

    traerStore(params.get('arg1'));
}

window.onload = receive;

function traerStore(producto) {
    fetch(`http://localhost:8080/store/productname?name=${producto}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                newItem(element) ;
            });
        })

}

function newItem(data) {
    let numdiv = data.name ;

    const h2 = document.createElement('h1');
    const precio = document.createElement('p');
    const reco = document.createElement('p');
    const div_item_details = document.createElement('div');
    const div_item = document.createElement('div');

    h2.textContent = `${data.name}`;
    precio.textContent = `Direccion : ${data.address}`;
    reco.textContent = `Telefono : ${data.phone}`;
    div_item_details.className = "item__details"
    div_item.className = "item item--large";
    div_item.id = `autodiv${numdiv}`;
    div_item_details.appendChild(h2);
    div_item_details.appendChild(precio);
    div_item_details.appendChild(reco);
    div_item.appendChild(div_item_details);

    grid.appendChild(div_item);

    console.log(`autodiv${data.idStore}`);
    div_item.addEventListener("click", (e) =>{
        e.preventDefault(); 
        console.log(data.name);
        //window.location.href = "index.html"; // enlace a la siguiente pagina , productos
        postForm('/products.html', {arg1: data.idStore, arg2: 'value2'});
    })
    
}

function gridclickeable(){
    console.log(autodiv[0]);
    /*autodiv[0].addEventListener("click", (e) =>{
        e.preventDefault(); 
        
    })*/
}

function vaciarContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function postForm(path, params, method='GET') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }




// COMERCIOS QUE TIENEN PIZZA
//traerStore("pizza");
//gridclickeable();