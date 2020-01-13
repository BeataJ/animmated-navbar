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

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAncher = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAncher.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
  });
}

sections.forEach(section => {
  observer.observe(section);
});
