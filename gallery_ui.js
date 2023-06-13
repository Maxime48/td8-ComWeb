import { getPicture } from './index.js';

export function display_galerie(gallery) {
    let galleryContainer = document.getElementById("gallery_container");
    galleryContainer.innerHTML = '';

    for(let photo of gallery) {
        let vignette = document.createElement("div");
        vignette.className = "vignette";

        let img = document.createElement("img");
        img.setAttribute("data-photoId", photo.photo.id);
        img.src = "https://webetu.iutnc.univ-lorraine.fr/" + photo.photo.thumbnail.href;

        vignette.appendChild(img);
        galleryContainer.appendChild(vignette);

        // add click event listener to the image
        img.addEventListener('click', function() {
            getPicture(photo.photo.id);
        });
    }
}