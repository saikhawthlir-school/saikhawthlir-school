document.addEventListener('DOMContentLoaded', function() {
  // ========== MOBILE MENU ==========
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
  });

  // ========== GOOGLE SITE SEARCH ==========
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchBox = document.querySelector('.search-box');
  const content = document.getElementById('searchable');

  // Button hmet chuan search box a lo in hawng
  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if(searchBox.classList.contains('active')) searchInput.focus();
  });

  // Type chuan highlight
  searchInput.addEventListener('keyup', () => {
    let filter = searchInput.value.toLowerCase();
    let originalText = content.innerHTML;
    
    // highlight hlui delete
    originalText = originalText.replace(/<mark class="highlight">(.*?)<\/mark>/gi, '$1');
    
    if(filter.length > 1){
      let regex = new RegExp(filter, 'gi');
      originalText = originalText.replace(regex, `<mark class="highlight">$&</mark>`);
    }
    content.innerHTML = originalText;
  });
});
