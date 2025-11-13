// --- Effet machine à écrire sur ton nom ---
const titre = document.querySelector(".slider-content h1");
if (titre) {
  const texte = titre.textContent;
  titre.textContent = "";
  let i = 0;

  function ecrire() {
    if (i < texte.length) {
      titre.textContent += texte.charAt(i);
      i++;
      setTimeout(ecrire, 100);
    }
  }
  window.addEventListener("load", ecrire);
}


// --- Apparition fluide au scroll (sans toucher ton CSS) ---
const elements = document.querySelectorAll(".section, .skill");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.8s ease-out";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
});


// --- Bouton "remonter en haut" ---
const topBtn = document.createElement("button");
topBtn.textContent = "⬆️";
document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 15px",
  fontSize: "20px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "none",
  boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// --- Animation subtile au survol des compétences ---
document.querySelectorAll(".skill img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.3s ease";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});