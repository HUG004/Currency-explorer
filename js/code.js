// ============================================================
// CURRENCY EXPLORER · STARTER PROJECT
// Archivo principal de trabajo para las misiones de JavaScript
// ============================================================

// 1. REFERENCIAS AL DOM
const cantidad = document.querySelector("#cantidad");
const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");
const btnConvertir = document.querySelector("#convertir");
const btnIntercambiar = document.querySelector("#intercambiar");
const resultado = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const detalleTasa = document.querySelector("#detalleTasa");

// 2. EVENTOS
btnConvertir.addEventListener("click", convertirMoneda);
btnIntercambiar.addEventListener("click", intercambiarMonedas);

// 3. FUNCIÓN PRINCIPAL
async function convertirMoneda() {
  // Misiones guiadas 1-3: ya existe un flujo mínimo funcional EUR -> USD.
  // A partir de la Misión 4 debes convertirlo en una solución dinámica.

  //MISION 7. VALIDACION DE CANTIDADES
  const textoCantidad = cantidad.value.trim();
  const valor = Number(textoCantidad);


//campo vacio
  if (textoCantidad ==="") {
    mostrarError("Debes ingresar una cantidad.");
    return;
  }
//numero invalido
  if(!Number.isFinite(valor)){
    mostrarError("Ingresa un número valido");
    return;
  }
//cero o numero negativo
  if(valor <= 0){
    mostrarError("Ingresa un número mayor a cero");
    return;
  }

  // TODO · MISIÓN 04: reemplazar EUR y USD por los valores elegidos en los <select>.
  const monedaOrigen = "EUR";
  const monedaDestino = "USD";

  const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen}/${monedaDestino}`;

  try {
    // MISIÓN 08: Activar estado de carga
  btnConvertir.disabled = true;
  btnIntercambiar.disabled = true;
  cantidad.disabled = true;
  origen.disabled = true;
  destino.disabled = true;

  btnConvertir.textContent = "Consultando...";

  resultado.classList.remove("error");
  resultado.classList.add("loading"); // AQUÍ VA

  resultadoTexto.textContent = "Consultando...";
  detalleTasa.textContent = "Obteniendo el tipo de cambio...";

  // MISIÓN 09: Consultar la API
    const respuesta = await fetch(url);

    // Verificar que la respuesta HTTP sea correcta
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    // Convertir la respuesta JSON a objeto JavaScript
    const datos = await respuesta.json();

    // Verificar que la tasa recibida sea válida
    if (typeof datos.rate !== "number" ||
        !Number.isFinite(datos.rate) ||
        datos.rate <= 0) {
      throw new Error("La API devolvió un tipo de cambio inválido.");
    }
    const conversion = valor * datos.rate;

    resultado.classList.remove("error");
    resultadoTexto.textContent = `${valor.toFixed(2)} ${monedaOrigen} = ${conversion.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent = `1 ${monedaOrigen} = ${datos.rate} ${monedaDestino} · ${datos.date}`;

  } catch (error) {
  // MISIÓN 09: Manejo de errores

  console.error("Error al consultar Frankfurter:", error);

  if (error instanceof TypeError) {
    mostrarError(
      "Error de conexión. Verifica tu Internet e inténtalo nuevamente."
    );

  } else if (error.message.startsWith("Error HTTP:")) {
    mostrarError(
      `No se pudo consultar la API. ${error.message}`
    );

  } else if (error instanceof SyntaxError) {
    mostrarError(
      "La API devolvió una respuesta JSON incorrecta."
    );

  } else {
    mostrarError(
      error.message || "Ocurrió un error inesperado."
    );
  }

    } finally {
      // MISIÓN 08: Restaurar controles
      btnConvertir.disabled = false;
      btnIntercambiar.disabled = false;
      cantidad.disabled = false;
      origen.disabled = false;
      destino.disabled = false;

      btnConvertir.textContent = "Convertir";
        resultado.classList.remove("loading"); 

    }
}

function intercambiarMonedas() {
  // TODO · MISIÓN 06:
  // 1) guardar temporalmente el valor de origen
  // 2) intercambiar origen.value y destino.value
  // 3) volver a calcular
  mostrarError("Misión 06 pendiente: implementa el intercambio de monedas.");
}

// 4. UTILIDADES DE INTERFAZ
function mostrarError(mensaje) {
  resultado.classList.add("error");
  resultadoTexto.textContent = mensaje;
  detalleTasa.textContent = "Revisa los datos e inténtalo nuevamente.";
}

// PISTA PARA EL RETO:
// origen.value        -> moneda seleccionada como origen
// destino.value       -> moneda seleccionada como destino
// cantidad.value      -> texto escrito en el input
// Number(...)         -> convierte texto a número
// response.ok         -> indica si la respuesta HTTP fue satisfactoria
// resultado.textContent -> permite modificar texto del DOM
