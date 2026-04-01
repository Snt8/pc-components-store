//variables and constanst
let titulo = document.querySelector("h1")
const nuevoTitulo = "¡JavaScript en acción!"
const nuevoColor = "#325FF0"
const boton = document.getElementById("cambio-titulo-color")

//if user clicks the button
boton.addEventListener("click", () => {
    titulo.textContent = nuevoTitulo
    titulo.style.color = nuevoColor
})