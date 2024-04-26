import { series } from './data.js';
var tablaSeries = document.getElementById("series");
var promedioTabla = document.getElementById("promedio");
var card = document.getElementById("cardS");
mostrarData(series);
mostrarPromedioTemporadas(series);
function mostrarData(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"titulo-serie\" data-imagen=\"").concat(serie.foto, "\" \n            data-descripcion=\"").concat(serie.descripcion, "\" data-url=\"").concat(serie.url, "\">").concat(serie.titulo, "</a></td>\n        <td>").concat(serie.plataforma, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySerie.appendChild(trElement);
    }
    tablaSeries.appendChild(tbodySerie);
    tbodySerie.addEventListener('click', function (event) {
        var target = event.target;
        if (target && target.classList.contains('titulo-serie')) {
            mostrarInfo(target);
        }
    });
}
function mostrarPromedioTemporadas(series) {
    if (series.length === 0) {
        console.warn("El arreglo está vacío");
        return;
    }
    // Total de temporadas
    var totalSeasons = series.reduce(function (acc, current) { return acc + current.temporadas; }, 0);
    // Calcular promedio
    var averageSeasons = totalSeasons / series.length;
    var averageElement = document.createElement("tr");
    // Agregar
    promedioTabla.innerHTML = "<td colspan=\"4\"><strong>Promedio de temporadas:</strong> ".concat(averageSeasons.toFixed(2), "</td>");
    promedioTabla.appendChild(averageElement);
}
function mostrarInfo(titulo) {
    // Obtener los atributos de los datos de la película del elemento título
    var imagen = titulo.dataset.imagen;
    var descripcion = titulo.dataset.descripcion;
    var url = titulo.dataset.url;
    // Obtener referencias a los elementos de la tarjeta de detalles de la película
    var cardImg = document.getElementById("imagenPelicula");
    var cardTitle = document.querySelector(".card-title");
    var cardText = document.querySelector(".card-text");
    var cardLink = document.querySelector(".card-link");
    // Actualizar los elementos de la tarjeta con los datos de la película
    cardImg.src = imagen;
    cardTitle.textContent = titulo.textContent;
    cardText.textContent = descripcion;
    cardLink.textContent = url;
    cardImg.style.display = "block";
}
