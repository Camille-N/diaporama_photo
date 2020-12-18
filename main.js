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
    
    for (let i = 0; i < images.length; i++) {
        // Création de l'image
        const image = document.createElement("IMG");
        image.setAttribute("src", `img/${images[i]}`);
        image.setAttribute("width", "800");
        image.setAttribute("height", "533");
        image.className = "landscapeImg";
        slider.appendChild(image);

        // Création des boutons de navigation
        const rightButton = document.createElement("IMG");
        rightButton.setAttribute("src", "arrow-right.webp");
        slider.appendChild(rightButton);

        const leftButton = document.createElement("IMG");
        leftButton.setAttribute("src", "arrow-left.webp");
        slider.appendChild(leftButton);
    }

    var landscapeImage = document.getElementsByClassName("landscapeImg");
}


displayImg();