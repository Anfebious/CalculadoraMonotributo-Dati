
function calcularIngBrutos() {
    let ingBruto = document.getElementById("ingresosBrutos").value;
    (verificarNumero(ingBruto)) ? ingBruto = ingBruto : ingBruto = 0
    let resultadoIngBrutos = ""
    if (ingBruto <= categorias.categoriaA.ingBrutos) {
        resultadoIngBrutos = "Categoria A"
    } else if (ingBruto <= categorias.categoriaB.ingBrutos) {
        resultadoIngBrutos = "Categoria B"
    } else if (ingBruto <= categorias.categoriaC.ingBrutos) {
        resultadoIngBrutos = "Categoria C"
    } else if (ingBruto <= categorias.categoriaD.ingBrutos) {
        resultadoIngBrutos = "Categoria D"
    } else if (ingBruto <= categorias.categoriaE.ingBrutos) {
        resultadoIngBrutos = "Categoria E"
    } else if (ingBruto <= categorias.categoriaF.ingBrutos) {
        resultadoIngBrutos = "Categoria F"
    } else if (ingBruto <= categorias.categoriaG.ingBrutos) {
        resultadoIngBrutos = "Categoria G"
    } else if (ingBruto <= categorias.categoriaH.ingBrutos) {
        resultadoIngBrutos = "Categoria H"
    } else if (ingBruto <= categorias.categoriaI.ingBrutos) {
        resultadoIngBrutos = "Categoria I"
    } else if (ingBruto <= categorias.categoriaJ.ingBrutos) {
        resultadoIngBrutos = "Categoria J"
    } else if (ingBruto <= categorias.categoriaK.ingBrutos) {
        resultadoIngBrutos = "Categoria K"
    } else {
        resultadoIngBrutos = "Regimen general - IVA"
    }
    console.log(ingBruto)
    return resultadoIngBrutos
}

function calcularSupAfectada() {
    let supAfectada = document.getElementById("superficieAfectada").value;
    (verificarNumero(supAfectada)) ? supAfectada = supAfectada : supAfectada = 0
    let resultadoSupAfectada = ""
    if (supAfectada <= categorias.categoriaA.supAfectada) {
        resultadoSupAfectada = "Categoria A"
    } else if (supAfectada <= categorias.categoriaB.supAfectada) {
        resultadoSupAfectada = "Categoria B"
    } else if (supAfectada <= categorias.categoriaC.supAfectada) {
        resultadoSupAfectada = "Categoria C"
    } else if (supAfectada <= categorias.categoriaD.supAfectada) {
        resultadoSupAfectada = "Categoria D"
    } else if (supAfectada <= categorias.categoriaE.supAfectada) {
        resultadoSupAfectada = "Categoria E"
    } else if (supAfectada <= categorias.categoriaF.supAfectada) {
        resultadoSupAfectada = "Categoria F"
    } else if (supAfectada <= categorias.categoriaG.supAfectada) {
        resultadoSupAfectada = "Categoria G"
    } else if (supAfectada <= categorias.categoriaH.supAfectada) {
        resultadoSupAfectada = "Categoria H"
    } else if (supAfectada <= categorias.categoriaI.supAfectada) {
        resultadoSupAfectada = "Categoria I"
    } else if (supAfectada <= categorias.categoriaJ.supAfectada) {
        resultadoSupAfectada = "Categoria J"
    } else if (supAfectada <= categorias.categoriaK.supAfectada) {
        resultadoSupAfectada = "Categoria K"
    } else {
        resultadoSupAfectada = "Regimen general - IVA"
    }
    return resultadoSupAfectada
}

function calcularEnergiaConsumida() {
    let energiaConsumida = document.getElementById("energiaConsumida").value;
    (verificarNumero(energiaConsumida)) ? energiaConsumida = energiaConsumida : energiaConsumida = 0
    let resultadoEnergiaConsumida = ""
    if (energiaConsumida <= categorias.categoriaA.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria A"
    } else if (energiaConsumida <= categorias.categoriaB.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria B"
    } else if (energiaConsumida <= categorias.categoriaC.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria C"
    } else if (energiaConsumida <= categorias.categoriaD.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria D"
    } else if (energiaConsumida <= categorias.categoriaE.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria E"
    } else if (energiaConsumida <= categorias.categoriaF.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria F"
    } else if (energiaConsumida <= categorias.categoriaG.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria G"
    } else if (energiaConsumida <= categorias.categoriaH.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria H"
    } else if (energiaConsumida <= categorias.categoriaI.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria I"
    } else if (energiaConsumida <= categorias.categoriaJ.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria J"
    } else if (energiaConsumida <= categorias.categoriaK.energiaConsumida) {
        resultadoEnergiaConsumida = "Categoria K"
    } else {
        resultadoEnergiaConsumida = "Regimen general - IVA"
    }
    return resultadoEnergiaConsumida
}

function calcularAlquileresDevengados() {
    let alquileresDevengados = document.getElementById("alquileresDevengados").value;
    (verificarNumero(alquileresDevengados)) ? alquileresDevengados = alquileresDevengados : alquileresDevengados = 0
    let resultadoAlquileresDevengados = ""
    if (alquileresDevengados <= categorias.categoriaA.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria A"
    } else if (alquileresDevengados <= categorias.categoriaB.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria B"
    } else if (alquileresDevengados <= categorias.categoriaC.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria C"
    } else if (alquileresDevengados <= categorias.categoriaD.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria D"
    } else if (alquileresDevengados <= categorias.categoriaE.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria E"
    } else if (alquileresDevengados <= categorias.categoriaF.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria F"
    } else if (alquileresDevengados <= categorias.categoriaG.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria G"
    } else if (alquileresDevengados <= categorias.categoriaH.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria H"
    } else if (alquileresDevengados <= categorias.categoriaI.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria I"
    } else if (alquileresDevengados <= categorias.categoriaJ.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria J"
    } else if (alquileresDevengados <= categorias.categoriaK.alquileresDevengados) {
        resultadoAlquileresDevengados = "Categoria K"
    } else {
        resultadoAlquileresDevengados = "Regimen general - IVA"
    }
    return resultadoAlquileresDevengados
}

function verificarNumero(input){
    return (!isNaN(input) && input != "")
}

function Persona(nombre, resultadoIngBrutos, resultadoSupAfectada, resultadoEnergiaConsumida, resultadoAlquileresDevengados) {
    this.nombre = nombre
    this.resultadoIngBrutos = resultadoIngBrutos
    this.resultadoSupAfectada = resultadoSupAfectada
    this.resultadoEnergiaConsumida = resultadoEnergiaConsumida
    this.resultadoAlquileresDevengados = resultadoAlquileresDevengados
    this.resultadoCategoriaMaxima = ""
    this.setResultadoCategoriaMaxima = function (categoria) {
        this.resultadoCategoriaMaxima = categoria
    }
}

function filtrarPorCategoria() {
    let contenido = ""
    let categoria = document.getElementById("filtroCategorias").value
    let clave = ""
    let filtrarPorCategoria = []
    for (let i = 0; i < localStorage.length; i++) {
        clave = localStorage.key(i)
        filtrarPorCategoria.push(JSON.parse(localStorage.getItem(clave)))
    }
    filtrarPorCategoria = filtrarPorCategoria.filter((persona) => persona.resultadoCategoriaMaxima == categoria)
    contenido = "<div>"
    for (i = 0; i < filtrarPorCategoria.length; i++) {
        contenido += "<p>" + filtrarPorCategoria[i].nombre + "</p>"
    }
    contenido += "</div>"
    mostrarFiltradoDeCategorias(categoria, contenido)
}

function calcularCategoriaMaxima() {
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let resultadoIngBrutos = calcularIngBrutos();
    let resultadoSupAfectada = calcularSupAfectada();
    let resultadoEnergiaConsumida = calcularEnergiaConsumida();
    let resultadoAlquileresDevengados = calcularAlquileresDevengados();
    persona = new Persona(nombreUsuario, resultadoIngBrutos, resultadoSupAfectada, resultadoEnergiaConsumida, resultadoAlquileresDevengados);
    let categoriaMaxima = "";
    if (resultadoIngBrutos >= categoriaMaxima) {
        categoriaMaxima = resultadoIngBrutos
    }
    if (resultadoSupAfectada >= categoriaMaxima) {
        categoriaMaxima = resultadoSupAfectada
    }
    if (resultadoEnergiaConsumida >= categoriaMaxima) {
        categoriaMaxima = resultadoEnergiaConsumida
    }
    if (resultadoAlquileresDevengados >= categoriaMaxima) {
        categoriaMaxima = resultadoAlquileresDevengados
    }
    persona.setResultadoCategoriaMaxima(categoriaMaxima)
    mostrarResultadoCategoria("Categoria Maxima", "El resultado de la categoria maxima para " + nombreUsuario + " es: " + categoriaMaxima)
    localStorage.setItem(nombreUsuario, JSON.stringify(persona))
}

function mostrarResultadoCategoria(titulo, texto) {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: "info",
        confirmButtonText: "OK",
    })
}

function mostrarFiltradoDeCategorias(categoria, contenido){
    Swal.fire({
        title: "Usuarios con: " + categoria,
        html: contenido,
        icon: "info",
        confirmButtonText: "OK",
    });
}

let categorias = null

fetch('./categoriasMonotributo.json')
    .then( (response) => response.json())
    .then( (data) => {
        categorias = data
    })
    .catch( (error) => {
        console.log("Fetch error: " + error)
    })

const lista = document.querySelector('#listado')

let form = document.getElementById("calculadoraForm")

form.addEventListener("submit", function (event) {
    event.preventDefault()
})

let boton = document.getElementById("botonCategoriaMaxima")

boton.addEventListener("click", calcularCategoriaMaxima)

let boton2 = document.getElementById("filtrarCategorias")

boton2.addEventListener("click", filtrarPorCategoria)

localStorage.clear()