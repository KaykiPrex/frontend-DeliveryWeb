const header = document.getElementById('header');

let menuStore = () => {
    return header.innerHTML += `
    <div class="tabs">
    <div class="tab-2">
      <label for="tab2-1">Mis Productos</label>
      <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
      <div>
        <h4>Ingrese los datos del producto para su publicación</h4>
        <div class="form-container my-5 mx-5">
            <form class="form-group">
                <input type="text" id="input_name" class="form-control my-2" placeholder="Nombre" />
                <input type="text" id="input_description" class="form-control my-2" placeholder="Descripcion" />
                <input type="number" id="input_price" class="form-control my-2" placeholder="Precio" />
                <div class="custom-file text-start">
                    <input type="file" class="custom-file-input" id="customFileLang" lang="es">
                </div>
                <button id="btn_addproducts" class="btn btn-primary my-4">Publicar</button>
            </form>

        </div>
      </div>
    </div>
    <div class="tab-2">
      <label for="tab2-2">Mis Deliverys</label>
      <input id="tab2-2" name="tabs-two" type="radio">
      <div>
        <h4>Administrar delivery</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div> `; /*TEST*** <img src="/IMG_DB/store_uco.jpg" alt=""> */
}
export {menuStore}; 