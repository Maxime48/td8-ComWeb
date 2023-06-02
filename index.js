// index.js
import { loadPicture, loadResource } from "./photoloader.js";
import { displayPicture, displayCategory, displayComments } from "./ui.js";

const getPicture = (id) => {
    loadPicture(id).then(pictureData => {
        displayPicture(pictureData.photo);

        loadResource(pictureData.links.categorie.href)
            .then(categoryData => displayCategory(categoryData));

        loadResource(pictureData.links.comments.href)
            .then(commentsData => displayComments(commentsData));
    });
};

getPicture(105);
