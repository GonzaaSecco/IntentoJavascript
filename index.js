import { Producto } from "./ap/classProducto.js";
import { eventoAgregarProducto, eventoCategoria, eventoInput, generarCards, getRequest } from "./ap/funciones.js";
import {arrayProductos ,btnsCategoria, } from "./ap/variables.js";


//programa
//variables globales
document.addEventListener("DOMContentLoaded", async () => {
    await getRequest()
    getRequest()
    generarCards(arrayProductos)
    eventoInput()//arrayProductos)
    eventoCategoria()
    //eventoSelect(arrayProductos)
    console.log(arrayProductos)


})
