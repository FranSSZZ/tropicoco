document.addEventListener('DOMContentLoaded', () => {

    // Variables
    
    const verdura = [
        {
            id: 1,
            imagen: "/imagenes/img.verduras/ajos.png",
            nombre: "Ajo",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 2,
            imagen: "/imagenes/img.verduras/alcachofas.png",
            nombre: "Alcachofa",
            precio: 2.75,
            cantidad: 50
        },
        {
            id: 3,
            imagen: "/imagenes/img.verduras/apios.png",
            nombre: "Apio",
            precio: 1,
            cantidad: 50
        },
        {
            id: 4,
            imagen: "/imagenes/img.verduras/berenjenas.png",
            nombre: "Berenjena",
            precio: 1.50,
            cantidad: 50
        },
        {
            id: 5,
            imagen: "/imagenes/img.verduras/brocolis.png",
            nombre: "Brocoli",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 6,
            imagen: "/imagenes/img.verduras/calabacin.png",
            nombre: "Calabacin",
            precio: 2.75,
            cantidad: 50
        },
        {
            id: 7,
            imagen: "/imagenes/img.verduras/calabaza.png",
            nombre: "Calabaza",
            precio: 1,
            cantidad: 50
        },
        {
            id: 8,
            imagen: "/imagenes/img.verduras/cebollas.png",
            nombre: "Cebolla",
            precio: 1.50,
            cantidad: 50
        },
        {
            id: 9,
            imagen: "/imagenes/img.verduras/coliflor.png",
            nombre: "Coliflor",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 10,
            imagen: "/imagenes/img.verduras/espinacas.png",
            nombre: "Espinaca",
            precio: 2.75,
            cantidad: 50
        },
        {
            id: 11,
            imagen: "/imagenes/img.verduras/guisantes.png",
            nombre: "Guisante",
            precio: 1,
            cantidad: 50
        },
        {
            id: 12,
            imagen: "/imagenes/img.verduras/habas.png",
            nombre: "Haba",
            precio: 1.50,
            cantidad: 50
        },
    ];
    const fruta = [
        
        {
            id: 13,
            imagen: "/imagenes/img.frutas/cerezas.png",
            nombre: "Cereza",
            precio: 1,
            cantidad: 50
        },
        {
            id: 14,
            imagen: "/imagenes/img.frutas/granada.png",
            nombre: "Granada",
            precio: 1.50,
            cantidad: 50
        },
        {
            id: 15,
            imagen: "/imagenes/img.frutas/higos.png",
            nombre: "Higo",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 16,
            imagen: "/imagenes/img.frutas/limones.png",
            nombre: "Limones",
            precio: 2.75,
            cantidad: 50
        },
        {
            id: 17,
            imagen: "/imagenes/img.frutas/manzana.png",
            nombre: "Manzana",
            precio: 1,
            cantidad: 50
        },
        {
            id: 18,
            imagen: "/imagenes/img.frutas/melocotones.png",
            nombre: "Melocoton",
            precio: 1.50,
            cantidad: 50
        },
        {
            id: 19,
            imagen: "/imagenes/img.frutas/naranjas.png",
            nombre: "Naranja",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 20,
            imagen: "/imagenes/img.frutas/melones.png",
            nombre: "melon",
            precio: 2.75,
            cantidad: 50
        },
        {
            id: 21,
            imagen: "/imagenes/img.frutas/papayas.png",
            nombre: "Papaya",
            precio: 1,
            cantidad: 50
        },
        {
            id: 22,
            imagen: "/imagenes/img.frutas/peras.png",
            nombre: "Pera",
            precio: 1.50,
            cantidad: 50
        },
        {
            id: 23,
            imagen: "/imagenes/img.frutas/platano.png",
            nombre: "Platano",
            precio: 1.75,
            cantidad: 50
        },
        {
            id: 24,
            imagen: "/imagenes/img.frutas/sandias.png",
            nombre: "Sandia",
            precio: 2.75,
            cantidad: 50
        }
    ];
    const batido=[

    ];
    const baseDeDatos = [].concat(verdura,fruta,batido);
    console.log(baseDeDatos);

    let carrito = [];
    const divisa = '€';
    const DOMverdura = document.querySelector('.verdura');
    const DOMfruta = document.querySelector('.fruta');
    const DOMbatido = document.querySelector('.batido');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        verdura.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn','my-button', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMverdura.appendChild(miNodo);
        });
    }

    function renderizarFruta() {
        fruta.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn','my-button', 'btn-primary');
            miNodoBoton.textContent = 'Añadir';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMfruta.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn','btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarFruta();
    renderizarCarrito();
});