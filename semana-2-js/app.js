"use strict";

// El panel abrir/cerrar ya está resuelto, para que te enfoques en la
// parte de "cambiar de vista" (el reto de esta semana).

const botonMenu = document.getElementById("boton-menu");
const barraLateral = document.getElementById("barra-lateral");
const fondoBarra = document.getElementById("fondo-barra");

function alternarBarra() {
  barraLateral.classList.toggle("abierta");
  fondoBarra.classList.toggle("visible");
}
botonMenu.addEventListener("click", alternarBarra);
fondoBarra.addEventListener("click", alternarBarra);

// TODO: tu código aquí.
// Objetivo: al hacer click en un .enlace-barra, mostrar el .vista que le
// corresponde (usando su data-vista), esconder las demás, marcar el
// enlace como .activo, y cerrar la barra (alternarBarra()).
// Ver las pistas en reto.md si te trabas.
