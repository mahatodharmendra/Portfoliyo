const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-grid figure");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      item.classList.toggle(
        "hidden",
        filter !== "all" && item.dataset.category !== filter
      );
    });
  });
});

window.addEventListener("scroll", () => {
  let current = null;

  sections.forEach((section) => {
    if (section.offsetTop <= window.scrollY + 140) {
      current = section;
    }
  });

  if (!current) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const originalText = button.innerHTML;

  button.innerHTML = "Message Ready";
  setTimeout(() => {
    button.innerHTML = originalText;
    event.currentTarget.reset();
  }, 1400);
});
