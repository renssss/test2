const arr = [1,2,3,4];
let funcs = [];

for (let i = 0; i < arr.length; i += 1) {
    funcs[i] = () => arr[i];
    console.log(funcs[i]);
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());