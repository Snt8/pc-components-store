let productosALaVenta = [
    {
        nombre: "rtx 5090",
        categoria: "tarjeta grafica",
        precio: 20000000,
    }, 

    {
        nombre: "amd ryzen 7 9800x3d",
        categoria: "procesador",
        precio: 1500000,
    }, 

    {
        nombre: "modulo memoria ram 32gb ddr5",
        categoria: "memoria ram",
        precio: 1500000,
    }, 

    {
        nombre: "rtx 5080",
        categoria: "tarjeta grafica",
        precio: 4500000,
    }, 

    {
        nombre: "intel core i9 14900k",
        categoria: "procesador",
        precio: 1700000 ,
    }, 

    {
        nombre: "modulo memoria ram 16gb ddr5",
        categoria: "memoria ram",
        precio: 1000000,
    }, 

    {
        nombre: "rtx 4090",
        categoria: "tarjeta grafica",
        precio: 14500000,
    }, 

    {
        nombre: "amd ryzen 5 5600x",
        categoria: "procesador",
        precio: 700000,
    }, 

        {
        nombre: "modulo memoria ram 8gb ddr5",
        categoria: "memoria ram",
        precio: 500000,
    }
]

//get the list
let listaElementos = document.getElementById("product-list")
let selectorCategoria = document.getElementById("filtro-categoria")
let botonFiltrarProducto = document.getElementById("boton-filtrar")

//show the elements into list
productosALaVenta.forEach((componente) => {
    let elementoProducto = document.createElement("li")
    elementoProducto.textContent = componente.nombre
    listaElementos.appendChild(elementoProducto)
})

botonFiltrarProducto.addEventListener("click", () => {
    //get the category selected
    let categoriaSeleccionada = selectorCategoria.value 
    //clear the HTML list
    listaElementos.innerHTML = ""

    //Check if the pick is every product
    if(categoriaSeleccionada === "todos"){
        //show every product
        productosALaVenta.forEach((componente) => {
            let elementoProducto = document.createElement("li")
            elementoProducto.textContent = componente.nombre
            listaElementos.appendChild(elementoProducto)
        })
    }

    else {
        //filter the products with the category was selected
        let productosFiltrados = productosALaVenta.filter((componente) => {
            return componente.categoria === categoriaSeleccionada
        })
        
        //create the loop for show the elements was filtered
        productosFiltrados.forEach((componenteListado) => {
            let elementoProducto = document.createElement("li")
            elementoProducto.textContent = componenteListado.nombre
            listaElementos.appendChild(elementoProducto)
        })
    }
})


