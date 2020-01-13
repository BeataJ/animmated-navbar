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
    console.log(className);
  });
}

sections.forEach(section => {
  observer.observe(section);
});
