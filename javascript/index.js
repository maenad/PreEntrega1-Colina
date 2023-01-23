console.log('Primera entrega! - Calculadora y registro de gastos')

let ingresarCantidad
let rollover;

function rolloverInicial () {  // Le pregunta al usuario con cuánto dinero comenzamos a llevar la cuenta de gastos y lo imprime en consola/pantalla.

    rollover = parseFloat(prompt("¿Con cuánto dinero comenzamos?"));

    // Da visibilidad de la cantidad de dinero con la que comenzamos.
    console.log("DINERO INICIAL $" + rollover);

} rolloverInicial()

function operacionIngresos (ingresarCantidad) { //Pide los datos de cada gasto/ingreso

    ingresarCantidad = parseFloat(prompt("Ingresa una cantidad")) // Cantidad de dinero

    let tipoOperacion = prompt("¿Estás agregando un gasto o una entrada de dinero? Escribe '+' si agregas dinero o '-' si estás agregando un gasto"); // Pide indicar si es un ingreso o un egreso, lo ideal es que en el producto final se pueda escoger con botones.

    let razon = prompt("Descripción (sueldo, comida...)")  // Detalle de la operación

    if (tipoOperacion === "-") { //Muestra el gasto
        gasto = rollover - ingresarCantidad
        console.log("- $" + ingresarCantidad + " ~ " + razon);    
    }

    else if (tipoOperacion === "+") { //Muestra el ingreso
        gasto = rollover + ingresarCantidad
        console.log("+ $" + ingresarCantidad + " ~ " + razon);
    }

    else { // Evita errores de otros tipos de operación.
        alert("Por favor ingresa una operación correcta");
    }
} operacionIngresos()


do { // Pide que nuevos datos
    operacionIngresos()
}

while (operacionIngresos() < 3); // Para de pedir datos luego de 3 veces.

console.log("TOTAL ACTUAL $" + gasto)  // Muestra el total






