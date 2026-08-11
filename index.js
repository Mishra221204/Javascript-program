//
// let a=1234;
// console.log(a);               


// // constan variable
// const b="shubham";
// console.log(b);

//variable declaration
// 1- primitive
// 2-non- primitive


// Primitive data types  -( primitive ke immutable jisme variable ke  value  ko change  nhi kr skte )

 //  a- number 
// let a=24;   //integer types
// let b=25;
// let c=56;
// console.log(a,b,c);
// console.log(typeof(a,b,c));   // type check
// //float types
//  // check types 
// let d=24.5;   
// let e=2.5;
// let f=5.6;
// console.log(typeof(d,e,f));
 

// String types
// let a="shubham";
// console.log(a);
// const b="shivam"
// console.log(b);  // permameter save 


//  boolean tyes

// let login="true";
// let f="false";
// console.log(login,f);


// //undefine types
// let p;   //system undefine value
// console.log(p);

// const c="shubh";  // value chahiye constant me
// console.log(c);


// // Null types

// let q=null;
// console.log(q);  //user empty

// // symbol types
//  let id1=Symbol("id");
//  let id2=Symbol("id");
//  console.log(id1==id2);  // compair me nhi hai 'false'


// // b- non primitive data tyes -( non primitive ke mutable hai jisme variable ke value ko change kr skte hai)
//  non primitive sbka same type  hoga 'object'

// // 1- Array  data types
// // all variable ko ek sath run krne ke kiye used arr

let arr=[12,45,65,"shubham",true];
// arr.push=90; // add number
arr[0]=70;
console.log(arr);



// Object data types
//boject ek key value pair hai 

//{ Rohit 1234 18 gen } samjh pauge  nhi used oject
let obj={
    name:"shubha",
   age:26,
   acont:1234,
}
obj.name="shivam";
console.log(obj);

// Function data types
// function ko kisi variable ke under store kr skte hai
// let s=function add(){
//     console.log("hello world");
// }
// s(); // function acces kr skte hai
// console.log(s);