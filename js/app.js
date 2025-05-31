// importa una clase desde una direccion de archivo
import Producto from "./classProducto.js"

// ABRIR FORMULARIO PARA LLENAR
function abrirModalProducto(){
    console.log('en crear producto')
    const modalCrearProducto = new bootstrap.Modal(document.getElementById('modalCrearProducto'));
    // limpiarFormulario()
    modalCrearProducto.show();
    creandoProducto = true;
}

// paso 2: CREATE
function crearProducto() {
    //1- traer todos los datos del formulario validados

    //2- crear objeto producto
    const nuevoProducto = new Producto(inputCategoria.value, inputMarca.value,  inputModelo.value, inputDescripcion.value, inputColor.value, inputTalle.value, inputPrecio.value, inputImagen.value)

    console.log(nuevoProducto)

    //3- almacenar el objeto en el array de ecommerce
    ecommerce.push(nuevoProducto)
    console.log(ecommerce)

    //4-guardar en local storage
    guardarEnLocalStorage()

    //5- limpiar formulario
    limpiarFormulario()

    //6- dibujar fila en la tabla
    dibujarFila(nuevoProducto, ecommerce.length)

    // mostrar el mensaje al usuario que se agregó producto correctamente
    // Swal.fire({
    //     title: "Pelicula Creada!",
    //     text: `El Pelicula fue creada correctamente!`,
    //     icon: "success"
    // });
}

//guardar en LOCALSTORAGE
function guardarEnLocalStorage() {
    localStorage.setItem('ecommerceKey', JSON.stringify(ecommerce))
}

//limpiar formulario
function limpiarFormulario() {
    formularioCrearProducto.reset()
}

//dibujar la tabla con los productos del array ecommerce
function dibujarFila(producto, index) {
    console.log('en dibujar tabla')
    console.log(producto)
    tablaProductos.innerHTML += `
                    <tr>
                        <th scope="row">${index}</th>
                        <td>${producto.marca}</td>
                        <td>${producto.modelo}</td>
                        <td>${producto.talle}</td>
                        <td>${producto.precio}</td>
                        <td class="d-flex flex-nowrap gap-1">
                            <button class="btn btn-warning" onclick="prepararProducto('${producto.id}')">
                                <i class="bi bi-pen"></i>
                            </button>
                            <button class="btn btn-danger" onclick="eliminarProducto('${producto.id}')" >
                                <i class="bi bi-trash"></i>
                            </button>
                            <button class="btn btn-info" onclick="verProducto('${producto.id}')"><i class="bi bi-eye"></i></button>
                        </td>
                    </tr>`
}


// READ
function cargaDatosEcommerce() {
    //1- verificar en localstorage xa mostrar en la tabla
    if (ecommerce.length !== 0) {
        //2- dibujar cada fila con sus datos
        ecommerce.map(((producto, index) => dibujarFila(producto, index + 1)))
    } else {
        Swal.fire({
            title: "Ecommerce Vacío!",
            text: `No hay productos almacenados.`,
            icon: "danger"
        });
    }
}





//==== EVENTOS =======
const btnAgregarProducto = document.getElementById('btnAgregar')
const formularioCrearProducto = document.querySelector('form');

// crea array productos
const ecommerce = JSON.parse(localStorage.getItem('ecommerceKey')) || [];
console.log(ecommerce)

// valores el input xa crear producto
const inputCategoria = document.querySelector('#categoria')
const inputMarca = document.querySelector('#marca')
const inputModelo = document.querySelector('#modelo')
const inputDescripcion = document.querySelector('#descripcion')
const inputColor = document.querySelector('#color')
const inputTalle = document.querySelector('#talle')
const inputPrecio = document.querySelector('#precio')
const inputImagen = document.querySelector('#imagen')

const tablaProductos = document.getElementById('tablaProductos')
let creandoProducto = true; // true=submit crea  false=para editar
let idProducto = null; //vacio


btnAgregarProducto.addEventListener('click', abrirModalProducto);
formularioCrearProducto.addEventListener('submit',(e) => {
     e.preventDefault();
      if (creandoProducto) {
        crearProducto()
      }else{
        // modificar producto
      }  
})

//carga datos en pantalla si existen en el localstorage
cargaDatosEcommerce()