import { $, obtenerDatos } from "./modules/fetch";
document.addEventListener("DOMContentLoaded", () => {

  const fechaInput = $("#fechaInput");
  const buscarBtn = $("#buscar");

  buscarBtn.addEventListener("click", () => {
    const fecha = fechaInput.value;
    if (!fecha) {
        alert("Por favor, seleccione una fecha.");
        return;
    }
    obtenerDatos(fecha);
  });
});