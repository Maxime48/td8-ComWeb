import { load, next, prev, first, last } from './gallery.js';
import { display_galerie } from './gallery_ui.js';

document.getElementById("load_gallery").addEventListener("click", () => {
    load('https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/')
        .then(gallery => display_galerie(gallery));
});

document.getElementById("next_page").addEventListener("click", () => {
    next().then(gallery => display_galerie(gallery));
});

document.getElementById("previous_page").addEventListener("click", () => {
    prev().then(gallery => display_galerie(gallery));
});

document.getElementById("first_page").addEventListener("click", () => {
    first().then(gallery => display_galerie(gallery));
});

document.getElementById("last_page").addEventListener("click", () => {
    last().then(gallery => display_galerie(gallery));
});
