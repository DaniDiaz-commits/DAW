const NASA_API_KEY = "DEMO_KEY";
const API_URL = "https://api.nasa.gov/planetary/apod";
const $ = selector => document.querySelector(selector);
// function _ (selector) {return document.querySelector(selector)};

// document.addEventListener("DOMContentLoaded", () => {

//   const fechaInput = $("#fechaInput");
//   const buscarBtn = $("#buscar");

//   buscarBtn.addEventListener("click", () => {
//     const fecha = fechaInput.value;
//     if (!fecha) {
//         alert("Por favor, seleccione una fecha.");
//         return;
//     }
//     obtenerDatos(fecha);
//   });
// });

function obtenerDatos(fecha) {
  $("#buscar").setAttribute("aria-busy", "true");

  const url = `${API_URL}?api_key=${NASA_API_KEY}&date=${fecha}`;  
  let respuesta = fetch(url);

  respuesta.then((respuesta) => respuesta.json())
    .then((resultado) => mostrarDatos(resultado))
    .catch((err) => {
        console.log(err.message);
      // console.error(err)    
    });
}

function mostrarDatos( resultado ) {
  $("#titulo").textContent = "";
  $("#fecha").textContent = "";
  $("#descripcion").textContent = "";
  $("#c_multimedia").textContent = "";

  for (const [key, value] of Object.entries(resultado)) {
    console.log(`${key}: ${value}`);
  };

  let titulo = resultado["title"];
  let fecha = resultado["date"];
  let explain = resultado["explanation"];
  let url = resultado["url"];

  $("#titulo").append(titulo);
  $("#fecha").append(fecha);
  $("#descripcion").append(explain);
  // document.body.querySelector("#descripcion").textContent = explain;
  if(resultado['media_type'] === "image"){
    let imagen = document.createElement("img");
    imagen.src = url;
    $("#c_multimedia").append(imagen);
  } else {
    let video = document.createElement("video");
    video.src = url;
    $("#c_multimedia").append(video);
  }

  $("#buscar").removeAttribute("aria-busy");
}

export { $, mostrarDatos, obtenerDatos, NASA_API_KEY, API_URL };