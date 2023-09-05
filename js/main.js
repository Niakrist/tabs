const btns = document.querySelectorAll('.menu a');
const tabs = document.querySelectorAll('.tab');

btns.forEach((btn, index) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    cleanClass(btns);
    cleanClass(tabs);

    btn.classList.add('active');
    tabs[index].classList.add('active');
  })
})

function cleanClass(elems) {
  for (let elem of elems) {
    console.log(elem)
    elem.classList.remove('active');
  }
}