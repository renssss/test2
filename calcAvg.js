function calcAvg(array) {
  // Напишите код здесь
  //const length = array.length;
  //console.log(array[0].age);

  return array.reduce((acc, val) => {
    console.log(val.age);
    return (acc + val.age)
  }, 0) / array.length;
}

const data = [
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
];

console.log(calcAvg(data));