document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu'); // ID thlak
  const overlay = document.getElementById('overlay');

  function closeMenu() {
    mobileMenu.classList.remove('show');
    overlay.classList.remove('show');
    menuToggle.innerHTML = '☰';
  }

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    overlay.classList.toggle('show');
    menuToggle.innerHTML = mobileMenu.classList.contains('show') ? '✕' : '☰';
  });

  overlay.addEventListener('click', closeMenu);
  
  document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // SEARCH
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchBox = document.querySelector('.search-box');
  const content = document.getElementById('searchable');

  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if(searchBox.classList.contains('active')) searchInput.focus();
  });

  searchInput.addEventListener('keyup', () => {
    let filter = searchInput.value.toLowerCase();
    let originalHTML = content.getAttribute('data-original') || content.innerHTML;
    if(!content.getAttribute('data-original')) content.setAttribute('data-original', originalHTML);
    if(filter.length > 1){
      let regex = new RegExp(filter, 'gi');
      content.innerHTML = originalHTML.replace(regex, `<mark class="highlight">$&</mark>`);
    } else {
      content.innerHTML = originalHTML;
    }
  });
});
