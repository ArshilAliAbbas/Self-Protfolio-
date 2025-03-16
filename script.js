document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.createElement("div");
  customCursor.id = "custom-cursor";
  document.body.appendChild(customCursor);

  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mousedown", () => {
    customCursor.classList.add("active");
  });

  document.addEventListener("mouseup", () => {
    customCursor.classList.remove("active");
  });

  const nightSky = document.getElementById("night-sky");

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    nightSky.appendChild(star);
  }

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      console.log("Form Data:", data); // For debugging

      const successMessage = document.createElement("p");
      successMessage.textContent = "Your message has been sent successfully!";
      successMessage.style.color = "#00ffff";
      successMessage.style.marginTop = "20px";
      contactForm.appendChild(successMessage);

      contactForm.reset();

      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Custom Mouse Pointer
  const customCursor = document.createElement("div");
  customCursor.id = "custom-cursor";
  document.body.appendChild(customCursor);

  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mousedown", () => {
    customCursor.classList.add("active");
  });

  document.addEventListener("mouseup", () => {
    customCursor.classList.remove("active");
  });
});
