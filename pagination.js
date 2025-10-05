const link = document.getElementsByClassName('page-link');
const btnLeft = document.getElementById('prev');
const btnRight = document.getElementById('next');

btnLeft.addEventListener('click', () => {
  for (i = 1; i < link.length; i++) {
    if (link[i].classList.contains('curr')) {
      link[i - 1].classList.add('curr');
      window.open(link[i - 1].href, '_self');
      link[i].classList.remove('curr');
      break;
    }
  }
});

btnRight.addEventListener('click', () => {
  for (i = 0; i < link.length - 1; i++) {
    if (link[i].classList.contains('curr')) {
      link[i + 1].classList.add('curr');
      window.open(link[i + 1].href, '_self');
      link[i].classList.remove('curr');
      break;
    }
  }
});

for (a of link) {
  a.addEventListener('click', clk.bind(this, a));
}

function clk(a) {
  document.querySelector('.curr').classList.remove('curr');
  a.classList.add('curr');
}
