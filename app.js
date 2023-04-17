class Serie {
    constructor(id, name, channel, seasons) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
  }
  
  // Define un arreglo de objetos Serie
  const series = [
    new Serie(
      1,
      "Breaking Bad",
      "AMC",
      5
    ),
    new Serie(
      2,
      "Orange Is the New Black",
      "Netflix",
      6
    ),
    new Serie(
      3,
      "Game of Thrones",
      "HBO",
      7
    ),
    new Serie(
      4,
      "The Big Bang Theory",
      "CBS",
      12
    ),
    new Serie(
      5,
      "Sherlock",
      "BBC",
      4
    ),
    new Serie(
      6,
      "A Very English Scandal",
      "BBC",
      2
    ),
  ];
  
  // Función para mostrar las series en una tabla
  function mostrarSeriesEnTabla(series) {
    const tabla = document.createElement("table");
  
    // Crear fila de encabezado
    const encabezado = document.createElement("tr");
    const encabezadoId = document.createElement("th");
    encabezadoId.textContent = "ID";
    const encabezadoName = document.createElement("th");
    encabezadoName.textContent = "Name";
    const encabezadoChannel = document.createElement("th");
    encabezadoChannel.textContent = "Channel";
    const encabezadoSeasons = document.createElement("th");
    encabezadoSeasons.textContent = "Seasons";
  
    encabezado.appendChild(encabezadoId);
    encabezado.appendChild(encabezadoName);
    encabezado.appendChild(encabezadoChannel);
    encabezado.appendChild(encabezadoSeasons);
    tabla.appendChild(encabezado);
  
    // Crear filas de series
    for (const serie of series) {
      const fila = document.createElement("tr");
      const id = document.createElement("td");
      id.textContent = serie.id.toString();
      const name = document.createElement("td");
      name.textContent = serie.name;
      const channel = document.createElement("td");
      channel.textContent = serie.channel;
      const seasons = document.createElement("td");
      seasons.textContent = serie.seasons.toString();
  
      fila.appendChild(id);
      fila.appendChild(name);
      fila.appendChild(channel);
      fila.appendChild(seasons);
      tabla.appendChild(fila);
    }
  
    document.body.appendChild(tabla);
    const resumen = document.createElement("tr");
    const resumenLabel = document.createElement("td");
    resumenLabel.textContent = "Promedio de temporadas:";
    const resumenValue = document.createElement("td");
    const promedioTemporadas = calcularPromedioTemporadas(series);
    resumenValue.textContent = promedioTemporadas;
  
    resumen.appendChild(resumenLabel);
    resumen.appendChild(resumenValue);
    tabla.appendChild(resumen);
  
    document.body.appendChild(tabla);
  }
  
  function calcularPromedioTemporadas(series) {
    const totalTemporadas = series.reduce((total, serie) => total + serie.seasons, 0);
    const promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas.toFixed(2);
  }
  

  
  // Llamada a la función para mostrar las series en una tabla
  mostrarSeriesEnTabla(series);