let arr=[1,5,3,7,5,8,2,4,10];
let arr2=[1,,4,5,6,7,8,9];
let res1=[];
let res=[];
let res3=[];
arr.filter((x)=>{
     if(x<5)
     {
        res.push(x);
     }
});
console.log(res);

arr2.filter((x)=>{
    if(x<5==false)
    {
        res1.push(x);
    }
});
console.log(res1);


arr.forEach((x)=>{
    if(x<=5==false)
    {
        res3.push(x);
    }
});
console.log(res3);

//slice method 
//The slice() method returns selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);


//slice method- it will works on sorted array only
let arr1=[1,2,3,3,4,5,5,6,7,8];
let limiter= 5;
function removedelement(arr1,limiter){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>=limiter)
        return arr1.slice(0,i);
    }

}

let remove= removedelement(arr1,limiter);
console.log(remove);

