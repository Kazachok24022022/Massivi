let x = "Есть несколько товаров по $120 и $20 и $70 все они крутые";
let y = [];
for (let i = 0; i < x.length; i++) {
    if (x[i] === "$") {
        y.push(x.slice(i + 1, x.indexOf(" ", i)))}}
console.log(y)