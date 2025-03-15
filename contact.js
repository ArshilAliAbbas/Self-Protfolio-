document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

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
});
