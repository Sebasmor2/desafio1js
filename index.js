let precio = 400000;


let cantidadSpan = document.querySelector("#cantidad");
let precioSpan = document.querySelector(".precio-inicial");
let totalSpan = document.querySelector(".valor-total");


precioSpan.innerHTML = precio;


function actualizarTotal() {
    let cantidad = Number(cantidadSpan.innerHTML);
    totalSpan.innerHTML = precio * cantidad;
}


document.querySelectorAll("button").forEach(boton => {
    boton.addEventListener("click", actualizarTotal);
});



