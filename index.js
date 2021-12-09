let button = document.querySelector(".hamburger-btn"),
    header = document.querySelector(".header");

button.addEventListener("click", () => {
    header.classList.toggle("hamburger");
});