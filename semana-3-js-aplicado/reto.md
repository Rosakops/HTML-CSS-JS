# Reto semana 3 — sobre el proyecto real, no sandbox

Este reto ya es directo en `triage/app.js` del proyecto (`Simulador BHE`),
no hay archivos aparte aquí. Antes de tocar nada:

1. Relee `triage/app.js` completo, línea por línea. Para cada función,
   escribe en una hoja aparte (o aquí mismo, abajo) en una frase qué hace:
   `iniciar()`, `poblarCategorias()`, `elegirCategoria()`,
   `elegirSubtipo()`, `renderizarParametros()`, `leerParametros()`,
   `evaluar()`.
2. Fíjate en `CAMPOS_CONOCIDOS` (arriba del archivo) — es un diccionario
   que traduce nombres de parámetros a etiquetas legibles. Nota que no
   necesariamente cubre TODOS los campos que puede pedir
   `rutas.Diseno` — si un subtipo pide un campo que no está ahí, el
   código igual lo muestra pero con una etiqueta genérica (mira
   `renderizarParametros()`, el `||` con el objeto por defecto).

## El reto

Agrega un campo nuevo a `CAMPOS_CONOCIDOS` — uno que exista de verdad en
`rutas.Diseno` (revisa `envolvimiento/rutas.py` o pregúntale a Kiel cuál
falta) pero que hoy se muestre con etiqueta genérica. Dale una etiqueta
legible, unidad correcta, y un valor por defecto razonable — pero el valor
por defecto solo si ya está validado en el vault (Knowledge/NeuroCross),
nunca lo inventes.

## Checkpoint

17 sep. Kiel revisa el diff, no lo escribe.
