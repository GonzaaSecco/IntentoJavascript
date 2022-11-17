export class Producto {   //estrucutra de producto
    constructor(nombre, precio , img, id, categoria,cantidad,){
        this.nombre = nombre,
        this.precio = precio,
        this.img = img,
        this.id = id,
        this.categoria = categoria,
        this.cantidad = 1
    }

    //metodos sumarCantidad
/*
    sumarCantidad() {  //cada vez que se ejecute este metodo la cantidad de va a incrementar en 1 
        if (  Number(  this.cantidad) < Number( this.stock)) {
            return this.cantidad++
        }else{
            return this.cantidad
        }
}

restarCantidad(){
    // return this.cantidad -- 
    if (this.cantidad < 0) {
        return this.cantidad 
    }else{
        return this.cantidad --
    }
}
*/
}
