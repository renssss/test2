
/*const age = prompt("Сколько Вам лет?", 18);

const welcome = (age < 18) ? () => 'Привет' : () => 'Здравствуйте!';
// debugger;
alert(welcome()); // теперь всё в порядке*/
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');