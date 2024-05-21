// string split
// words.split("")
var name = "youstart is a good start";
var out = name.split("a");
console.log(out);
console.log(out.length-1);

// uppercase,lowercase
console.log(name.toUpperCase());

// IMMUTABILITY OF A STRING -- copy kr k change kr skte

// string replace
var name = "Youstart";
var newName = name.replace("Y","Z");
console.log(newName);

// function chaining
var name = "Youstart";

var reversed = name.split("").reverse().join("");
// reversed = reversed.reverse();
// reversed = reversed,join("");
console.log(reversed);
