const dotButtons = document.querySelectorAll('.fp-right ul li');
const dots = document.querySelectorAll('.fp-right ul li a');
const sections = document.querySelectorAll('main section');
let activeIndex = 0;

dotButtons.forEach((dotButton, index) => {
  dotButton.addEventListener('click', function handleSideButton(event) {
    const clientHeight = window.innerHeight;

    if (activeIndex !== index) {
      dots[activeIndex].classList.remove('active');
      dots[index].classList.add('active');
      scrollTo({
        top: clientHeight * index,
        behavior: 'smooth',
      });
    }

    if (activeIndex === index) {
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
    const clientHeight = window.innerHeight;
    const baseElementTop =
      sections[sections.length - 1].getBoundingClientRect().top;

    if (event.deltaY > 0) {
      wheelDown(sections, baseElementTop, clientHeight);
    }

    if (event.deltaY < 0) {
      wheelUp(sections, baseElementTop, clientHeight);
    }
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
      dots[sections.length - 2 - i].classList.add('active');
      activeIndex = sections.length - 2 - i;
    }
  }
}
