// Dropdown Menu Functionality
(function() {
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      const menu = dropdown.querySelector('.dropdown-menu');
      const button = dropdown.querySelector('.dropdown-button');
      
      if (menu && button && !dropdown.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  });

  // Toggle dropdown on button click
  document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    
    dropdownButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = this.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (menu) {
          // Close all other dropdowns
          document.querySelectorAll('.dropdown-menu').forEach(function(otherMenu) {
            if (otherMenu !== menu) {
              otherMenu.classList.remove('show');
            }
          });
          
          // Toggle current dropdown
          menu.classList.toggle('show');
        }
      });
    });
  });
})();

