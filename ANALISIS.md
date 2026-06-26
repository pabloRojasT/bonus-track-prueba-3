# Análisis de la Aplicación - AdoptaPet

### Identificación de elementos de React

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
| :--- | :--- | :--- |
| **Componente** | En la creación de la estructura modular: `App.jsx`, `ListaMascotas.jsx`, `MascotaCard.jsx` y `FiltroEspecie.jsx`. | Permite dividir la interfaz en piezas independientes, reutilizables y fáciles de mantener, separando responsabilidades lógicas y visuales. |
| **JSX** | En el retorno (`return`) de cada componente para definir la estructura visual de las tarjetas, listas y filtros. | Facilita la creación de la interfaz combinando la potencia y lógica de JavaScript con una sintaxis visual muy similar a HTML. |
| **Props** | Para enviar la información (nombre, especie, características, etc.) desde `ListaMascotas` hacia cada `MascotaCard`. | Permite que los componentes hijos (`MascotaCard`) sean dinámicos y reutilizables, cambiando su contenido según los datos que el componente padre les inyecte. |
| **Estado (useState)** | En `App.jsx` para almacenar el texto escrito en el buscador y la opción seleccionada en `FiltroEspecie`. | Es fundamental porque permite que la aplicación reaccione a la interacción del usuario y vuelva a renderizar la lista automáticamente al cambiar los valores de filtrado. |
| **Renderizado de listas (.map + key)** | En `ListaMascotas.jsx`, iterando sobre el arreglo de `mascotas` (o las mascotas filtradas) para generar las tarjetas. | Evita escribir código repetitivo. Permite generar la lista de manera dinámica asegurando que React identifique cada elemento de forma única mediante la prop `key`. |
| **Renderizado condicional** | En `MascotaCard` para mostrar la alerta visual si `adopcionUrgente` es `true`, y en `App` para mostrar el mensaje "No hay mascotas que coincidan". | Permite que la interfaz se adapte visualmente al contexto de los datos o a los resultados de búsqueda sin necesidad de programar vistas completamente separadas. |

### Respuestas a preguntas conceptuales

**1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?**
Dividir el directorio en componentes mejora drásticamente el mantenimiento y la escalabilidad del código. Si ocurre un error de diseño en una tarjeta o necesito actualizar la información que muestra, sé exactamente que debo editar `MascotaCard.jsx` sin afectar la lógica del buscador o perderme en un archivo gigante y desordenado.

**2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.**
Las props son inmutables y sirven para pasar datos de un componente padre a un hijo; por ejemplo, la información individual de la mascota que `ListaMascotas` le entrega a `MascotaCard`. El estado, en cambio, es interno, mutable y reacciona a los eventos del usuario; por ejemplo, la palabra que el usuario escribe en la barra de búsqueda, la cual se guarda en un estado dentro de `App.jsx` para actualizar el filtro en tiempo real.