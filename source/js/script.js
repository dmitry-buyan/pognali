var nav = document.querySelector('.main-nav');
var toggleButton = nav.querySelector('.main-nav__toggle');
var ratesModal = document.querySelector('.rates-modal');

nav.classList.remove('main-nav--opened', 'main-nav--nojs');
nav.classList.add('main-nav--closed');

toggleButton.addEventListener('click', function () {
  nav.classList.toggle('main-nav--closed');
});
