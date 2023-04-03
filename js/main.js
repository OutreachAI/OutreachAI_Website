var countDownDate = new Date("June 1, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display "Live Now!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Live Now!";
  }
}, 1000);


const container = document.querySelector('.animation-scroll');
const animation = container.querySelector('sl-animation');
const box = animation.querySelector('.box');


const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // Start the animation when the box enters the viewport
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
observer.observe(box);

const containerDonation = document.querySelector('.animation-scroll-donation');
const animationDonation = containerDonation.querySelector('.donation-animation');
const contentDonation = animationDonation.querySelector('.content-donation');

const observerDonation = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    // Start the animation when the box enters the viewport
    animationDonation.play = true;
  } else {
    animationDonation.play = false;
    animationDonation.currentTime = 0;
  }
});
observerDonation.observe(contentDonation);


const section3 = document.getElementById('section-3');
const section3Animation = section3.querySelector('.section-3-animation');
const section3Content = section3Animation.querySelector('.section-3-content');

const observerSection3 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    // Start the animation when the section enters the viewport
    section3Animation.play = true;
  } else {
    section3Animation.play = false;
    section3Animation.currentTime = 0;
  }
});

observerSection3.observe(section3Content);

const foundingContainer = document.querySelector('#animation-scroll-founding');
const foundingAnimation = foundingContainer.querySelector('.founding-animation');
const foundingContent = foundingAnimation.querySelector('.founding-content');

const observerFounding = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    foundingAnimation.play = true;
  } else {
    foundingAnimation.play = false;
    foundingAnimation.currentTime = 0;
  }
});

observerFounding.observe(foundingContent);


window.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const footerHeight = footer.offsetHeight;

  // show the footer when at the bottom of the page
  if (scrollPosition + windowHeight >= documentHeight - footerHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});


const dialog = document.querySelector('.dialog-focus');
const input = dialog.querySelector('sl-input');
const openButton = document.querySelector('.sign-up');
const closeButton = dialog.querySelector('.close_button');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());


const yesCheckbox = document.querySelector('sl-checkbox[value="True"]');
const hidden = document.querySelector('.hidden');


yesCheckbox.addEventListener('click', () => {
  const companyOnly = document.querySelector('.company-only');
  if (yesCheckbox.checked) {
    companyOnly.style.display = 'flex';
    hidden.style.display = 'block';

  } else {
    companyOnly.style.display = 'none';
    hidden.style.display = 'none';

  }
});


if (/Mobi/.test(navigator.userAgent)) {
  window.location.href = './html/mobile_error.html';
}