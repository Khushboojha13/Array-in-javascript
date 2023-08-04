let arro=[1,2,3,4,5];
let ele=3;
arro.filter((x)=>{
   // if(x==ele)
   // delete(x);
   // arro.splice(2,1); //index, no. of elements to be removed


});

console.log("delete");
console.log(arro);
console.log(arro);
console.log(arro.splice(2,1));  //it returns removed element
console.log(arro);//it returns new array

//Array elements can be deleted using the JavaScript operator delete.

//Using delete leaves undefined holes in the array.

//Use pop() or shift() instead.- but pop is used to remove elements from end and shift is used  to 