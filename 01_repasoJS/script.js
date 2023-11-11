console.log("HOLA");



function hablar(cita) {
    alert(cita);
}

function crearBoton(cita, nombre) {
    /* Seleccionamos el body */
    const body = document.querySelector("body")
    /* Creamos el boton */
    const boton = `<button onclick="hablar('${cita}')">${nombre}</button>`
    /* Insertamos el boton en el body */
    body.insertAdjacentHTML("afterbegin", boton)    
}

window.onload = () => {
    crearBoton("ganar en dolares","que tengo que hacer?")
}

