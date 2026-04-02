//get the button
const formularioDatos = document.getElementById("contact-form")


//paragraph for error message
let mensajeErrorNombre = document.getElementById("name-error-message")
let mensajeErrorCorreo = document.getElementById("email-error-message")
let mensajeErrorMensaje = document.getElementById("message-error-message")

//paragraph success message
let mensajeExito = document.getElementById("success-message")

//add the event listener
formularioDatos.addEventListener("submit", (e) => {
    e.preventDefault()
    //flags to check the form status
    let nombreAprobado = false
    let correoAprobado = false
    let mensajeAprobado = false
    //get the form data
    let nombreIngresado = document.querySelector("#nombre").value
    let correoIngresado = document.querySelector("#email").value
    let mensajeIngresado = document.querySelector("#mensaje").value
    //check the data requeriments

    //check the name requeriments
    if(nombreIngresado.length > 0){
        nombreAprobado = true
        mensajeErrorNombre.style.display = "none"
    }

    else {
        mensajeErrorNombre.style.display = "block"
        mensajeErrorNombre.textContent = "El campo del nombre debe tener contenido!"
    }

    //check the email requeriments
    if(correoIngresado.includes('@') && correoIngresado.includes('.')){
        correoAprobado = true
        mensajeErrorCorreo.style.display = "none"
    }

    else {
        mensajeErrorCorreo.style.display = "block"
        mensajeErrorCorreo.textContent = "El campo del correo electronico debe tener un caracter '@' y '.'" 
    }

    //check the message requeriments
    if(mensajeIngresado.length >= 10){
        mensajeAprobado = true
        mensajeErrorMensaje.style.display = "none"
    }

    else {
        mensajeErrorMensaje.style.display = "block"
        mensajeErrorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres!"
    }


    //Success message
    if(nombreAprobado && correoAprobado && mensajeAprobado){
        mensajeExito.textContent = "Formulario enviado con exito!"
    }
})