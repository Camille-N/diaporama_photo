// Source de données
var images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

// Position de l'image en cours
var currentImagePosition = 0;

const slider = document.body.querySelector('#slider');

// Fonction pour afficher l'image
function displayImg() {
    // Création de l'image
    for (let i = 0; i < images.length; i++) {
        const image = document.createElement("IMG");
        image.setAttribute("src", `img/${images[i]}`);
        image.setAttribute("width", "800");
        image.setAttribute("height", "533");
        image.className = "landscapeImg";
        slider.appendChild(image);
    }

    var landscapeImage = document.getElementsByClassName("landscapeImg");

}

displayImg();