let arr5=[
    {
        name:"khusho",
        id:34
    },
    {
        name:"pusho",
        id:56
    },
    {
        name:"khusho",
        id:67
    },
    {
        name:"ashuo",
        id:0
    }
]
console.log(arr5.length);
let nameobj= "khusho";
//this is array of objects
let count=0;

let emptyobjarr=[];
arr5.forEach((i)=>{
    let nameobj= i.name;
    console.log(nameobj);
    let count=0;
    
     breakme: arr5.forEach((k1)=>{
          
         // console.log("Store is "+store);
          if(k1.name==nameobj){
          count++;
          }
      })

   console.log("Employee-name "+nameobj +" and " +" Occurenece is "+count);
});
//console.log(count);
//console.log(emptyobjarr);





let sarr=[1,2,2,3,4,5,5,6,7,1];
let counts={};

for(let k=0;k<sarr.length;k++){
   let nums=sarr[k];

   counts[nums]= counts[nums]?counts[nums]+1: 1;
   
}
console.log(counts);