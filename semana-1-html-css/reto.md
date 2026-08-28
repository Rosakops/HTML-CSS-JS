# Reto semana 1 — barra lateral desde cero

No mires `triage/index.html` ni `triage/estilo.css` del proyecto real hasta
terminar tu intento.

## Qué tienes que lograr

Usando `index.html` y `estilo.css` de esta carpeta (están casi vacíos,
solo el esqueleto):

1. Un botón fijo arriba a la izquierda, con forma de caja (borde
   redondeado, fondo, borde) y tres líneas horizontales adentro (ícono de
   hamburguesa).
2. Un panel lateral (`<aside>`) que por defecto está escondido fuera de la
   pantalla por la izquierda, y que al hacer click en el botón se desliza
   hacia adentro con una transición suave (no que aparezca de golpe).
3. Un fondo oscuro semitransparente que cubre el resto de la pantalla
   cuando el panel está abierto (para que se note que hay un panel encima).
4. Dentro del panel, al menos 2 enlaces de ejemplo.

## Pistas de concepto (no de código)

- El truco de "escondido fuera de la pantalla" se hace con una propiedad de
  CSS que mueve un elemento sin sacarlo del flujo normal. Busca en MDN:
  `transform: translateX`.
- Para que el movimiento sea suave y no instantáneo, necesitas una
  propiedad de CSS que declara cuánto tarda un cambio. Busca: `transition`.
- El botón necesita `position: fixed` para quedarse pegado en la pantalla
  aunque hagas scroll.
- No necesitas JavaScript avanzado: solo hace falta escuchar el click del
  botón y cambiar la clase CSS del panel para que pase de "escondido" a
  "visible". Busca: `classList.toggle`.

## Cuándo terminaste

Ábrelo con dos clicks: primero verifica que el panel entra y sale bien,
después compáralo contra `triage/index.html` / `triage/estilo.css` del
proyecto real (carpeta `Simulador BHE`) y anota en este mismo archivo, abajo,
qué hiciste distinto y qué no se te ocurrió.
