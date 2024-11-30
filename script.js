document.getElementById("boton").addEventListener("click", iniciar);

function iniciar() {
    let vidas = 6;
    let num = Math.floor(Math.random() * 100) + 1;

    while (vidas > 0) {
        let numU = prompt("Te quedan " + vidas + " vidas. Escribe un número:");

        if (numU == num) {
            alert("¡Felicidades, ganaste!");
            return; // Salimos de la función si ganas
        } else if (numU > num) {
            alert("Lo siento, el número que pensé es menor.");
        } else if (numU < num) {
            alert("Lo siento, el número que pensé es mayor.");
        }

        vidas--;
    }

    // Si llegamos aquí, se acabaron las vidas
    alert("Lo siento, perdiste. El número era: " + num);
}
