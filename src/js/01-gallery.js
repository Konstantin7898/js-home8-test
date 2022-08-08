// Add imports above this line
import { galleryItems } from "/src/js/gallery-items";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
const galleryArray = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join(" ");

galleryArray.insertAdjacentHTML("beforeend", imgEl);
console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
