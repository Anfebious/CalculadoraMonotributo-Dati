
function inicio() {
    let continuar = prompt("¿Desea continuar calculando categorias de monotributo?").toUpperCase()
    let resultado = ""
    while (continuar != "NO") {
        if (continuar == "SI") {
            resultado = calcularIngBrutos()
            alert(resultado)
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

inicio()
