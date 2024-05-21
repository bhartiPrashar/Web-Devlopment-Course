// strictly ===

var name = "0";
if (name===0){
    console.log("true")
}
else{
    console.log("false")
}

//  conditional operator
var name = "ISHA PUNJABI";
var result = name.length> 5 ? "too long" : "short " 
console.log(result);

// typeOf() operator --- typeOf(age)
var name = "Bharti";
console.log(typeof(name));

//  type-casting -- parseInt(number),,age.toString()
var name = "5";
var number = parseInt(name);
console.log(typeof(number));

var num = 6;
var str = num.toString();
console.log(typeof(str));