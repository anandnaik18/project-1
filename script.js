function loadSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });

  // Show the selected section
  document.getElementById(sectionId).classList.remove('hidden');
}

// Show dashboard by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadSection('dashboard');
});


