const header = document.getElementById('header');

let menuProfileStore = () => {
    return header.innerHTML += `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="index.html">
                    <img src="/assets/monolith-pedidosya.svg" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html"><i class="fa fa-sm fa-home"></i> Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="nav_carrito" href="shopping-cart.html"><i class="fa fa-sm fa-shopping-cart"></i> MiCarrito (<span id="carrito_numero">0</span>)</a></li>
                        <li class="nav-item"><a class="nav-link" id="nav_demo" href="#!"><i class="fa fa-sm fa-user"></i></a></li>
                        <li class="nav-item"><a class="nav-link" id="nav_salir" href="index.html" onclick="menuSalir();"><i class="fa fa-sm fa-power-off"></i> Salir</a></li>
                    </ul>
                </div>
            </div>
        </nav> `; 
}
export {menuProfileStore}; 