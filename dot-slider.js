const dotButtons = document.querySelectorAll('.fp-right ul li');
const dots = document.querySelectorAll('.fp-right ul li a');
const mainContainer = document.querySelector('main');
const sections = document.querySelectorAll('main section');
const lastPage = dots.length - 1;
let activeIndex = 0;

dotButtons.forEach((dotButton, index) => {
  dotButton.addEventListener('click', function handleSideButton(event) {
    if (activeIndex !== index && activeIndex >= 0) {
      dots[activeIndex].classList.remove('active');
      dots[index].classList.add('active');
    }

    if (activeIndex === index && activeIndex >= 0) {
      return;
    }

    activeIndex = index;
    dots[index].classList.add('active');
  });
});
