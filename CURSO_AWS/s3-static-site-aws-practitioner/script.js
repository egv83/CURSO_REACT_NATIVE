const items = [
  { src: "img/aws-practitioner.png", alt: "AWS Certified Cloud Practitioner", label: "AWS Certified Cloud Practitioner" },
  { src: "img/krake.png", alt: "KrakeDev", label: "KrakeDev" },
  { src: "img/clearminds.png", alt: "Clear Minds", label: "Clear Minds" }
];

let idx = 0;

const logo = document.getElementById("logo");
const counter = document.getElementById("counter");
const label = document.getElementById("label");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function render() {
  const item = items[idx];
  logo.src = item.src;
  logo.alt = item.alt;
  counter.textContent = `${idx + 1} / ${items.length}`;
  label.textContent = item.label;
}

function next() {
  idx = (idx + 1) % items.length;
  render();
}

function prev() {
  idx = (idx - 1 + items.length) % items.length;
  render();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// Soporte con teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// Primer render por si cambias el orden o el src inicial
render();
