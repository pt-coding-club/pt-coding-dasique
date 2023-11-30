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

history.scrollRestoration = 'manual';

window.addEventListener(
  'wheel',
  event => {
    event.preventDefault();
    console.log(sections.length);
    const clientHeight = window.innerHeight;
    const baseElementTop =
      sections[sections.length - 1].getBoundingClientRect().top;

    console.log('clientHeight', clientHeight);
    console.log('baseElementTop', baseElementTop);
    if (event.deltaY > 0) {
      wheelDown(sections, baseElementTop, clientHeight);
    }
    if (event.deltaY < 0) {
      wheelUp(sections, baseElementTop, clientHeight);
    }
    console.log(event.deltaY);
  },
  { passive: false },
);

function wheelDown(sections, baseElementTop, clientHeight) {
  for (let i = 1; i < sections.length; i++) {
    if (baseElementTop === clientHeight * (sections.length - i)) {
      scrollTo({
        top: clientHeight * i,
        behavior: 'smooth',
      });
      dots[activeIndex].classList.remove('active');
      dots[i].classList.add('active');
      activeIndex = i;
    }
  }
}
function wheelUp(sections, baseElementTop, clientHeight) {
  for (let i = 0; i < sections.length; i++) {
    if (baseElementTop === clientHeight * i) {
      scrollTo({
        top: clientHeight * (sections.length - 2 - i),
        behavior: 'smooth',
      });
      dots[activeIndex].classList.remove('active');
      dots[i].classList.add('active');
      activeIndex = i;
    }
  }
}
