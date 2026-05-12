// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  // Initialize all tooltips
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(el => new bootstrap.Tooltip(el));

});
