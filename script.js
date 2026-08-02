document.addEventListener('DOMContentLoaded', function() {
  // ========== 1. SIDE MENU TOGGLE ==========
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links'); // side-menu id
  const overlay = document.getElementById('overlay');

  function closeMenu() {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
    menuToggle.innerHTML = '☰';
  }

  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      overlay.classList.toggle('show');
      menuToggle.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
    });
  }

  // Overlay hmet chuan menu a in khar
  if(overlay){
    overlay.addEventListener('click', closeMenu);
  }

  // Menu link hmet chuan a in khar nghal
  const menuLinks = document.querySelectorAll('.side-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ========== 2. GOOGLE SITE SEARCH ==========
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchBox = document.querySelector('.search-box');
  const content = document.getElementById('searchable');

  if(searchBtn){
    // Button hmet chuan search box a lo in hawng
    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('active');
      if(searchBox.classList.contains('active')) {
        searchInput.focus();
      }
    });
  }

  if(searchInput){
    // Type chuan highlight nghal
    searchInput.addEventListener('keyup', () => {
      let filter = searchInput.value.toLowerCase();
      let originalHTML = content.getAttribute('data-original') || content.innerHTML;
      
      // vawikhat chiah original save
      if(!content.getAttribute('data-original')){
        content.setAttribute('data-original', originalHTML);
      }

      if(filter.length > 1){
        let regex = new RegExp(filter, 'gi');
        let newHTML = originalHTML.replace(regex, `<mark class="highlight">$&</mark>`);
        content.innerHTML = newHTML;
      } else {
        // a ruak chuan original ah let leh
        content.innerHTML = originalHTML;
      }
    });
  }
});
