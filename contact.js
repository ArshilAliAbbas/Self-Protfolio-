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

  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles";
  document.body.appendChild(particlesContainer);

  const numParticles = 100; // Number of particles
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particlesContainer.appendChild(particle);

    const size = Math.random() * 3 + 2; // Size between 2px and 5px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const duration = Math.random() * 5 + 5; // Animation duration between 5s and 10s
    particle.style.animation = `float ${duration}s linear infinite`;

    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;
  }

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
