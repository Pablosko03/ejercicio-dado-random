const boton = document.getElementById('botonDado');
const imagenDado = document.getElementById('imagen-dado');
const textoBoton = document.getElementById('texto-boton');

let primerClick = true;

boton.addEventListener('click', () => {
    if (primerClick) {
        textoBoton.style.display = 'none';
        imagenDado.style.display = 'block';
        primerClick = false;
    }

    imagenDado.classList.remove('flip');
    void imagenDado.offsetWidth;
    imagenDado.classList.add('flip');

    setTimeout(() => {
        const numeroRandom = Math.floor(Math.random() * 6) + 1;
        imagenDado.src = `assets/dado${numeroRandom}.png`;
    }, 600);
});
