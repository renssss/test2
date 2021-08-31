function spinWords(string) {
  //TODO Have fun :)
  return string.split(' ').map(el =>
    el.length >= 5 ?
      el.split('').reverse().join('') :
      el.split('').join(''))
    .join(' ');

}
console.log(spinWords("А роза упала на лапу Азора"));