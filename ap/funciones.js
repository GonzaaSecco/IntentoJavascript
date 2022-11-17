import { Producto } from "./classProducto.js";
import { arrayCarrito, arrayProductos ,btnsCategoria , input ,sectionProductos } from "./variables.js"

//Funciones

export const getRequest = async () =>{
    let req = await fetch("./ap/productos.json")
    
    let response =  await req.json() 

    for (const el of response){
    arrayProductos.push(el)
    }
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
}

//para trabajar con metodos vamos a la documentacion ofical vamos a usar mucho
//metodo fan para buscar metodos especificos

export const generarCards = (array) =>{
    console.log(array)
    array.forEach(element => {
        let{nombre, precio, id, img , categoria,stock} = element    //aca abajo va a ir template para cada tarjeta
        sectionProductos.innerHTML +=` 
                                    
                                    <div class="card">
                                    <img src=".${img}" alt="">
                                        <h3> ${nombre}</h3>
                                        <span class="precio">Precio: ${precio}</span> 
                                        <span class="stock">Stock: ${stock}</span>
                                        <span class="categoria">Categoria: ${categoria}</span>                     
                                        <button class="btn-agregar" data-id=${id}>Agregar Al Carrito</button>
                                    </div>
    `    
    eventoAgregarProducto()

    });
}


//empezar con los eventos
export const eventoAgregarProducto = (busqueda) => {
    let btns = document.querySelectorAll(".btn-agregar")
    

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            let id = event.target.attributes[1].value;
            let existe = arrayCarrito.findIndex( el => el.id == id)
            
            if(existe != -1) {
                //si existe le sumamos 1 a cantidad 
                let producto = arrayCarrito [existe]
                //producto.sumarCantidad();
                producto.cantidad ++
                console.log(arrayCarrito);
            } else{
                //instanciar la clase
            let resultado = arrayProductos.find( el => el.id == id)
            let producto = new Producto(resultado.nombre, resultado.precio, resultado.img, resultado.stock, resultado.categoria)
            arrayCarrito.push(producto);
            }
            Swal.fire(
                'Producto agregado con exito!',
                'selecione ok para continuar!',
                'success'
            )
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        })
    }
}


export const eventoInput = () =>
input.addEventListener("input", (event) => {
    //console.log(event.target.value)
    sectionProductos.innerHTML = ""
    //let string = event.target.value.toLowerCase()
    let resultado = arrayProductos.filter( el => el.nombre.includes(event.target.value));
    if(resultado.length > 0){
        generarCards(resultado)
    } else{
        sectionProductos.innerHTML =  `<h3> No se Encontro </h3>  `    
    }
    
})

export const eventoCategoria = () =>{
for (const btn of btnsCategoria) {
    btn.addEventListener("click", (event) => {
    event.preventDefault()
    let categoria = event.target.textContent.toLowerCase()
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
    localStorage.setItem("categoria", categoria)
    window.location = "./Paginas/productos.html"
        })
    }
}

export const eventoSelect = (data) => {
    let select = document.querySelector("#select")
    select.addEventListener("change", (event) => {
        if (event.target.value == "todos") {
            generarCards(data)
        }else{
            console.dir(event.target.value);
    
            let busqueda = data.filter(el => el.categoria.includes(event.target.value))
            console.log(busqueda);
            generarCards(busqueda)

            // arrayProductos = []
            // arrayProductos = busqueda
            
            // console.log(arrayProductos);
        }
    })
}

