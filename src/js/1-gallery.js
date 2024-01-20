import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));



//SimpleLightBox 
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
});


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery-item">
   <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join("")
}


