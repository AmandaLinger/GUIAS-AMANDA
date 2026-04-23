document.getElementById("footer").innerHTML = `
  <p>© 2026 - Guias Sonner</p>
`;



const btn = document.getElementById("toggleBtn");
const menu = document.getElementById("menuLateral");

btn.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});