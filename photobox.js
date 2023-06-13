import { load } from './gallery.js';
import { display_galerie } from './gallery_ui.js';

document.getElementById("load_gallery").addEventListener("click", () => {
    load('https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/')
        .then(gallery => display_galerie(gallery));
});
