const ele = document.getElementsByClassName('item');
console.log(ele.length);
// Array.from(ele).forEach((element) => {
//   console.log('hi');
// });
for (const e of ele) {
  e.addEventListener('click', () => {
    alert('hi');
  });
}
