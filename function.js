const ele = document.getElementsByClassName('item');
for (const e of ele) {
  e.addEventListener('click', () => {
    for (const a of ele) {
      if (a !== e) {
        a.classList.remove('open');
      }
    }
    e.classList.toggle('open');
  });
}
