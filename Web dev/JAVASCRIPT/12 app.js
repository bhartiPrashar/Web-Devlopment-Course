// CALLBACK
function sum(a,b){
    return a+b;
}
function calc(fx,a,b){
    return fx(a,b);
}

console.log(calc(sum,4,5));

// timer function
setTimeout(function()  {
    console.log("hello");
},3000);

console.log("hiiii");

var number = 0;
var id = setInterval(function()  {
    number++;
    console.log(number);
    clearInterval(id);
},3000);
console.log(id);





