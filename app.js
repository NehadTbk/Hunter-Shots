const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const addButton = document.getElementById("add");
const imageInput = document.getElementById("imageInput");
const shotsContainer = document.getElementById("shotsContainer");

addButton.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      createImageElement(dataUrl);
      saveImageToLocalStorage(dataUrl);
    };
    reader.readAsDataURL(file);
  }
});

function saveImageToLocalStorage(dataUrl) {
  const images = JSON.parse(localStorage.getItem("shotsImages")) || [];
  images.push(dataUrl);
  localStorage.setItem("shotsImages", JSON.stringify(images));
}

function loadImagesFromLocalStorage() {
  const images = JSON.parse(localStorage.getItem("shotsImages")) || [];
  images.forEach((image) => {
    createImageElement(image);
  });
}

function createImageElement(dataUrl) {
  const shotItem = document.createElement("div");
  shotItem.classList.add("shots__item");

  const img = document.createElement("img");
  img.src = dataUrl;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    shotItem.remove();
    deleteImageFromLocalStorage(dataUrl);
  });

  shotItem.appendChild(img);
  shotItem.appendChild(deleteBtn);
  shotsContainer.appendChild(shotItem);
}

function deleteImageFromLocalStorage(dataUrl) {
  let images = JSON.parse(localStorage.getItem("shotsImages")) || [];
  images = images.filter((image) => image !== dataUrl);
  localStorage.setItem("shotsImages", JSON.stringify(images));
}

document.addEventListener("DOMContentLoaded", loadImagesFromLocalStorage);
