// function getDomNodesBySelector(selector) {
//   // Ваш код
//   return Array.from(document.getElementsByClassName("price-value"));
// }

//console.log(getDomNodesBySelector('.price-value'));

function getDomNodesBySelector(selector) {
  return Array.from(document.querySelectorAll(selector));
}
//console.log(getDomNodesBySelector('.price-value'));
document.querySelector('.total__button').addEventListener('click', applyDiscount);
let done = false;
function applyDiscount() {
  // Ваш код
  document.querySelector('.total__button').removeEventListener('click', applyDiscount);
  document.querySelector('.total__button').disabled = true;
  document.querySelector('.total__button').style['background-color'] = 'gray';
  return document.querySelector('.total-price-value').innerHTML = getDomNodesBySelector('.price-value').
  reduce((acc, val) => {
    val.innerHTML = parseFloat(val.innerText) * 0.85;
    return acc + parseFloat(val.innerText);
  }, 0) * 0.85;
}
