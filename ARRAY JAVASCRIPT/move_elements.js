let arr8=[1,2,3,4,5,6,7];
let x=5;
//let newarr=[];
for(let m=0;m<x;m++){
   arr8.push(arr8[m]);
}
console.log("newa arr");
//console.log(newarr);
//arr8.push(newarr);
arr8.splice(0,x);
console.log(arr8);

