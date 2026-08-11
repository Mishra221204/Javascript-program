 // Array is Depth

 // # Array used
//  let arr=[10,20 ,10,30,50];
//  console.log(arr);  

 // # Heterogenous data types in js
 // array ke under number aur string and boolean store hota hai

//  let arr=[10,20 ,"shubham","shivam",true];
//  console.log(arr); 

 // Acessing element by index

//  let arr=[10,20 ,"shubham","shivam",true];
//  console.log(arr[1]); // index no se
//    console.log(arr[4]);
  
   // Array Mutable
// mutable hota hai array change kr sakte hai

// let arr=[10,20 ,"shubham","shivam",true];
// arr[1] ="rohit"
// console.log(arr) // change

//# Adding element to end me
// last me add element  (push ()) used
// let arr=[10,20 ,"shubham","shivam",true];
// arr.push(90);
// console.log(arr);  // add 


//# Removing  element to end me
// last me Removing element  (pop ()) used
// let arr=[10,20 ,"shubham","shivam",true];
// arr.pop(true);
// console.log(arr);  // delet


//  # Array me Starting  me add  ( but used this method)
// unshift() -  starting add
// shift() - starting remove

// let arr=[10,20 ,"shu
// bham","shivam",true];
// arr.unshift(30);
// console.log(arr);  // add

// starting removing (shift ()) used
// arr.shift();
// console.log(arr);  // remove


// iterating with for loop
// arr  line by line chlana ho to used for loop

// let arr =[10,20,30,40,50,60,];
// for(i=0;i<arr.length;i++){
    // console.log(arr[i]);
// }

// for of loop  direct kr skte hai
// loop banane ki jrurt nhi 

// let arr =[10,20,30,40,50,60,];
// for(let num of arr){
//     console.log(num);
// }

// slicing Array
// chose array number star to end  and output  new array creat

// let arr=[10,20,30,40,50,60,70];
// arr.slice(2,5);
// console.log(arr);

// splicing Array 
// array ko katna aur kitna bahr nikla
// jo chose kiye hai vo bahar nhi aata jo bach gya vo aata hai

// let arr=[10,20,30,40,50,60,70];
// arr.splice(2,6);
// console.log(arr);
//  console.log(arr);  // check
// const arr2=(arr.splice(1,4,"Rohit",19)); //  remove bhi and add bhi
// console.log(arr);


// # Mering Array with spread
// multi array ko ek sath add krne ke liye denoted by(concat())

// const arr=[10,20,30,40,50,60,70];
// const arr1=[10,20,30,40,];
// const arr3=[20,50,60,];
// const arr4= arr.concat(arr1,arr3);  // add function
// console.log(arr4);

// Spread Operator
// arr ko todna  hai ...3dot se indivdual item ko bahar nikalna

// let arr=[10,20,30,40,50,60,70];
// let arr1=[10,20,30,40,];
// let arr3=[20,50,60,];

// let arr5=[...arr...arr1...arr3];


// # Converting Array to String
// const arr=["shubham","shivam","rohit"];
// console.log(arr.toString()); // convert

// const arr1=[10,30,50,60,80];
// console.log(arr1);

//  # Join 
// join kar skte hai base per (,_ -)
// const arr=["shubham","shivam","rohit"]; 
// console.log(arr.join(","));
// console.log(arr.join("_"));
// console.log(arr.join("-")); //add


// # Searching in Array
// .toindex() , .tolastindex() ,.include();
// let arr=["shubham","shivam","rohit" ,"shivam"]; 
// console.log(arr.indexOf("shivam"));  // line se charactor
// // console.log(arr.indexOf("sivm"));  // line se not charactor return (-1)

// // .lastindexof()
// console.log(arr.lastIndexOf("shivam")); // last charator
// console.log(arr.lastIndexOf("shiva"));

// // .include()
// console.log(arr.includes("shubham")); // present check


//  # Sorting Array of string
// array element sort() desnary form check first charactor Ato z jo phle aaye ga

// let arr=["shubham","shivam","rohit" ,"shivam"]; 
// // console.log(arr.sort());

// // number sort()
// let arr2=[121,22,34,56,98];
// console.log(arr2.sort()); // arrange ajo pahle aaye ga

// //# Reversing Array order
// // array element pichhe vala aage ,aage vala pichhe
// let arr1=["shubham","shivam","rohit" ,"shivam"]; 
// console.log(arr1.toReversed());


// # Custom Sorting  
// Asscending order number(a-b)

// let arr=[10,80,40,50,70,60];
// arr.sort((a,b)=>a-b); // last a==b compair kre ga
// console.log(arr);

// custom Sorting
// Decanding Order number(b-a)

// let arr1=[10,80,40,50,70,60];
// arr1.sort((a,b)=>b-a); // last b==a compair kre ga
// console.log(arr1);


// # Flattening Nested Array
// iska mtlb Arrary ke under Array 

// 1 Dimension array
// const arr=[10,20,[50,60],70];
// console.log(arr[2][0]); // acces index se 

//2d array
const arr1=[10,20,[50,60],[10,60,50],70];
console.log(arr1[3][2]);

//3d array
const arr2=[10,20,[50,60,[10,60,[40,60,20],50],70],50];
console.log(arr2[3][2]);

// asa samh nhi aa rha to Flat() used direct
console.log(arr2.flat(3)); // array acces