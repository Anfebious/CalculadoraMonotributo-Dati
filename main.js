
function inicio() {
    let continuar = prompt("¿Desea continuar calculando categorias de monotributo?").toUpperCase()
    while (continuar != "NO") {
        if (continuar == "SI") {
            resultadoIngBrutos = calcularIngBrutos()
            resultadoSupAfectada = calcularSupAfectada()
            resultadoEnergiaConsumida = calcularEnergiaConsumida()
            resultadoAlquileresDevengados = calcularAlquileresDevengados()
            alert(calcularCategoriaMaxima(resultadoIngBrutos, resultadoSupAfectada, resultadoEnergiaConsumida, resultadoAlquileresDevengados))
        } else {
            alert("No entiendo tu respuesta")
        }
        continuar = prompt("¿Desea continuar calculando categorias de monotributo?").toUpperCase()
    }
    alert("No se calcula mas.")
}

function calcularIngBrutos() {
    let ingBruto = prompt("Dime tus ingresos brutos de los ultimos 12 meses a la fecha")
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
    let supAfectada = prompt("Dime los m2 afectados a tu actividad a la fecha")
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
    let energiaConsumida = prompt("Dime la energia electrica consumida anualmente a la fecha")
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
    let alquileresDevengados = prompt("Dime el total de alquileres devengados a la fecha")
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

function calcularCategoriaMaxima(resultadoIngBrutos, resultadoSupAfectada, resultadoEnergiaConsumida, resultadoAlquileresDevengados) {
    let categoriaMaxima = ""
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
    return categoriaMaxima
}

inicio()
