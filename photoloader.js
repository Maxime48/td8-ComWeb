// photoloader.js
import { API_URL } from "./config.js";

export const loadPicture = (idPicture) => {
    return fetch(`${API_URL}/photos/${idPicture}`)
        .then(response => response.json())
        .catch(error => console.error("Error:", error));
};

export const loadResource = (uri) => {
    return fetch(uri)
        .then(response => response.json())
        .catch(error => console.error("Error:", error));
};
