let arr4=[function () { }, new Object(), [], {},
NaN, Infinity, undefined, null, 0];

let type= (arr4)=>{
    arr4.reduce((acc,curr)=>{
      acc=typeof(curr);
      curr++;
     // console.log(acc);
     return acc;
},{})
}
console.log("Type");
console.log(type(arr4)); //here type is a function