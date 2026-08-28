# Reto semana 2 — menú con secciones que cambian

Parte del reto de la semana 1 ya resuelto en esta carpeta (`index.html`,
`estilo.css` con el panel funcionando). Ahora falta la parte de JS: que
cada enlace del panel muestre un contenido distinto.

## Qué tienes que lograr

1. En `index.html` ya hay dos enlaces en el panel y dos bloques de
   contenido (`<div>`) en el `<main>`, uno por enlace.
2. Al hacer click en un enlace del panel, el bloque de contenido que le
   corresponde se muestra, y el otro se esconde.
3. El enlace en el que hiciste click queda marcado como "activo" (distinto
   visualmente de los demás).
4. Al elegir una opción, el panel se cierra solo.

## Pistas de concepto

- Cada enlace necesita alguna forma de decir "a mí me corresponde este
  bloque". Busca en MDN: atributos `data-*` y `element.dataset`.
- Para escuchar el click de varios elementos a la vez (no solo uno), busca
  `document.querySelectorAll` y cómo recorrer el resultado con `.forEach`.
- `event.preventDefault()` — sin esto, el navegador intenta navegar de
  verdad al hacer click en un `<a href="#">`.

## Cuándo terminaste

Compáralo contra `triage/index.html` y `triage/app.js` (la parte que
maneja `.enlace-barra`) del proyecto real. Anota abajo qué se te complicó.
