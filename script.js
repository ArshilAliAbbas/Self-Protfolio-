document.addEventListener("DOMContentLoaded", () => {
  // Night Sky Falling Stars
  const nightSky = document.getElementById("night-sky");

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    nightSky.appendChild(star);
  }

  // Shooting Star Pointer
  const shootingStar = document.getElementById("shooting-star");
  const shootingTrail = document.getElementById("shooting-trail");

  document.addEventListener("mousemove", (e) => {
    // Update shooting star position
    shootingStar.style.left = `${e.clientX}px`;
    shootingStar.style.top = `${e.clientY}px`;

    // Update shooting trail position and angle
    const angle = Math.atan2(e.movementY, e.movementX);
    shootingTrail.style.left = `${e.clientX}px`;
    shootingTrail.style.top = `${e.clientY}px`;
    shootingTrail.style.transform = `rotate(${angle}rad) translate(-50%, -50%)`;
    shootingTrail.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    // Hide the trail when the mouse leaves the window
    shootingTrail.style.opacity = "0";
  });

  // Smooth Scroll for Navigation Links
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
});
document.addEventListener("DOMContentLoaded", () => {
  // Night Sky Falling Stars
  const nightSky = document.getElementById("night-sky");

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    nightSky.appendChild(star);
  }

  // Shooting Star Pointer
  const shootingStar = document.getElementById("shooting-star");
  const shootingTrail = document.getElementById("shooting-trail");

  document.addEventListener("mousemove", (e) => {
    // Update shooting star position
    shootingStar.style.left = `${e.clientX}px`;
    shootingStar.style.top = `${e.clientY}px`;

    // Update shooting trail position and angle
    const angle = Math.atan2(e.movementY, e.movementX);
    shootingTrail.style.left = `${e.clientX}px`;
    shootingTrail.style.top = `${e.clientY}px`;
    shootingTrail.style.transform = `rotate(${angle}rad)`;
    shootingTrail.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    // Hide the trail when the mouse leaves the window
    shootingTrail.style.opacity = "0";
  });

  // Smooth Scroll for Navigation Links
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
});
document.addEventListener("DOMContentLoaded", () => {
  // Night Sky Falling Stars
  const nightSky = document.getElementById("night-sky");

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    nightSky.appendChild(star);
  }

  // Shooting Star Pointer
  const shootingStar = document.getElementById("shooting-star");
  const shootingTrail = document.getElementById("shooting-trail");

  document.addEventListener("mousemove", (e) => {
    // Update shooting star position
    shootingStar.style.left = `${e.clientX}px`;
    shootingStar.style.top = `${e.clientY}px`;

    // Update shooting trail position and angle
    const angle = Math.atan2(e.movementY, e.movementX);
    shootingTrail.style.left = `${e.clientX}px`;
    shootingTrail.style.top = `${e.clientY}px`;
    shootingTrail.style.transform = `rotate(${angle}rad)`;
    shootingTrail.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    // Hide the trail when the mouse leaves the window
    shootingTrail.style.opacity = "0";
  });

  // Smooth Scroll for Navigation Links
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
});
