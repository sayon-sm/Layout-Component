const dot = document.getElementsByClassName('dot');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

btnLeft.addEventListener('click', () => {
  for (i = dot.length - 1; i > 0; i--) {
    if (dot[i].classList.contains('dot--fill')) {
      dot[i - 1].classList.add('dot--fill');
      dot[i].classList.remove('dot--fill');
      break;
    }
  }
});

btnRight.addEventListener('click', () => {
  for (i = 0; i < dot.length - 1; i++) {
    if (dot[i].classList.contains('dot--fill')) {
      dot[i + 1].classList.add('dot--fill');
      dot[i].classList.remove('dot--fill');
      break;
    }
  }
});
