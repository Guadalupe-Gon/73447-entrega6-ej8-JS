const numero = parseInt(prompt("Ingresa un número del 1 al 100:"));

if (numero >= 1 && numero <= 100) {
    console.log(`Tabla de multiplicar del ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;

        if (resultado > 1000) {
            console.log("El resultado supera 1000, deteniendo...");
            break;
        }

        console.log(`${numero} x ${i} = ${resultado}`);
    }
    
} else {

    console.log("Número incorrecto, ingresa un número válido entre 1 y 100.");

}