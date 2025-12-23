// Mobile Menu Functionality
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButtons = document.querySelectorAll('.hamburger-button');
    const mobileMenus = document.querySelectorAll('.mobile-menu');
    
    hamburgerButtons.forEach(function(button, index) {
      const menu = mobileMenus[index];
      
      if (button && menu) {
        button.addEventListener('click', function(e) {
          e.stopPropagation();
          button.classList.toggle('active');
          menu.classList.toggle('active');
        });
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      mobileMenus.forEach(function(menu) {
        const button = menu.previousElementSibling?.querySelector('.hamburger-button') || 
                      document.querySelector('.hamburger-button');
        
        if (menu && !menu.contains(event.target) && 
            button && !button.contains(event.target)) {
          menu.classList.remove('active');
          if (button) button.classList.remove('active');
        }
      });
    });
    
    // Close menu when clicking on a link (but not dropdown buttons)
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Don't close menu if clicking on dropdown button (it toggles the dropdown instead)
        if (link.classList.contains('mobile-dropdown-button')) {
          e.stopPropagation();
          return;
        }
        // Close menu for navigation links (including dropdown menu items)
        mobileMenus.forEach(function(menu) {
          menu.classList.remove('active');
        });
        hamburgerButtons.forEach(function(button) {
          button.classList.remove('active');
        });
      });
    });
  });
})();

