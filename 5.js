let x = [12, 423, 432, 32,43,222,434,13,321,777];
let y = [];
let min = 0;

for (let i = 0; i < 10; i++) {
    min = x.indexOf(Math.min.apply(null, x));
    y.push(Math.min.apply(null, x));
   x.splice(min, 1);
}
console.log('Числа в порядке возрастания', y);