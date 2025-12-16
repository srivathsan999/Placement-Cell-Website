// Theme Toggle with localStorage
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  // Update toggle button text
  function updateToggleText() {
    if (themeToggle) {
      themeToggle.textContent = html.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    }
  }
  
  updateToggleText();
  
  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      html.classList.toggle('dark');
      const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
      updateToggleText();
    });
  }
})();

