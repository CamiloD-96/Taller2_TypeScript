import { Serie } from "./Serie.js";
import { series } from './data.js';

const tablaSeries: HTMLElement = document.getElementById("series")!;
const promedioTabla: HTMLElement = document.getElementById("promedio")!;
const card = document.getElementById("cardS") as HTMLDivElement;

mostrarData(series);
mostrarPromedioTemporadas(series);

function mostrarData(series : Serie[]) :void {
    let tbodySerie = document.createElement("tbody");
    for (let serie of series){
        let trElement :HTMLElement = document.createElement("tr")
        trElement.innerHTML=`<td>${serie.id}</td>
        <td><a href="#" class="titulo-serie" data-imagen="${serie.foto}" 
            data-descripcion="${serie.descripcion}" data-url="${serie.url}">${serie.titulo}</a></td>
        <td>${serie.plataforma}</td>
        <td>${serie.temporadas}</td>`
        tbodySerie.appendChild(trElement)
    }
    tablaSeries.appendChild(tbodySerie);

    tbodySerie.addEventListener('click', (event) => {
    const target = event.target as HTMLAnchorElement;
    if (target && target.classList.contains('titulo-serie')) {
      mostrarInfo(target);
    }
  });
} 

function mostrarPromedioTemporadas(series: Serie[]): void {
    if (series.length === 0) {
      console.warn("El arreglo está vacío");
      return;
    }
    // Total de temporadas
    const totalSeasons = series.reduce((acc, current) => acc + current.temporadas, 0);
  
    // Calcular promedio
    const averageSeasons = totalSeasons / series.length;
    const averageElement = document.createElement("tr");
    
    // Agregar
    promedioTabla.innerHTML = `<td colspan="4"><strong>Promedio de temporadas:</strong> ${averageSeasons.toFixed(2)}</td>`;
    promedioTabla.appendChild(averageElement);
  }

  function mostrarInfo(titulo: HTMLAnchorElement): void {
    // Obtener los atributos de los datos de la película del elemento título
    const imagen = titulo.dataset.imagen!;
    const descripcion = titulo.dataset.descripcion!;
    const url = titulo.dataset.url!;

    // Obtener referencias a los elementos de la tarjeta de detalles de la película
    const cardImg = document.getElementById("imagenPelicula") as HTMLImageElement;
    const cardTitle = document.querySelector(".card-title") as HTMLHeadingElement;
    const cardText = document.querySelector(".card-text") as HTMLParagraphElement;
    const cardLink = document.querySelector(".card-link") as HTMLParagraphElement;

    // Actualizar los elementos de la tarjeta con los datos de la película
    cardImg.src = imagen;
    cardTitle.textContent = titulo.textContent!;
    cardText.textContent = descripcion;
    cardLink.textContent = url;
    cardImg.style.display = "block";
}


  