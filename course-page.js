const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!motionPreference.matches) {
  const revealItems = document.querySelectorAll(".course-detail .benefit, .course-detail .step, .course-detail .course-list li, .course-detail .faq details");
  if ("IntersectionObserver" in window) {
    revealItems.forEach((item) => item.classList.add("reveal"));
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  let framePending = false;
  window.addEventListener("scroll", () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      const offset = Math.min(window.scrollY, 520);
      document.documentElement.style.setProperty("--parallax-card", `${offset * -0.055}px`);
      document.documentElement.style.setProperty("--parallax-grid", `${offset * 0.12}px`);
      framePending = false;
    });
  }, { passive: true });
}
