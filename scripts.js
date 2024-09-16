// Select elements for animation
const brandExperience = document.querySelector(".brand-experience");

// Function to change the color of "Brand Experience" based on mouse position
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  // Calculate color based on mouse position
  const percentX = x / window.innerWidth;
  const percentY = y / window.innerHeight;
  const r = Math.round(255 * percentX);
  const g = Math.round(255 * percentY);
  const b = Math.round(255 * (1 - percentX));

  // Apply color changes only to "Brand Experience"
  gsap.to(brandExperience, {
    color: `rgb(${r}, ${g}, ${b})`,
    duration: 0.2
  });
});