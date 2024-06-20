const productos = [
    {id: 1, nombre: "Camiseta Titular de Independiente", precio: 20750, imagen: "image/imagen1.jpg"},
    {id: 2, nombre: "Camiseta Suplente de Independiente", precio: 18568, imagen:"image/imagen2.png"},
    {id: 3, nombre: "short de Independiente", precio: 18875, imagen: "image/imagen3.jpeg"},
    {id: 4, nombre: "Campera de Independiente", precio: 14356, imagen: "image/imagen4.jpeg"},
    {id: 5, nombre: "Camiseta Titular de la Selección Argentina", precio: 45175, imagen: "image/imagen5.webp"},
    {id: 6, nombre: "Camiseta Suplente de la Selección Argentina", precio: 48854, imagen: "image/imagen6.webp"},
    {id: 7, nombre: "Botines para Cancha de 11", precio: 38865, imagen:"image/imagen7.jpg"},
    {id: 8, nombre: "Botines para Cancha de 5", precio: 25875, imagen: "image/imagen8.webp"},
    {id: 9, nombre: "Short de la Selección Argentina", precio: 15764, imagen: "image/imagen9.webp"},
    {id: 10, nombre: "Campera de la Selección Argentina", precio: 28984, imagen: "image/imagen10.webp"}
]
let carrito = loadCarritoFromLocalStorage();
const error = document.getElementById('error');
error.style.color = 'red';
function mensajeDeError(productoid) {
    error.innerHTML = `<p>Producto ${productoid} no encontrado</p>`;
}
function addToCarrito(productoid, cantidad) {
    const producto = productos.find(p => p.id === productoid);
    if(!producto){
        mensajeDeError(productoid)
        return;
    }
    const carritoItem = carrito.find(item => item.id === productoid);
    if(carritoItem) {
        carritoItem.cantidad += cantidad;
        carritoItem.subTotal = carritoItem.cantidad * producto.precio;
    }
    else{
        carrito.push(
            {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: cantidad,
                subTotal: cantidad * producto.precio
            }
        )
    }
    saveCarritoToLocalStorage();
    renderCarrito();
}
function renderProductos(){
    const productoLista = document.getElementById('lista');
    productoLista.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
                    <img src= "${producto.imagen}" alt= "${producto.nombre}">
                    <h3>${producto.nombre}, Precio: $${producto.precio}</h3>
                    <button onclick="addToCarrito(${producto.id}, 1)">Agregar Producto</button>
        `;
        productoLista.appendChild(productoDiv);
    })
}
function renderCarrito(){
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carrito.forEach((item, index) => {
        const carritoItemDiv = document.createElement('div');
        carritoItemDiv.innerHTML = `
                   <img src= "${item.imagen}" alt= "${item.nombre}">
                   <h3>${item.nombre}, Cantidad: ${item.cantidad}, Precio Total: $${item.subTotal}</h3>
                   <button onclick="eliminarCarrito(${index})">Comprar/Finalizar compra</button>
        `;
        carritoDiv.appendChild(carritoItemDiv);
    })
}
function saveCarritoToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function loadCarritoFromLocalStorage() {
    const carritoData = localStorage.getItem('carrito');
    return carritoData ? JSON.parse(carritoData) :[];
}
function eliminarCarrito(index){
    carrito.splice(index, 1);
    saveCarritoToLocalStorage();
    renderCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    renderCarrito();
})