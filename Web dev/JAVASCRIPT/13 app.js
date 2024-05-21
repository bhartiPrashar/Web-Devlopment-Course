// math-floor(library)
var number = 20.5;
var limit = -1;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.abs(limit));
console.log(Math.random());
var r = Math.round((Math.random())*100);
console.log(r);

var max = Math.max(1,4,5,6);
console.log(max);

// GLOBAL SCOPE
var name = "NIHaa";

function speak(){   // new scope
    var name = "youstat";
    console.log(name);
}
if(name.length>0){   // no new scope
    var name = "bharti";
    console.log(name);
}

speak();
console.log(name);