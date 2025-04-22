const boton = document.getElementById('botonDado');
const imagenDado = document.getElementById('imagen-dado');
const textoBoton = document.getElementById('texto-boton');
const historialElemento = document.getElementById('historial'); // Elemento donde mostraremos el historial

let primerClick = true;
let historial = []; // Array para guardar los números sacados
let numeroAnterior = 0; // Variable para almacenar el número de la tirada anterior

boton.addEventListener('click', () => {
    if (primerClick) {
        textoBoton.style.display = 'none';
        imagenDado.style.display = 'block';
        primerClick = false;
    }

    // Generar un número aleatorio entre 1 y 6
    const numeroRandom = Math.floor(Math.random() * 6) + 1;

    // Actualizar historial
    historial.push(numeroRandom);

    // Mostrar la imagen del dado
    imagenDado.classList.remove('flip');
    void imagenDado.offsetWidth; // Forzar el flip
    imagenDado.classList.add('flip');

    // Cambiar la imagen del dado después de la animación
    imagenDado.addEventListener('animationend', () => {
        imagenDado.src = `assets/dado${numeroRandom}.png`;
    });

    if (numeroAnterior !== null) {
        console.log(`Número anterior: ${numeroAnterior}`);
    }

    // Obtener el número que más ha salido
    const numeroMasFrecuente = obtenerNumeroMasFrecuente(historial);

    // Actualizar el historial en el texto
    historialElemento.innerHTML = `Número anterior: ${numeroAnterior}<br>Número más frecuente: ${numeroMasFrecuente}`;

    // Actualizar el número anterior para la siguiente tirada
    numeroAnterior = numeroRandom;
});

// Función para obtener el número más frecuente del historial
function obtenerNumeroMasFrecuente(historial) {
    const frecuencia = {};
    historial.forEach((numero) => {
        frecuencia[numero] = (frecuencia[numero] || 0) + 1;
    });

    let numeroMasFrecuente = null;
    let maxFrecuencia = 0;
    for (const numero in frecuencia) {
        if (frecuencia[numero] > maxFrecuencia) {
            numeroMasFrecuente = numero;
            maxFrecuencia = frecuencia[numero];
        }
    }

    return numeroMasFrecuente;
}
