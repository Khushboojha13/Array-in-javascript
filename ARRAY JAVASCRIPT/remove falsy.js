let arr0 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
let emptarr=[];
arr0.forEach((x)=>{
     if(x){ //if(x) matlab jo true hai truthy values hai  and !x karte to falsy value deta
        emptarr.push(x);
     }
});
console.log("Truthy values are:");
console.log(emptarr);