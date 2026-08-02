document.addEventListener('DOMContentLoaded', function() {
  // ========== 1. SIDE MENU TOGGLE ==========
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  function closeMenu() {
    mobileMenu.classList.remove('show');
    overlay.classList.remove('show');
    menuToggle.innerHTML = '☰';
  }

  function openMenu() {
    mobileMenu.classList.add('show');
    overlay.classList.add('show');
    menuToggle.innerHTML = '✕';
  }

  // ☰ Button hmet
  menuToggle.addEventListener('click', () => {
    if(mobileMenu.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // X Button hmet
  closeBtn.addEventListener('click', closeMenu); 

  // Overlay dum hmet
  overlay.addEventListener('click', closeMenu);
  
  // Menu link hmet
  document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });


  // =
