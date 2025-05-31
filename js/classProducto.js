export default class Producto {
    #id;
    #categoria;
    #marca;
    #modelo;
    #descripcion;
    #color;
    #talle;
    #precio;
    #imagen;
    constructor(categoria, marca, modelo, descripcion, color, talle, precio, imagen) {
        this.#id = crypto.randomUUID();
        this.#categoria = categoria;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#descripcion = descripcion;
        this.#color = color;
        this.#talle = talle;
        this.#precio = precio;
        this.#imagen = imagen;
    }

    // Getters

    get id() {
        return this.#id;
    }

    get categoria() {
        return this.#categoria;
    }

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get color() {
        return this.#color;
    }

    get talle() {
        return this.#talle;
    }

    get precio() {
        return this.#precio;
    }

    get imagen() {
        return this.#imagen;
    }

    // Setters

    set categoria(nuevaCategoria) {
        this.#categoria = nuevaCategoria;
    }

    set marca(nuevaMarca) {
        this.#marca = nuevaMarca;
    }

    set modelo(nuevoModelo) {
        this.#modelo = nuevoModelo;
    }

    set descripcion(nuevaDescripcion) {
        this.#descripcion = nuevaDescripcion;
    }

    set color(nuevoColor) {
        this.#color = nuevoColor;
    }

    set talle(nuevoTalle) {
        this.#talle = nuevoTalle;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }

    set imagen(nuevaImagen) {
        this.#imagen = nuevaImagen;
    }
    //metodo para stringify para propiedades privadas
    toJSON() {
        return {
            id: this.#id,
            categoria: this.#categoria,
            marca: this.#marca,
            modelo: this.#modelo,
            descripcion: this.#descripcion,
            color: this.#color,
            talle: this.#talle,
            precio: this.#precio,
            imagen: this.#imagen
        }
    }
}