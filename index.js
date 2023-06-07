window.addEventListener('scroll', function() {
    var button = document.getElementById('home__btn--scroll');
    if (window.pageYOffset > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  document.getElementById('home__btn--scroll').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  