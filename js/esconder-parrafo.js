//get the paragraph
let parrafo = document.querySelector("#parrafo-ocultar")

//get the button element and declare a flag to check if the browser isn't showing the paragraph
const botonOcultarParrafo = document.getElementById("ocultar-parrafo")
let estaOculto = false

//define the event
botonOcultarParrafo.addEventListener("click", () => {
    if(!estaOculto){
        parrafo.style.display = "none"
        estaOculto = true
        console.log("Ocultado")
    }

    else {
        parrafo.style.display = "block"
        estaOculto = false
        console.log("Mostrando")
    }
})