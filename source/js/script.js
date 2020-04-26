let navigation = document.querySelector('.main-nav');
let toggleButton = navigation.querySelector('.main-nav__toggle');
let ratesModal = document.querySelector('.rates-modal');

navigation.classList.remove('main-nav--opened', 'main-nav--nojs');
navigation.classList.add('main-nav--closed');

toggleButton.addEventListener('click', function () {
  navigation.classList.toggle('main-nav--closed');
});
