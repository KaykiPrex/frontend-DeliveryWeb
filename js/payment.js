const btn_pedido = document.getElementById("btn_pedido");

btn_pedido.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem('carrito',0);
    sessionStorage.setItem('carritoJSON',new Array());
  });