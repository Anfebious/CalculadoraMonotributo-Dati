

function calcularIngBrutos() {
    let ingBruto = document.getElementById("ingresosBrutos").value;
    let resultadoIngBrutos = ""
    if (ingBruto <= 1414762.58) {
        resultadoIngBrutos = "Categoria A"
    } else if (ingBruto <= 2103025.45) {
        resultadoIngBrutos = "Categoria B"
    } else if (ingBruto <= 2944235.60) {
        resultadoIngBrutos = "Categoria C"
    } else if (ingBruto <= 3656604.33) {
        resultadoIngBrutos = "Categoria D"
    } else if (ingBruto <= 4305799.15) {
        resultadoIngBrutos = "Categoria E"
    } else if (ingBruto <= 5382248.94) {
        resultadoIngBrutos = "Categoria F"
    } else if (ingBruto <= 6458698.71) {
        resultadoIngBrutos = "Categoria G"
    } else if (ingBruto <= 7996484.12) {
        resultadoIngBrutos = "Categoria H"
    } else if (ingBruto <= 8949911.06) {
        resultadoIngBrutos = "Categoria I"
    } else if (ingBruto <= 10257028.68) {
        resultadoIngBrutos = "Categoria J"
    } else if (ingBruto <= 11379612.01) {
        resultadoIngBrutos = "Categoria K"
    } else {
        resultadoIngBrutos = "Regimen general - IVA"
    }
    return resultadoIngBrutos
}

function calcularSupAfectada() {
    let supAfectada = document.getElementById("superficieAfectada").value;
    let resultadoSupAfectada = ""
    if (supAfectada <= 30) {
        resultadoSupAfectada = "Categoria A"
    } else if (supAfectada <= 45) {
        resultadoSupAfectada = "Categoria B"
    } else if (supAfectada <= 60) {
        resultadoSupAfectada = "Categoria C"
    } else if (supAfectada <= 85) {
        resultadoSupAfectada = "Categoria D"
    } else if (supAfectada <= 110) {
        resultadoSupAfectada = "Categoria E"
    } else if (supAfectada <= 150) {
        resultadoSupAfectada = "Categoria F"
    } else if (supAfectada <= 200) {
        resultadoSupAfectada = "Categoria G"
    } else if (supAfectada <= 200) {
        resultadoSupAfectada = "Categoria H"
    } else if (supAfectada <= 200) {
        resultadoSupAfectada = "Categoria I"
    } else if (supAfectada <= 200) {
        resultadoSupAfectada = "Categoria J"
    } else if (supAfectada <= 200) {
        resultadoSupAfectada = "Categoria K"
    } else {
        resultadoSupAfectada = "Regimen general - IVA"
    }
    return resultadoSupAfectada
}

function calcularEnergiaConsumida() {
    let energiaConsumida = document.getElementById("energiaConsumida").value;
    let resultadoEnergiaConsumida = ""
    if (energiaConsumida <= 3300) {
        resultadoEnergiaConsumida = "Categoria A"
    } else if (energiaConsumida <= 5000) {
        resultadoEnergiaConsumida = "Categoria B"
    } else if (energiaConsumida <= 6700) {
        resultadoEnergiaConsumida = "Categoria C"
    } else if (energiaConsumida <= 10000) {
        resultadoEnergiaConsumida = "Categoria D"
    } else if (energiaConsumida <= 13000) {
        resultadoEnergiaConsumida = "Categoria E"
    } else if (energiaConsumida <= 16500) {
        resultadoEnergiaConsumida = "Categoria F"
    } else if (energiaConsumida <= 20000) {
        resultadoEnergiaConsumida = "Categoria G"
    } else if (energiaConsumida <= 20000) {
        resultadoEnergiaConsumida = "Categoria H"
    } else if (energiaConsumida <= 20000) {
        resultadoEnergiaConsumida = "Categoria I"
    } else if (energiaConsumida <= 20000) {
        resultadoEnergiaConsumida = "Categoria J"
    } else if (energiaConsumida <= 20000) {
        resultadoEnergiaConsumida = "Categoria K"
    } else {
        resultadoEnergiaConsumida = "Regimen general - IVA"
    }
    return resultadoEnergiaConsumida
}

function calcularAlquileresDevengados() {
    let alquileresDevengados = document.getElementById("alquileresDevengados").value;
    let resultadoAlquileresDevengados = ""
    if (alquileresDevengados <= 230178.48) {
        resultadoAlquileresDevengados = "Categoria A"
    } else if (alquileresDevengados <= 230178.48) {
        resultadoAlquileresDevengados = "Categoria B"
    } else if (alquileresDevengados <= 460356.93) {
        resultadoAlquileresDevengados = "Categoria C"
    } else if (alquileresDevengados <= 460356.93) {
        resultadoAlquileresDevengados = "Categoria D"
    } else if (alquileresDevengados <= 573619.32) {
        resultadoAlquileresDevengados = "Categoria E"
    } else if (alquileresDevengados <= 575446.12) {
        resultadoAlquileresDevengados = "Categoria F"
    } else if (alquileresDevengados <= 690535.39) {
        resultadoAlquileresDevengados = "Categoria G"
    } else if (alquileresDevengados <= 920713.84) {
        resultadoAlquileresDevengados = "Categoria H"
    } else if (alquileresDevengados <= 920713.84) {
        resultadoAlquileresDevengados = "Categoria I"
    } else if (alquileresDevengados <= 920713.84) {
        resultadoAlquileresDevengados = "Categoria J"
    } else if (alquileresDevengados <= 920713.84) {
        resultadoAlquileresDevengados = "Categoria K"
    } else {
        resultadoAlquileresDevengados = "Regimen general - IVA"
    }
    return resultadoAlquileresDevengados
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
    let categoria = document.getElementById("filtroCategorias").value
    let clave = ""
    let filtrarPorCategoria = []
    for (let i = 0; i < localStorage.length; i++) {
        clave = localStorage.key(i)
        filtrarPorCategoria.push(JSON.parse(localStorage.getItem(clave)))
    }
    filtrarPorCategoria = filtrarPorCategoria.filter((persona) => persona.resultadoCategoriaMaxima == categoria)
    document.getElementById("resultadoFiltrado").innerHTML = "<p></P>"
    for (i = 0; i < filtrarPorCategoria.length; i++) {
        document.getElementById("resultadoFiltrado").insertAdjacentHTML("beforeend", "<p>" + filtrarPorCategoria[i].nombre + "</p>")
    }
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
    document.getElementById("resultadoCategoriaMaxima").insertAdjacentHTML("beforeend", "<p>" + nombreUsuario + ": " + categoriaMaxima + "</p>")
    localStorage.setItem(nombreUsuario, JSON.stringify(persona))
}

let form = document.getElementById("calculadoraForm")

form.addEventListener("submit", function (event) {
    event.preventDefault()
})

let boton = document.getElementById("botonCategoriaMaxima")

boton.addEventListener("click", calcularCategoriaMaxima)

let boton2 = document.getElementById("filtrarCategorias")

boton2.addEventListener("click", filtrarPorCategoria)

localStorage.clear()