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

  // Particle Animation
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles";
  document.body.appendChild(particlesContainer);

  const numParticles = 100; // Number of particles
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particlesContainer.appendChild(particle);

    // Randomize particle position and size
    const size = Math.random() * 3 + 2; // Size between 2px and 5px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Animate particles
    const duration = Math.random() * 5 + 5; // Animation duration between 5s and 10s
    particle.style.animation = `float ${duration}s linear infinite`;

    // Randomize animation delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      console.log("Form Data:", data); // For debugging

      // Display success message
      const successMessage = document.createElement("p");
      successMessage.textContent = "Your message has been sent successfully!";
      successMessage.style.color = "#00ffff";
      successMessage.style.marginTop = "20px";
      contactForm.appendChild(successMessage);

      // Clear form fields
      contactForm.reset();

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
  }
});
