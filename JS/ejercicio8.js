let total = 0;

while (total < 100) {
    
    let num = +prompt("Introduce un número entero:");

    if (num <= 100) {

        total = total + num; 
        console.log(`Acumulado: ${total}`); 

    } else {
        console.log("Por favor, introduce un número entero válido.");
    }
}

console.log(`El total acumulado es: ${total}. Llegaste al límite requerido.`);