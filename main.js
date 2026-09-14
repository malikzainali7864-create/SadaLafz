document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var nlForm = document.querySelector(".nl-form");
  if (nlForm) {
    nlForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = nlForm.querySelector("input");
      var note = nlForm.parentElement.querySelector(".nl-confirm");
      if (input && input.value) {
        input.value = "";
        if (note) note.textContent = "Thanks — you're subscribed.";
      }
    });
  }

  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = contactForm.querySelector(".form-msg");
      if (msg) msg.textContent = "Thanks for reaching out — we'll reply within 2 business days.";
      contactForm.reset();
    });
  }
});
