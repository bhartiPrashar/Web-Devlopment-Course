// refernce object

var person = {name:"bharti", age: "20"};
var p1 = person;  //refernce
console.log(p1);

p1.name = "youstart";
console.log(p1,person);
person.age = 50;
console.log(p1,person);

var cities = ["dembi","mumbi"];
var metros = cities;
metros.pop ();
console.log(cities);

var group = [];
group.push(person);
group.push(p1);
console.log(group);
group[0].name = "x";

// shallow copy

var person = {name:"bharti", age: "20"};
var p1 = person;
p1.name = "x";
console.log(person);
var p2 = Object.assign({city:"delhi"},person);
console.log(p2);
p2.name = "y";
console.log(p1,person,p2);

// DEEP COPY JS
var person = {name:"bharti", age: "20", city:{name:"Patna"}};
var p1 = person;
p1.name = "x";
console.log(person,p1);
var p2 = Object.assign({},person);
console.log(p2.city.name);
p2.city.name = "mumbai";
console.log(p1.city.name);
console.log(p1,p2);

var p3 = JSON.stringify(person);
console.log(p3);
p3 = JSON.parse(p3);
console.log(p3);

p3.city.name = "NY";
console.log(p3,person);

