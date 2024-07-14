// main.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Loading animation
document.addEventListener("DOMContentLoaded", function() {
  // Start measuring load time
  const startTime = new Date().getTime();

  // Check if all content is loaded
  window.addEventListener("load", function() {
    const endTime = new Date().getTime();
    const loadTime = endTime - startTime;

    // Calculate minimum loading time based on network speed
    const minimumLoadingTime = 2000; // 2 seconds for fast connections
    const adjustedLoadingTime = Math.max(minimumLoadingTime, loadTime);

    // Hide the loading animation after the adjusted loading time
    setTimeout(function() {
      const loadingElement = document.getElementById("loading");
      if (loadingElement) {
        loadingElement.style.display = "none";
      }
    }, adjustedLoadingTime);
  });
});