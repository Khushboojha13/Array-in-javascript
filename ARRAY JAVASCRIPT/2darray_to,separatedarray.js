let arr11=[["1","2","3"],["4","5","6"]];
let flat=arr11.flat();

//[ "a","b"].join( ",") will result in : "a,b"

console.log(flat);
console.log(flat.join(","));


//using map
 let join=arr11.map((x)=>{
    let row=x;
    return row.join(",");
}).join('\n');

console.log(join);