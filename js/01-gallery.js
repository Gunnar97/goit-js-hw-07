import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
let instance;
const galleryEl = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="#">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryEl);


galleryList.addEventListener("click", onClick);


function onClick(eve) {
  eve.preventDefault();
  if (!eve.target.classList.contains("gallery__image")) {
    return;
  }
instance = basicLightbox.create(
 `
<img src="${eve.target.dataset.source}" alt="${eve.target.description}">
`,
    {
        onShow: (instance) => {
            document.addEventListener("keydown", onEsc);
           
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', onEsc);
           

        }
    }
  );
  instance.show();
};

function onEsc(evt) {
    console.log(evt.key);
    if (evt.key !== "Escape") return;
    instance.close();
};

