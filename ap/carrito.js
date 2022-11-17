import { Producto } from "./classProducto.js"
import { arrayCarrito } from "./variables.js";

const ArrayCarrito = [];
const divProductos = document.querySelector("#carrito")
//agregada


const total = () => {
     //logica
        let resultado = arrayCarrito.reduce( (acc, el) => acc + Number(el.precio) * Number(el.cantidad), 0 )
        let h2 = document.createElement("h2");
        h2.textContent = resultado;
        document.querySelector("#carrito").appendChild(h2)

}


const sumarCantidad = () => {
    let btns = document.querySelectorAll(".sumarCantidad");

    for (const btn of btns){
        btn.addEventListener("click", (event) => {
            //console.log(event.target.parentNode.id)
            let busqueda = arrayCarrito.findIndex(el => el.id == event.target.parentNode.id)
            //busqueda.sumarCantidad()
            console.log(busqueda);
            arrayCarrito[busqueda].sumarCantidad()
            console.log(arrayCarrito);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            
            generarHtml(JSON.parse(localStorage.getItem("carrito")))
            

        })
    }
}



/*const restarCantidad = () => {
    let btns = document.querySelectorAll(".restarCantidad")
    
    for (const btn of btns){
        btn.addEventListener("click",(event) => {
        console.log(event.target.parentNode.id);
        let id = event.target.parentNode.id;
        let busqueda = arrayCarrito.findIndex( el => el.id == id);
        console.log(busqueda);
        arrayCarrito[busqueda].restarCantidad()
        if (arrayCarrito[busqueda].cantidad == 0 ){

            let div = event.target.parentNode
            eliminar(busqueda, div)
        }
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        generarHtml(JSON.parse(localStorage.getItem("carrito")))
        console.log(arrayCarrito);
        
    })
    }
}*/

const eliminar = (indice, elemento) => {
    arrayCarrito.splice(indice,1)
    elemento.remove()
    console.log(arrayCarrito);
}

const btnEliminar = () =>{
    let btns = document.querySelectorAll(".eliminar")
    for (const btn of btns) {
        btn.addEventListener("click", (event) =>{
            console.log("click")
            let id = event.target.parentNode.id;
            let busqueda = arrayCarrito.findIndex( el => el.id == id);
            let div = event.target.parentNode
            eliminar(busqueda, div)
        })
        
    }
}



const generarHtml = (array) => {
    divProductos.innerHTML= ""
    array.map( el => {
        divProductos.innerHTML +=`
                            <div class="item-carrito" id${el.id}>
                            <img src=.${el.img}alt="">
                            <h3>${el.nombre}</h3>
                            <span>cantidad ${el.cantidad}</span>
                            <span>$${el.precio}</span>
                            
                            <button class="eliminar">X</button>
                        </div>
        `
        //sumarCantidad()
        //restarCantidad()
        btnEliminar()
        
})
}



document.addEventListener("DOMContentLoaded", () => {
    for (const item of JSON.parse(localStorage.getItem("carrito"))) {
        let producto = new Producto(item.nombre, item.precio, item.img, item.id ,item.categoria, item.stock, item.cantidad)
        ArrayCarrito.push(producto);
        console.log(ArrayCarrito);
    }
    total()
    generarHtml(arrayCarrito)
   //sumarCantidad()
})
