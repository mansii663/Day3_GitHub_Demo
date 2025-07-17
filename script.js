//Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});

//Form Submit Alert
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon");
    contactForm.reset();
});