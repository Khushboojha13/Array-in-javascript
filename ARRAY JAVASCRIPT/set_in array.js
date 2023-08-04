let arrayss1=[1,2,3,3,4,5,6,7,5,10];
let arrayss2=[1,24,5,6,7];
const print= (arrayss1,arrayss2)=>{
    const set= new Set(arrayss1); //creating set with array1

    arrayss2.forEach((x)=>{
        set.add(x); //adding elemeents of array2 in array1
    })
    return set; //with elements of array1 and array2
}
let resulto=print(arrayss1,arrayss2);
console.log(resulto);