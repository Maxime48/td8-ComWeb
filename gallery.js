import { loadResource } from './photoloader.js';

let galleryData = [];
let navigationLinks = {};

export function load(url) {
    return loadResource(url)
        .then(data => {
            galleryData = data.photos;
            navigationLinks = data.links; // Stockez les liens de navigation
            return galleryData;
        })
        .catch(error => console.error('Erreur lors du chargement de la galerie : ', error));
}

export function next() {
    return load('https://webetu.iutnc.univ-lorraine.fr' + navigationLinks.next.href);
}

export function prev() {
    return load('https://webetu.iutnc.univ-lorraine.fr' + navigationLinks.prev.href);
}

export function first() {
    return load('https://webetu.iutnc.univ-lorraine.fr' + navigationLinks.first.href);
}

export function last() {
    return load('https://webetu.iutnc.univ-lorraine.fr' + navigationLinks.last.href);
}
