const loader = document.querySelector(".loader.center");

setTimeout(() => {
  loader.style.top = "-200vh";
  loader.style.opacity = "0";
}, 3000);

setTimeout(() => {
  loader.style.display = "none";
}, 4000);
