const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

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
  images.map((image) => createImageElement(image)); // Gebruik van map
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
  images = [...images.filter((image) => image !== dataUrl)]; // Gebruik van spread operator
  localStorage.setItem("shotsImages", JSON.stringify(images));
}

document.addEventListener("DOMContentLoaded", loadImagesFromLocalStorage);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const { scrollY: scrollPos, innerWidth } = window; // Gebruik van destructuring
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const shotsMenu = document.querySelector("#shots-page");

  if (innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    shotsMenu.classList.remove("highlight");
    return;
  } else if (innerWidth > 960 && scrollPos < 2345) {
    shotsMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
