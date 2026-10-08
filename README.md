#  Currency Explorer

**Caso práctico colaborativo — Pair Programming y consumo de una API pública**

Aplicación web desarrollada con HTML, CSS y JavaScript Vanilla que permite convertir cantidades entre diferentes divisas utilizando tipos de cambio obtenidos en tiempo real mediante consultas HTTP a la API pública Frankfurter.

## 1. Integrantes del equipo

| Integrante | Responsabilidades principales |
|---|---|
| Hugo Rivera | Misiones 7, 8 y 9: validaciones, estados de carga y manejo de errores |
| Rigoberto Rodrigez | Misiones 4, 5 y 6: monedas dinámicas, conversión e intercambio |

**Repositorio del proyecto:**

https://github.com/HUG004/Currency-explorer


---

## 2. Objetivo del proyecto

Desarrollar una aplicación web interactiva capaz de consultar tipos de cambio mediante una API pública y realizar conversiones entre diferentes monedas.

El proyecto busca aplicar conocimientos de:

- Manipulación del DOM con JavaScript.
- Eventos e interacción con el usuario.
- Peticiones HTTP mediante `fetch()`.
- Programación asíncrona con `async/await`.
- Interpretación de respuestas JSON.
- Validación de datos de entrada.
- Manejo de errores con `try/catch`.
- Diseño responsive.
- Control de versiones con Git y GitHub.
- Desarrollo colaborativo mediante Pair Programming.

---

## 3. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| HTML5 | Estructura de la aplicación |
| CSS3 | Diseño visual y adaptación a diferentes pantallas |
| JavaScript Vanilla | Lógica, cálculos, eventos y manipulación del DOM |
| Fetch API | Consultas HTTP al servicio externo |
| JSON | Formato de intercambio de datos |
| Frankfurter API | Obtención de tipos de cambio |
| Git | Control de versiones |
| GitHub | Repositorio remoto, ramas y Pull Requests |
| Visual Studio Code | Desarrollo y edición del código |
| Chrome DevTools | Pruebas de red, errores y diseño responsive |

No se utilizaron frameworks de JavaScript ni librerías externas para realizar las conversiones.

---

## 4. API utilizada

El proyecto consume **Frankfurter API v2**, un servicio público que proporciona tipos de cambio entre diferentes monedas.

**Documentación oficial:**

https://frankfurter.dev/

### Endpoint utilizado

```http
GET https://api.frankfurter.dev/v2/rate/eur/usd
```

La URL permite consultar el tipo de cambio de una moneda origen a una moneda destino.

### Ejemplo de respuesta JSON

```json
{
  "date": "AAAA-MM-DD",
  "base": "EUR",
  "quote": "USD",
  "rate": 1.12
}
```

El valor `rate` representa el tipo de cambio utilizado para calcular la conversión.

**Nota:** El valor anterior es ilustrativo; la tasa real depende de los datos proporcionados por la API.

### Funcionamiento de la consulta

1. El usuario introduce una cantidad.
2. Selecciona la moneda de origen.
3. Selecciona la moneda de destino.
4. JavaScript construye dinámicamente la URL.
5. `fetch()` envía una petición HTTP.
6. La aplicación espera la respuesta mediante `await`.
7. La respuesta se interpreta como JSON.
8. Se obtiene la propiedad `rate`.
9. Se calcula la conversión.
10. El resultado se muestra en la interfaz mediante el DOM.

La fórmula utilizada es:

```text
Cantidad convertida = Cantidad ingresada × Tipo de cambio
```

---

## 5. Estructura del proyecto

```text
currency-explorer-starter/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── code.js
│
└── README.md
```

### Descripción de los archivos

**index.html**

Contiene la estructura de la interfaz, incluyendo el campo de cantidad, los selectores de monedas, los botones y el área de resultados.

**css/styles.css**

Define los colores, dimensiones, distribución de los elementos, estilos de mensajes, estados de carga y diseño adaptable.

**js/code.js**

Implementa la lógica principal de la aplicación: lectura de valores, validaciones, consultas HTTP, cálculos, actualización del DOM y manejo de errores.

**README.md**

Documenta el funcionamiento del proyecto, las instrucciones de ejecución, las tecnologías utilizadas y el proceso de colaboración.

---

## 6. Instalación y ejecución

### Paso 1. Clonar el repositorio

Abrir una terminal y ejecutar:

```bash
git clone https://github.com/HUG004/Currency-explorer.git
```

### Paso 2. Entrar al proyecto

```bash
cd Currency-explorer
```

### Paso 3. Iniciar un servidor local

Si se tiene instalado Python 3:

```bash
python3 -m http.server 5500
```

### Paso 4. Abrir la aplicación

En el navegador ingresar a:

http://localhost:5500

La aplicación estará disponible para realizar conversiones.

**Requisito:** Es necesario contar con conexión a Internet para consultar la API pública.

---

## 7. Funcionalidades implementadas

### Misión 1 — Primera conexión con la API

Se utiliza `fetch()` para realizar una petición HTTP al servicio Frankfurter y obtener información de un par de divisas.

### Misión 2 — Interpretación de JSON y actualización del DOM

Se obtiene la información de la respuesta mediante `response.json()` y se muestra en la página utilizando JavaScript.

### Misión 3 — Conversión de cantidades

Se incorpora un campo para introducir cantidades y calcular el valor convertido mediante la tasa recibida.

### Misión 4 — Monedas dinámicas

Se implementan selectores que permiten elegir la moneda de origen y destino.

La URL de consulta se construye dinámicamente según la selección del usuario.

### Misión 5 — Conversión completa

La aplicación integra la cantidad introducida, las monedas seleccionadas y el tipo de cambio obtenido de la API.

El resultado se presenta de forma legible.

### Misión 6 — Intercambio de monedas

Se implementa un botón que intercambia la moneda de origen con la moneda de destino y permite actualizar la conversión.

### Misión 7 — Validación de cantidades

Se agregan validaciones para evitar consultas con datos incorrectos.

Se comprueban los siguientes casos:

- Campo vacío.
- Cantidad igual a cero.
- Cantidad negativa.
- Valor no numérico o no válido.

Cuando ocurre una entrada incorrecta, se muestra un mensaje claro al usuario.

### Misión 8 — Estado de carga

Durante una petición a la API, la aplicación muestra el mensaje:

```text
Consultando...
```

También deshabilita temporalmente los controles para evitar múltiples consultas simultáneas.

Al finalizar la petición, los controles vuelven a habilitarse.

### Misión 9 — Manejo de errores

Se utiliza `try/catch` para controlar fallos durante las consultas.

La aplicación comprueba `response.ok` para identificar respuestas HTTP no satisfactorias.

Se contemplan errores como:

- Problemas de conexión.
- Respuestas HTTP incorrectas.
- Respuestas JSON inválidas.
- Tipos de cambio no válidos.

El bloque `finally` permite restaurar el estado normal de los controles.

### Misión 10 — Diseño responsive

La interfaz está diseñada para utilizarse en computadoras y dispositivos móviles.

Se realizaron pruebas con las herramientas de desarrollador de Chrome para revisar la presentación en diferentes tamaños de pantalla.

### Misión 11 — Histórico de divisas

Esta misión corresponde a una extensión opcional del proyecto y no forma parte de las funcionalidades implementadas en la versión actual.

---

## 8. Pruebas realizadas

| Prueba | Resultado esperado |
|---|---|
| Conversión EUR a USD | Mostrar el resultado calculado |
| Conversión USD a MXN | Actualizar el tipo de cambio |
| Intercambio de monedas | Invertir origen y destino |
| Campo vacío | Mostrar mensaje de validación |
| Cantidad negativa | Rechazar la entrada |
| Cantidad igual a cero | Rechazar la entrada |
| Conexión lenta | Mostrar el estado `Consultando...` |
| Error de conexión | Mostrar mensaje y restaurar controles |
| Pantalla móvil | Mantener una interfaz utilizable |

Las pruebas se realizaron mediante el navegador y las herramientas de desarrollo.

---

## 9. Desarrollo colaborativo y GitHub

Para desarrollar el proyecto se utilizó un repositorio compartido con diferentes ramas de trabajo.

### Ramas utilizadas

| Rama | Propósito |
|---|---|
| `main` | Versión principal y final del proyecto |
| `misiones-rigo` | Implementación de las misiones 4, 5 y 6 |
| `misiones-Hugo` | Implementación de las misiones 7, 8 y 9 |
| `desarrollo` | Integración y revisión del trabajo de ambos integrantes |

### Flujo de integración

El desarrollo se organizó de la siguiente manera:

1. Se creó el repositorio principal en GitHub.
2. Se realizaron cambios en ramas de trabajo.
3. Rigo implementó las funcionalidades correspondientes a sus misiones.
4. Hugo implementó las validaciones, estados de carga y manejo de errores.
5. Se integró el trabajo de Rigo en `main`.
6. Se creó la rama `desarrollo` a partir de la versión actualizada de `main`.
7. Se integró el trabajo de Hugo en `desarrollo`.
8. Se fusionó `desarrollo` con `main` para obtener la versión conjunta.

### Pull Requests realizados

| Pull Request | Descripción |
|---|---|
| #1 | Integración de `misiones-rigo` a `main` |
| #2 | Integración de `misiones-Hugo` a `desarrollo` |
| #3 | Integración final de `desarrollo` a `main` |

### Commits relevantes

```text
1a610bf  Mision 4, 5, y 6 completados
215ae29  feat: mision 09 manejo de errores HTTP y conexion
d53c680  style: agrega estilos de estado de carga mision 08
c3174a9  Merge pull request #1
46e8058  Merge pull request #2
75df7aa  Merge pull request #3
```

El historial permite identificar las contribuciones realizadas y el proceso de integración del proyecto.

---

## 10. Pair Programming

La actividad utiliza la metodología Pair Programming, que contempla dos roles:

**Driver**

Se encarga de escribir el código, ejecutar las pruebas y explicar los cambios realizados.

**Navigator**

Revisa la lógica, identifica posibles errores, propone mejoras y analiza las decisiones de implementación.

La metodología propone intercambiar ambos roles al finalizar cada misión para que los integrantes comprendan la solución completa.

### Registro de roles

Completar esta tabla de acuerdo con la participación real de ambos integrantes:

| Misión | Driver | Navigator |
|---|---|---|
| 4 | Rigo | Hugo |
| 5 | Rigo | Hugo |
| 6 | Rigo | Hugo |
| 7 | Hugo | Rigo |
| 8 | Hugo | Rigo |
| 9 | Hugo | Rigo |
| 10 | Hugo | Rigo |

---

## 11. Decisiones técnicas

Durante el desarrollo se adoptaron las siguientes decisiones:

**Uso de JavaScript Vanilla**

Se trabajó sin frameworks para comprender directamente el uso del DOM, los eventos y las peticiones HTTP.

**Uso de Frankfurter API**

Se seleccionó porque permite consultar tipos de cambio mediante HTTPS sin requerir una clave de acceso.

**Validación antes de consultar**

Se comprueban las cantidades antes de realizar una petición para evitar consultas innecesarias.

**Estado de carga**

Se informa al usuario que la aplicación está consultando datos y se deshabilitan los controles durante el proceso.

**Manejo de errores**

Se implementaron `try/catch`, `response.ok` y `finally` para controlar fallos y restaurar el estado de la interfaz.

**Separación de responsabilidades**

Se mantuvieron HTML, CSS y JavaScript en archivos independientes para facilitar la organización y mantenimiento.

**Integración mediante ramas**

Se utilizaron ramas y Pull Requests para conservar el historial de cambios y reunir las funcionalidades de ambos integrantes.

---

## Reflexión final de pareja

Durante el desarrollo de Currency Explorer reforzamos nuestros conocimientos sobre JavaScript y el consumo de APIs públicas. Aprendimos a utilizar `fetch()` y `async/await` para realizar peticiones HTTP, interpretar respuestas JSON y mostrar los resultados mediante la manipulación del DOM. También comprendimos la importancia de validar los datos ingresados y manejar posibles errores de conexión para ofrecer una experiencia más confiable.

Una de las principales dificultades fue integrar las funcionalidades desarrolladas en diferentes ramas de GitHub sin afectar el trabajo de ninguno de los integrantes. Para resolverlo, utilizamos una rama de desarrollo y realizamos Pull Requests que permitieron combinar y conservar los cambios.

Una decisión colaborativa importante fue revisar el historial de commits y verificar la integración antes de actualizar definitivamente la rama principal. Esto nos permitió comprender mejor el uso de Git, las ramas y el trabajo colaborativo.

Finalmente, reconocimos que desarrollar una aplicación no consiste únicamente en escribir código, sino también en probar su funcionamiento, documentar las decisiones y comprender las aportaciones de cada integrante.

---

## 13. Conclusiones

Currency Explorer permitió aplicar conocimientos de desarrollo web mediante la construcción de una aplicación que consume información externa y la transforma en resultados útiles para el usuario.

El proyecto integra consultas HTTP, interpretación de JSON, operaciones matemáticas, manipulación del DOM, validaciones y manejo de errores.

También permitió utilizar Git y GitHub para organizar el trabajo, mantener un historial de cambios e integrar funcionalidades desarrolladas en diferentes ramas.

La aplicación demuestra el flujo completo de una consulta: desde la interacción del usuario hasta la presentación del resultado obtenido mediante una API pública.

---

## 14. Referencias

Frankfurter. (s. f.). *Frankfurter API*. https://frankfurter.dev/

Mozilla Developer Network. (s. f.). *Fetch API*. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Mozilla Developer Network. (s. f.). *JavaScript*. https://developer.mozilla.org/en-US/docs/Web/JavaScript

Git. (s. f.). *Git documentation*. https://git-scm.com/doc

GitHub. (s. f.). *About pull requests*. https://docs.github.com/en/pull-requests
