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
      const img = document.createElement("img");
      img.src = e.target.result;
      shotsContainer.appendChild(img);
      saveImageToLocalStorage(e.target.result);
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
    const img = document.createElement("img");
    img.src = image;
    shotsContainer.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", loadImagesFromLocalStorage);
