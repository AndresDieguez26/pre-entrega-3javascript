// PRE-ENTREGA 3
// Funciones e Integración de Lógica
// Simulador de rendimiento de jugadoras de fútbol 6

const PUNTAJE_MINIMO = 1;
const PUNTAJE_MAXIMO = 10;

let cantidadJugadoras = 0;
let sumaPuntajes = 0;
let continuar;

// FUNCIÓN 1 - Función declarada con parámetro y return
// Valida que el nombre ingresado no esté vacío.
function validarNombre(nombre) {
    while (nombre === null || nombre.trim() === "") {
        alert("Tenés que ingresar un nombre válido.");
        nombre = prompt("Ingresá nuevamente el nombre de la jugadora:");
    }

    return nombre;
}

// FUNCIÓN 2 - Función declarada con parámetros y return
// Solicita y valida un puntaje entre el mínimo y el máximo.
function validarPuntaje(nombre, minimo, maximo) {
    let puntaje = Number(
        prompt(`Ingresá el puntaje de ${nombre} (${minimo} al ${maximo}):`)
    );

    while (
        Number.isNaN(puntaje) ||
        puntaje < minimo ||
        puntaje > maximo
    ) {
        alert(`El puntaje debe ser un número entre ${minimo} y ${maximo}.`);

        puntaje = Number(
            prompt(`Volvé a ingresar el puntaje de ${nombre}:`)
        );
    }

    return puntaje;
}

// FUNCIÓN 3 - Función flecha
// Evalúa el rendimiento individual de una jugadora.
const mostrarRendimiento = (nombre, puntaje) => {
    let mensaje;

    if (puntaje >= 9) {
        mensaje = `${nombre}: rendimiento excelente.`;
    } else if (puntaje >= 7) {
        mensaje = `${nombre}: muy buen rendimiento.`;
    } else if (puntaje >= 5) {
        mensaje = `${nombre}: rendimiento regular.`;
    } else {
        mensaje = `${nombre}: necesita mejorar.`;
    }

    alert(mensaje);
    console.log(`${mensaje} Puntaje: ${puntaje}.`);
};

// FUNCIÓN 4 - Función declarada con parámetro y return
// Evalúa el promedio general del equipo.
function evaluarEquipo(promedio) {
    if (promedio >= 8) {
        return "El equipo tiene un rendimiento competitivo.";
    } else if (promedio >= 6) {
        return "El equipo tiene un rendimiento aceptable.";
    } else {
        return "El equipo necesita seguir entrenando.";
    }
}

// CICLO PRINCIPAL
do {
    let nombre = prompt("Ingresá el nombre de la jugadora:");

    // Invocación de la función validarNombre.
    nombre = validarNombre(nombre);

    // Invocación de la función validarPuntaje.
    let puntaje = validarPuntaje(
        nombre,
        PUNTAJE_MINIMO,
        PUNTAJE_MAXIMO
    );

    cantidadJugadoras++;
    sumaPuntajes += puntaje;

    // Invocación de la función flecha.
    mostrarRendimiento(nombre, puntaje);

    continuar = confirm("¿Querés evaluar a otra jugadora?");
} while (continuar);

// RESULTADO FINAL
const promedio = sumaPuntajes / cantidadJugadoras;

// Invocación de la función evaluarEquipo.
const evaluacionEquipo = evaluarEquipo(promedio);

const resumen = `
RESUMEN FINAL

Jugadoras evaluadas: ${cantidadJugadoras}
Promedio del equipo: ${promedio.toFixed(2)}
${evaluacionEquipo}
`;

alert(resumen);
console.log(resumen);
