// SPLICE FUNCTION

// numbers.splice(2,2)
// delete and replace -- numbers.splice(2,2,15,16)

var cities = ["delhi","mumbai","chennai"];
var out = cities.splice(0,2,"kolkata");
console.log(cities,out);

var chars = ["a","b","c"];
chars.splice(1,1,"d");
console.log(chars);

// slice -- non-mutuator
var cities = ["delhi","mumbai","chennai"];
var out = cities.slice(1,3);
console.log(cities,out);

// reverse function -- numbers.reverse()
// join function -- words.join("-")
// words.indexOf("cat")
//  concat -- birds.concat(animals)

var cities = ["delhi","mumbai","chennai"];
var out = cities.reverse();
console.log(cities,out);

var joined = cities.join("-");

console.log(cities,joined);



 var index = cities.indexOf("mumbai");
 console.log(cities,index);


 var metros = ["NY","LN"];
var add = cities.concat(metros);
 console.log(cities,metros,add);


//  mixed array = ["kch bhi likho"]
//  nested array = ["a","b",["c","d"]]
//  accessing nested array = animal[2][1]

var cities = ["delhi","mumbai","chennai",["a","b","c"]];
console.log(cities);
console.log(cities[3]);
 
