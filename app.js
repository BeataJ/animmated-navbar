const sections = document.querySelectorAll("section");
const bubbel = document.querySelector(".bubbel");
const gradients = [
  "linear-gradient(to right, #ffb88c, #de6262)",
  "linear-gradient(to right, #ffb88c, #de6262)",
  "linear-gradient(to right, #cbad6d, #d53369)"
];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);
