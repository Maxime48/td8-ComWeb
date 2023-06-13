// index.js
import { loadPicture, loadResource } from "./photoloader.js";
import { displayPicture, displayCategory, displayComments } from "./ui.js";

const getPicture = (id) => {
    loadPicture(id).then(pictureData => {
        displayPicture(pictureData.photo);


        loadResource("https://webetu.iutnc.univ-lorraine.fr"+pictureData.links.categorie.href)
            .then(categoryData => displayCategory(categoryData.categorie));

        loadResource("https://webetu.iutnc.univ-lorraine.fr"+pictureData.links.comments.href)
            .then(commentsData => displayComments(commentsData));
    });
};

getPicture(105);
