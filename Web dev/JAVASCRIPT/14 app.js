var cities = ["delhi","mumbai","kolkata","hyderabad"];
 var cities =[
    {name:"delhi",pop:"10000000"},
    {name:"mumbai",pop:"100099990"}
 ] 

for(var i=0;i<cities.length;i++){
    console.log(cities[i].name);
    console.log(cities[i].pop);
}

// FOR OF LOOP

for(var city of cities){
    console.log(city.name);
}

//  while loop

var i = 0;
while(i<cities.length){
    console.log(cities[i]);
    i++;
}


// object constructor 
var person = {name:"bharti", age: "20"};
console.log(Object.keys(person));
console.log(Object.values(person));