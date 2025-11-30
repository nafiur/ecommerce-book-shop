// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
      delay: 0
    });
  }
});
