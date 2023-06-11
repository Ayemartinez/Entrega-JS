// // TERCERA PRE ENTREGA
// Modificación del HTML por medio del DOM desde JS
// Interacción con el usuario también por medio del DOM. 
// NO SE PUEDEN USAR: prompts ni alerts. 
// Toda la interacción con el usuario debe ser por medio del DOM.
// Utilizar eventos
// Utilización del storage: envío/almacenamiento de datos 
// y recuperación de los mismos, visualizando esos datos recuperados 
// en alguna parte de la página AL REFRESCARLA.

// Hola Aye,

// Gracias por haber enviado la entrega 🙌🏻 Para la misma se espera que incorporen
// Interacción con el DOM sin uso de prompts ni alerts/console.logs ⏳
// Eventos ✅
// Utilizar storage con JSON, mandando datos que cambien en tiempo de ejecución al storage y trayéndolos de vuelta visualizándose en alguna parte del programa. ⏳

// La estructura del trabajo está muy bien!
// Se toman los eventos click mostrando las descripciones de cada moto, y se toman bien los datos del form con submit.

// Observaciones y sugerencias

// Recordá que esto es considerado mala práctica
// <button id="descripcion" onclick="descripcionYamaha()">Ver descripción</button>

// Las funciones de los eventos deben ser definidas en el JS.
// let boton = document.getElementById("descripcion")
// boton.eventListener("click", () => descripcionYamaha() )

// Cada card de los productos debe ser definida en el JS, generándose dinámicamente recorriendo un array, crear los elementos HTML y agregarlos al contenedor en el HTML. Esto lo hemos visto en clase y en los afters, recomendaría que vuelvas a darles una repasada para poder llegar tranquila a la entrega final.

// Faltan items que ya venían definidos en entregas anteriores, como el uso de objetos y arrays.

// Cualquier duda al respecto recordá que tienen a disposición Coderask chat, todos los días a excepción de los domingos, donde responden en el momento sus dudas. Aprovechá ese espacio!

// El trabajo que aprobado! Para la entrega final todavía queda un largo camino para que pueda llegar a un 7. Como dije, fijate si podés ver el último after que dio el profe sobre esta entrega!

const tituloElemento = document.getElementById("titulo");
tituloElemento.textContent = "Venta de motos en Mendoza";

function descripcionYamaha() {
    const lineaElemento = document.createElement("p");
    const texto = document.createTextNode("Moto de calle de 125cc");
    lineaElemento.appendChild(texto);
    const contenedor = document.getElementById("contenedor");
    contenedor.appendChild(lineaElemento);
}
function descripcionHonda() {
    const lineaElemento = document.createElement("p");
    const texto = document.createTextNode("Moto de calle de 250cc");
    lineaElemento.appendChild(texto);
    const contenedor = document.getElementById("contenedor2");
    contenedor.appendChild(lineaElemento);
}
function descripcionBajaj() {
    const lineaElemento = document.createElement("p");
    const texto = document.createTextNode("Moto doble proposito de 400cc");
    lineaElemento.appendChild(texto);
    const contenedor = document.getElementById("contenedor3");
    contenedor.appendChild(lineaElemento);
}
function descripcionKtm() {
    const lineaElemento = document.createElement("p");
    const texto = document.createTextNode("Moto doble proposito de 1290cc");
    lineaElemento.appendChild(texto);
    const contenedor = document.getElementById("contenedor4");
    contenedor.appendChild(lineaElemento);
}
const formulario = document.getElementById("formularioPrueba");

    formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario enviado");
    });

    localStorage.setItem("yamaha", "$980.000");
    localStorage.setItem("honda", "$1.350.000");
    localStorage.setItem("dominar", "$2.100.000");
    localStorage.setItem("adventure", "usd45.000");

    const yamaha = localStorage.getItem("yamaha");
    console.log("Yamaha: ", yamaha);

    const honda = localStorage.getItem("honda");
    console.log("Honda: ", honda);

    const dominar = localStorage.getItem("dominar");
    console.log("Dominar: ", yamaha)

    const adventure = localStorage.getItem("adventure");
    console.log("Adventure: ", yamaha)