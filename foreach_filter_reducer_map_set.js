// ForEach , filter,  reducer, map ,set

// ForEach
// const arr =[12,67,88,90,60];
// arr.forEach((number)=> {
//     console.log(number);  // line by line print
// })

// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);  // number -parament ,and 2 -optional chose
// })


// // Add array
// const arr1 =[12,67,88,90,60];
// let add=0;
// arr.forEach((number)=>{
//   add+=number;

// })
// console.log(add);



// # Filter in array

// const arr =[12,67,88,90,60];
// true : select , false : not selected
// const newArr =arr.filter((number)=>number>50);
// console.log(newArr);


// const total=arr.filter((number)=>number<70);
// console.log(total);


// custom filter() implementation
// const arr =[12,67,88,90,60];

// // this=[12,67,88,90,60]; value
// // const compare =(number)=>number>25

// arr.filter= function(compare){
//     let ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }

//     return ans;
// }
// const value= arr.filter((num)=>num>25);
// console.log(value); // not used method




//  # Map in array
// jo value loge vo aaye ga
// const arr=[12,45,77,10,20];
// const map=arr.map((num)=>num); // same number print
// console.log(map);

// const double =arr.map((num)=>num*2); // number double
// console.log(double);



// Q -1 
// const arr={productname:"Computer",productqulty:"best",price:1200,instack :true,
//             productname:"Mouse",productqulty:"best",price:1000,instack :true,
//             productname:"wire",productqulty:"best",price:200,instack :true,
//             productname:"table",productqulty:"best",price:100,instack :true,       
// };

// const find= arr.filter((pro) =>arr.price>50).sort((a,b)=>b.price-a.price);

// console.log(find);

// const arr=[ 20,40,50,30,20,80,70,30,20,];

// arr.forEach((Number,index)=> {
//      console.log(Number,index);
// });

// const filter=arr.filter((Number)=>Number>10).sort((a,b)=>a-b).map((Number)=>Number*2);
// console.log(filter);




//  #   Set in array
// set jo uqnic value deta hai duplicate value nhi

const arr=[ 20,40,50,30,20,80,70,30,20,];

const s1 = new Set(arr); 
 console.log(s1);
 
// Add number
 s1.add(23);
 console.log(s1);


// check elememt denoted by (has)

 console.log(s1.has(45)); // false
  console.log(s1.has(40)); // true


 // delet element/number

 s1.delete(40);
 console.log(s1);


 // clear element in arry
  s1.clear()
console.log(s1); // empty



// # Map 
// key-value pair store krta hai key ko,object,array, booleanany used
// new map se bna skte hai

const m1=new Map ([
  ["rohit",34],
  [23,"niki"],
  [true,88]

]);
 m1.set({name:"shubham",age:45},false);


console.log(m1);