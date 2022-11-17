import { generarCards , eventoAgregarProducto } from "./funciones.js"

let categoria = localStorage.getItem("categoria");
let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || []


let busqueda;
switch (categoria) {
    case "remeras":
        busqueda = arrayProductos.filter( el  => el.categoria == "remeras")
        console.log(busqueda)
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "short":
        busqueda = arrayProductos.filter( el  => el.categoria == "short")
        console.log(busqueda)
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
        case "camperas":
        busqueda = arrayProductos.filter( el  => el.categoria == "camperas")
        console.log(busqueda)
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)
    
}