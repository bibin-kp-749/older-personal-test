window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('goToTopButton');
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var rect = element.getBoundingClientRect();
      var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        element.classList.add('fade-in-visible');
      }
    }
  });
  
  
  