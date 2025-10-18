v// ===== القائمة في الهاتف =====
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.setAttribute(
    "aria-expanded",
    nav.classList.contains("open") ? "true" : "false"
  );
});

// ===== التمرير السلس =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
      // إغلاق القائمة بعد الضغط على رابط
      nav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

// ===== ظهور العناصر عند التمرير =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .service-card, .project-card, .about-container").forEach(el => {
  observer.observe(el);
});
