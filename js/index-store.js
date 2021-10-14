const btn_addproducts = document.getElementById("btn_addproducts");
const in_name = document.getElementById("input_name");
const in_desc = document.getElementById("input_description");
const in_price = document.getElementById("input_price");

function agregarProducto() {
  btn_addproducts.addEventListener("click", (e) => {
    e.preventDefault();
    guardarProducto();
    console.log("OK");
  });
}

function guardarProducto() {
  var url = "http://localhost:8080/store/1";
  var data = {
    name: in_name.value,
    description: in_desc.value,
    price: in_price.value,
    pic: "algo.jpg",
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

export { agregarProducto };
