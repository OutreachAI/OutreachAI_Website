function showTypingText() {
  console.log('Function Called')
  const loadingScreen = document.getElementById('loading-screen');
  const typingText = document.querySelector('.typing-text');

  loadingScreen.addEventListener('animationend', () => {
    typingText.classList.add('active');
  });
}

// Call the function to show the typing animation after the loading screen is finished
window.onload = function() {
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
    window.scrollTo(0, 0);
    
    showTypingText();
  }, 2000);
}
