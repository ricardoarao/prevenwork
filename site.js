document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-track]");
  if (!link || typeof window.gtag !== "function") return;

  window.gtag("event", link.dataset.track, {
    link_label: link.dataset.trackLabel || link.textContent.trim(),
    link_location: link.dataset.trackLocation || "site",
    link_destination: link.href
  });
});

const menuButton = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector("#home-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  menu?.classList.toggle("is-open", !isOpen);
});

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.matchMedia("(max-width: 700px)").matches) {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Abrir menu");
  }
});
