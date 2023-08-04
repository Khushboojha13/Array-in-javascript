//using filter and includes method
let arr12=[1, 2, 3, 4, 5, 7, 9];
let arr22=[5, 6, 7, 8, 9];

const diff1= arr12.filter((element)=>{
      return !arr22.includes(element); //yaha jo elements array2 me nahi hai vo aa jayenge arr1 me 
});
console.log(diff1);

const diff2= arr22.filter((element)=>{
    return !arr12.includes(element);
});
console.log(diff2);

const result= [...diff1,...diff2];
console.log(result);
