const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("orderForm");
const message = document.getElementById("formMessage");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const product = String(data.get("product") || "").trim();
  const quantity = String(data.get("quantity") || "").trim();

  message.textContent =
    `Thank you, ${name}. Your enquiry for ${quantity} × ${product} has been prepared. ` +
    `Connect this form to your preferred email or business system when you are ready.`;

  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
