function menuSalir(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("carrito");
    sessionStorage.removeItem("carritoJSON");
};

function openStore(){
    postForm("/products.html", { arg1: JSON.parse(sessionStorage.getItem("login")).store.idStore, arg2: "value2" });
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