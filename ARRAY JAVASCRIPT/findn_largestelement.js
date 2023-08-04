//let new_array= new Array(); //a new empty array is created
let k=3; //give k largest element
let arrays= new Array(93, 17, 56, 91, 98,
    33, 9, 38, 55, 78, 29, 81, 60);

arrays.sort((a,b)=>{
    return b-a;
});
console.log("sort"); 
console.log(arrays);     //arrays is sorted in ascending order
console.log("Largest element are");

console.log(arrays.slice(0,3)); //0 index se start karo and 2 index tak ke lements de do  3 is excluded 