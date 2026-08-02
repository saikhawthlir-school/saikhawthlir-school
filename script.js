// Menu toggle
document.getElementById('menu-toggle').addEventListener('click', function(){
  document.getElementById('mobile-menu').classList.toggle('show');
  document.getElementById('overlay').classList.toggle('show');
  this.innerHTML = document.getElementById('mobile-menu').classList.contains('show') ? '✕' : '☰';
});

// X button
document.getElementById('close-btn').addEventListener('click', function(){
  document.getElementById('mobile-menu').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('menu-toggle').innerHTML = '☰';
});

// Overlay click
document.getElementById('overlay').addEventListener('click', function(){
  document.getElementById('mobile-menu').classList.remove('show');
  this.classList.remove('show');
  document.getElementById('menu-toggle').innerHTML = '☰';
});

// Search toggle
document.getElementById('searchBtn').addEventListener('click', function(){
  document.querySelector('.search-box').classList.toggle('active');
  if(document.querySelector('.search-box').classList.contains('active')){
    document.getElementById('searchInput').focus();
  }
});
