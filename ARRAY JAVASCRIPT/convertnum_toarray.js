let myint= 34567;
//let number= ;
let number= num=>Number(num); //converted to number;
let intarray= Array.from(String(myint),number); //here number is a function
 //number= num=>Number(num); //converted to number;

console.log("Number into array");
console.log(intarray);

//cThe myFunc function will take a parameter that was returned by the iteration of Array.from() method. We typecast the number into a string so the type of parameter is a string, but we will typecast it into an integer and return it.onsole.log(intarray);

//The value returned by the Array.from() is our result.

//map() method
let newarrayss= String(myint).split("").map((e)=>{  //here we first converted number to string and then access each element and convert it into number 
    //split is used b/c String doesn't return array but map is applied on arraybonly so we convert it into array using split - split returns an array
     return Number(e);
});
console.log(newarrayss);