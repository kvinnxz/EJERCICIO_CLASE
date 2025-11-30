# Just do it — Lista de Tareas

Este proyecto es una aplicación web minimalista para gestionar tareas, creada con **HTML, CSS y JavaScript**, sin frameworks ni librerías externas.  
Su objetivo es ofrecer una interfaz limpia, moderna y enfocada en la productividad diaria.

##  Características

- Diseño oscuro y estilo *clean UI*.
- Interfaz centrada y fácil de usar.
- Agregar tareas rápidamente.
- Marcar tareas como completadas.
- Eliminar tareas con un solo clic.
- Efecto visual de tachado y opacidad para tareas completadas.
- Funciona completamente sin conexión a internet.

##  Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- ChatGPT (asistencia con generación de código)

##  Estructura del proyecto

El proyecto está contenido en **un único archivo HTML** incluyendo:

- Estructura con HTML.  
- Estilos dentro de `<style>`.  
- Funciones JavaScript dentro de `<script>`.  

##  Cómo usar

1. Descarga o crea un archivo llamado `index.html`.
2. Copia el código completo dentro del archivo.
3. Abre el archivo en tu navegador.
4. Escribe una tarea en el campo de texto.
5. Presiona **"I Got This!"** para agregarla.
6. Usa:
   - ✔ para marcar como completada.
   - 🗑️ para eliminar una tarea.

##  Funciones principales

La aplicación utiliza las siguientes funciones:

- `addTask()` — agrega una nueva tarea a la lista.  
- `toggleComplete(element)` — marca una tarea como completada o pendiente.  
- `deleteTask(element)` — elimina una tarea del listado.  

##  Objetivo del proyecto

Este proyecto fue desarrollado como un **ejercicio de prueba con inteligencia artificial**, enfocado en:

- Maquetación web con HTML y CSS.  
- Implementación funcional con JavaScript.  
- Manipulación del DOM.  
- Diseño visual minimalista moderno.  

Su finalidad es demostrar cómo una IA puede apoyar el proceso de diseño e implementación de interfaces web simples.


##  Prompt utilizado

```# Prompt para crear una web de lista de tareas

Desarrolla una aplicación web simple de lista de tareas con un diseño moderno, oscuro y minimalista, utilizando únicamente **HTML, CSS y JavaScript puro**, sin librerías ni frameworks externos.

## Entrega del proyecto
Todo debe ir en **un solo archivo HTML**, incluyendo:
- Los estilos dentro de una etiqueta `<style>`.
- El código JavaScript dentro de `<script>` al final del documento.

## Requisitos de diseño
- El contenido debe estar centrado en la pantalla.
- Estilo visual tipo *clean UI* con fondo oscuro.
- Debe existir un encabezado visible que diga exactamente: **"Just do it."**
- Un campo de texto para escribir tareas.
- Un botón a la derecha del input con el texto: **"I Got This!"**
- Una sección debajo donde se muestren las tareas.

## Funcionalidad requerida
Implementa estas funciones en JavaScript:
- `addTask()` → para agregar nuevas tareas.
- `toggleComplete(element)` → para marcar tareas como completadas.
- `deleteTask(element)` → para eliminar tareas.

## Comportamiento esperado
- Al escribir una tarea y presionar el botón, esta debe añadirse a la lista.
- Cada tarea debe incluir:
  - Un botón **✔** para marcarla como completada.
  - Un icono **🗑️** para eliminarla.
- Cuando una tarea esté completa:
  - Su texto debe verse tachado.
  - Debe disminuir su opacidad.
- Al eliminar una tarea, esta debe desaparecer del DOM.

## Consideraciones técnicas
- Los botones deben usar eventos `onclick`.
- Si se generan elementos dinámicamente con `innerHTML`, deben conservar sus eventos.
- El código debe ejecutarse correctamente sin errores.
- El CSS no debe impedir la interacción del usuario con los botones.

## Resultado final
Devuelve solamente el archivo HTML completo, listo para copiar y usar.```