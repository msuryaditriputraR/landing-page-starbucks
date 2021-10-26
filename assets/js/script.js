/* === DOM SELECTOR === */
const thumbs = document.querySelectorAll(".thumb");
const image = document.getElementById("home-img");

// LOOPING THUMBS
thumbs.forEach((thumb) => {
  // Event Click
  thumb.addEventListener("click", function () {
    // Get Data IMG
    const img = this.getAttribute("data-img");
    // Get Date Color
    const color = this.getAttribute("data-color");

    // Change image
    image.src = `assets/img/${img}.png`;
    // change main color
    document.documentElement.style.setProperty("--main-color", `#${color}`);
  });
});
