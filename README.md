# Práctica HTML / CSS / JS — plan con fechas

Objetivo: dejar de depender de Kiel para tocar el HTML/CSS/JS de NeuroCross.
Cada semana tiene recursos + un reto en una carpeta aparte (sandbox, no toca
el proyecto real) + un checkpoint que sí se hace sobre el proyecto real.

No mires el código de NeuroCross mientras haces el reto de la semana — el
punto es que salga de ti, no que lo copies. Cuando termines, compáralo tú
mismo contra el real y anota qué te costó.

## Semana 1 — 28 ago al 3 sep: HTML + CSS

Recursos:
- HTML: https://developer.mozilla.org/es/docs/Web/HTML (con leer la
  referencia de etiquetas y atributos basta, 1-2 días)
- CSS flexbox: https://flexboxfroggy.com/#es (juego, ~20 min, hazlo
  completo, no a medias)
- CSS general: https://developer.mozilla.org/es/docs/Web/CSS (busca
  `position`, `transition`, `box model` específicamente — son los tres
  conceptos que usamos en la barra lateral)

Reto: `semana-1-html-css/reto.md`

Checkpoint (3 sep): recreas la barra lateral deslizante de NeuroCross desde
cero, en tu reto, sin ver `triage/index.html` ni `triage/estilo.css` del
proyecto real. Cuando esté lista, la comparamos.

## Semana 2 — 4 sep al 10 sep: JavaScript básico

Recursos:
- https://javascript.info/ — capítulos "Fundamentals" y "Document" (DOM,
  eventos, `querySelector`, `addEventListener`, `classList`)

Reto: `semana-2-js/reto.md`

Checkpoint (10 sep): en el proyecto real (`triage/`), agregas tú solo una
tercera opción de menú — nuevo `<a data-vista="...">` en el `<nav>`, nuevo
`<div class="vista oculto">` en `<main>`. Sin que Kiel toque el código.

## Semana 3 — 11 sep al 17 sep: JS aplicado al proyecto real

Recursos:
- https://javascript.info/ — capítulos de `fetch`, JSON, funciones
  asíncronas (`async`/`await`)
- Relee `triage/app.js` completo, línea por línea, ya con lo aprendido —
  entiende qué hace `iniciar()`, cómo carga Pyodide, cómo llama a
  `R.evaluar_json(...)`.

Reto: `semana-3-js-aplicado/reto.md` (este es directo sobre el proyecto
real, ya no hay sandbox aparte).

Checkpoint (17 sep): agregas un campo nuevo al formulario de parámetros en
`app.js` (por ejemplo, un campo que ya exista en `rutas.Diseno` pero no
esté en `CAMPOS_CONOCIDOS`) tú solo.

## Regla para los checkpoints

Kiel revisa y dice qué está mal y por qué — no lo arregla. Si te trabas de
verdad (no "no entiendo nada", sino un punto concreto), pregunta ese punto
puntual, no pidas que se resuelva completo.
