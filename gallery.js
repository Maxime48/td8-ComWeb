import { loadResource } from './photoloader.js';

let galleryData = [];

export function load(url) {
    return loadResource(url)
        .then(data => {
            galleryData = data.photos;
            return galleryData;
        })
        .catch(error => console.error('Erreur lors du chargement de la galerie : ', error));
}
