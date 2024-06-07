# Hunter-Shots

- Elementen selecteren
  const menu = document.querySelector("#mobile-menu");

- Elementen manipuleren
  const shotItem = document.createElement('div');
  shotItem.classList.add('shots\_\_item');

menu.classList.toggle("is-active");

- Event aan een element koppelen
  menu.addEventListener("click", mobileMenu);

- Formulier valideren
  if (file) { /_ ... _/ }

- Gebruiken van een constante
  const shotsContainer = document.getElementById('shotsContainer');

- Destructuring
  const { scrollY: scrollPos, innerWidth } = window;

- Spread & Rest operator
  images = [...images.filter((image) => image !== dataUrl)];

- Gebruiken van template literals
  const message = `Image URL: ${dataUrl}`;

- Iteration over een array
  images.forEach((image) => {
  createImageElement(image);
  });

- Arrow function
  const highlightMenu = () => {
  };

addButton.addEventListener("click", () => { imageInput.click(); });

- Callback function
  reader.onload = (e) => {
  const dataUrl = e.target.result;
  createImageElement(dataUrl);
  saveImageToLocalStorage(dataUrl);
  };

- Consumer methods
  images.map((image) => createImageElement(image));

- JSON manipuleren en weergeven
  const images = JSON.parse(localStorage.getItem('shotsImages')) || [];

localStorage.setItem("shotsImages", JSON.stringify(images));

- Gebruiken van een flexbox of CSS grid
  .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  }

.main\_\_container {
display: grid;
grid-template-columns: 1fr 1fr;
}

- Gebruik van LocalStorage
  localStorage.setItem('shotsImages', JSON.stringify(images));

const images = JSON.parse(localStorage.getItem("shotsImages")) || [];
