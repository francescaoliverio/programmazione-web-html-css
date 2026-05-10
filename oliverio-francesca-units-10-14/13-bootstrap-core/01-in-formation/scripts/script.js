// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  
  // Handle Bootstrap form validation
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Map Range Input numbers to CEFR Language Levels (A1 -> C2)
  const rangeInput = document.getElementById('englishLevel');
  const levelOutput = document.getElementById('levelOutput');
  
  const cefrLevels = {
    "1": "A1 (Beginner)",
    "2": "A2 (Elementary)",
    "3": "B1 (Intermediate)",
    "4": "B2 (Upper Intermediate)",
    "5": "C1 (Advanced)",
    "6": "C2 (Proficient)"
  };

  // Listen for changes on the range slider
  rangeInput.addEventListener('input', (event) => {
    const numericValue = event.target.value;
    levelOutput.textContent = cefrLevels[numericValue];
  });
  
});