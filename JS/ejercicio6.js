let filas = parseInt(prompt("Introduce el número de filas para el triángulo invertido:"));


if (isNaN(filas) || filas <= 0) {
    console.log("Por favor, introduce un número válido mayor que 0.");

} else {
    let triangulo = "";

    for (let i = filas; i > 0; i--) {
        triangulo += "*".repeat(i) + "\n";
    }

    console.log(triangulo);
}