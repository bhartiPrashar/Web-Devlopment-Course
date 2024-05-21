// objects

// access object -- person.name
//  writting object - person.name = "bharti"

var person = {};
console.log(person);

var anotherPerson ={ name:"Bharti", age:"20",};
console.log(anotherPerson);

var otherPerson ={};
otherPerson.name = "Bharti";
otherPerson.age = "2";
console.log( otherPerson);

// accessing objects -- person["name"]
var person = {};
person.name = "Bharti";
person["age"] = 19;
console.log(person);
console.log(person["name"]);

var property = "age";
console.log(person[property]);

// nested object
var person = {};
person.name = "Bharti";
person.age = "21";
person.mobiles = {};
person.mobiles.home = 234567;
person.mobiles.office = 34567;
console.log(person);
console.log(person.mobiles.home);

person.cities = ["jaipur","patna"];
console.log(person.cities[0]);

// delete -- delete person.name

delete person.name;
console.log(person);

