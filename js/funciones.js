var slider_content = document.getElementById('banners');

var image = [
    "El niño pez.jpg",
    "Silvia Prieto.jpg",
    "Wakolda.jpg",
    "Tan de repente.jpg",
    "El angel.jpg",
    "La niña santa.jpg"
];

var i = 0;

function nextImage() {
    if (slider_content) {
        i = (i + 1) % image.length;
        slider_content.innerHTML = '<img class="imagenes-banners" src="img/' + image[i] + '" alt="Destacada">';
    }
}

function beforeImage() {
    if (slider_content) {
        i = (i - 1 + image.length) % image.length;
        slider_content.innerHTML = '<img class="imagenes-banners" src="img/' + image[i] + '" alt="Destacada">';
    }
}

// Avance automático cada 3.5 segundos si existe el slider en la página
if (slider_content) {
    setInterval(nextImage, 3500);
}
