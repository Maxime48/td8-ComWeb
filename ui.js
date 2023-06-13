// ui.js
export const displayPicture = (pictureData) => {
    const imageSection = document.querySelector("#la_photo");

    const imgElement = imageSection.querySelector("img");
    imgElement.src = "https://webetu.iutnc.univ-lorraine.fr"+pictureData.url.href;

    const titleElement = imageSection.querySelector("h4");
    titleElement.textContent = pictureData.titre;

    const descriptionElement = imageSection.querySelector("p");
    descriptionElement.textContent = `${pictureData.format}, ${pictureData.width} x ${pictureData.height}`;

};

export const displayCategory = (categoryData) => {
    const categoryElement = document.querySelector("#la_categorie");
    categoryElement.textContent = `categorie : ${categoryData.nom}`;
};

export const displayComments = (commentsData) => {
    const commentsList = document.querySelector("#les_commentaires");

    commentsData.comments.forEach((comment) => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${comment.pseudo}</b> :<br> ${comment.content}`;
        commentsList.appendChild(li);
    });
};
