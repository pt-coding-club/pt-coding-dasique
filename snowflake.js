const body = document.querySelector('body');
const MIN_DURATION = 10;

function makeSnowFlake() {
  // 눈을 생성한다.
  const snowflake = document.createElement('div');

  // animationDelay 무작위값
  const delay = Math.random() * 10;

  // Opacity 무작위값
  const initialOpacity = Math.random();

  // 떨어지는 시간 무작위값
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);

  setTimeout(() => {
    // 눈 생성했던 것을 제거
    body.removeChild(snowflake);

    // 다시 눈 생성
    makeSnowFlake();
  }, (duration + delay) * 1000);
}

// index 늘리고 setTimeout 시간 줄이면 더 많은 눈이 내린다.
for (let index = 0; index < 300; index++) {
  setTimeout(makeSnowFlake, 50 * index);
}
