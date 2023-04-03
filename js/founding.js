window.onload = function() {
    setTimeout(function() {
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.style.display = 'none';
      window.scrollTo(0, 0);
    }, 2000);
  }