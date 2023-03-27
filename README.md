![Imagen del proyecto](./src/images/logo-adalab.png)

## :robot: Descripción del proyecto.

Este repositorio contiene el proyecto del grupo 5 correspondiente al módulo 3 de la promoción Salas del BootCamp Web Programming de Adalab.

En este proyecto se pide la realización de una aplicación web que nos permita crear una página para mostrar un proyecto personal o un planteamiento que resulte interesante.

En la página web se podrán introducir datos personales y profesionales, y obtener una vista maquetada con la información.

## :dart: Objetivos:

1. Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos.

2. Aprender a usar React para crear una aplicación web sencilla.

3. Aprender a buscar información en la documentación de librerías externas.

4. Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.

5. Mejorar la comunicación entre los miembros del equipo.

6. Mejorar las habilidades de comunicación en público al exponer el proyecto en la sesión final.

## :bookmark_tabs: Especificaciones:

En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

- Uso de Sass para los estilos.

- Uso de mediaqueries para que el diseño sea adaptable al dispositivo.

- Uso de React para la estructuración en componentes de la aplicación.

- Desarrollo usando la estrategia Mobile First.

- Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras.

- Publicación del resultado en Internet usando GitHub Pages.

## :electric_plug: Funcionamiento:

La aplicación debe permitir a la usuaria introducir la información en un formulario y que este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta con información del proyecto.

## :scroll: Requerimientos:

La tarjeta del proyecto deberá tener los siguientes campos:

- Nombre del proyecto.
- Slogan del proyecto.
- Tecnologías.
- Repo.
- Demo.
- Descripción.
- Nombre de la autora/o.
- Trabajo de la autora/o.
- Foto del autora/o.
- Foto del proyecto.

Respecto a la interacción con la web los requerimientos son:

- Los campos deberán tener restricciones para su formato indicado.

- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta del proyecto.

- Toda la información del formulario debe almacenarse en localStorage, de forma que al recargar la página siga disponible.

- Al hacer clic en el botón de "Crear Tarjeta" enviaremos el formulario a un API que devolverá la URL de una web, con la tarjeta de visita con la información rellena.

- Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida.
