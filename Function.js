// Function

// basic funtio
// function getting(){
//     console.log("Shubham is cooming soon");
//     return 0;
// }
// // getting();  // function call
// console.log(getting()); // output me  value ke sath undefinebhi aaya hai used


// Argument & Parameter pass in fuction se under
// // vale nhi de
// function addNumber(num1,num2){  // value print
//     const sum=num1+num2;  // varible
//     console.log(sum);
// }

// addNumber(10,10);

// // Multiply
// function multiNumber(num1,num2,num3){  // value print
//     const multiply=num1*num2+num3;  // varible
//     console.log(multiply);
// }

// multiNumber(10,2,10);  // function Call
// multiNumber(50,5,10);  // different value


// Aise bhi
// function addNumber(num1,num2,num3=0,num4=0){  
//     const addNumber=num1+num2+num3+num4;  // varible
//     console.log(addNumber);
// }
// addNumber(6,7); 
// addNumber(6,7,8);
// addNumber(6,7,9,8);


// # Rest (...) operator
// iska used hm multiple num and number add ,multi any lene ke liye 
// used krte hai ...dot jo value ko array me convert krta hai 


//  function addNumber(...num){ // dheer sara num dalne ki jrurt nhi
//     console.log(num);

// }

// addNumber(6,7); 
// addNumber(6,7,8);
// addNumber(6,7,9,8);
// addNumber(6,7); 
// addNumber(6,7,8);
// addNumber(6,7,9,8);  // output arrary mew



// # for of loop used
// function addNumber(...num){ // dheer sara num dalne ki jrurt nhi
    
//     let sum=0;
    
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum); // line by line add


// }
// addNumber(6,7); 
// addNumber(6,7,8);
// addNumber(6,7,9,8);


// Spead and Rest 
 
// spread -: spread direct object and array dono ko kholta hai destructry
// first types spread opean
// const arr=[10,30,70,60];
// const[first,secand]=arr;
// console.log(first,secand);

// // secand types  spead opean
// const arr1=[10,30,70,60];
// const arr2=[10,30,70,60];
// const ans =[...arr1,...arr2]; // opean array
// console.log(ans); 

// Rest :- Rest jo individual  value Ya dher sari vale ko catch krta hai
// (...num) used and value convert to array fome

// const arr=[10,30,70,60];
// const[first,secand ,...num]=arr;  // all value acces
// console.log(first,secand,num);

// multiple num to add number ab likhne ki jarurt nhi 
// function addNumber(...num){
//    console.log(num);  // any value to print used 


// addNumber(4,7);
// addNumber(4,7,8);
// addNumber(5,6,7,8);  // call 

// For loop used  add value

// function addNumber(...num){
//    let sum=0;

// for(let n of num){
//     sum+=n;
// }
//     console.log(sum);
// }
// addNumber(4,7);
// addNumber(4,7,8);
// addNumber(5,6,7,8);  // call

// Q -2  substraction  nhi hoga add hoga bs
// function subNumber(...num){

//  let sub=0;
//     for(let n of num){
//         sub-=n;
//     }
//     console.log (sub);
// }
// subNumber(2,4);
// subNumber(2,4,5);
// subNumber(5,6,7,8);



// Secand types function banane ka
// Function : expression

//  const shu=function(num1,num2){
//      return num1+num2;
// }


// console.log(shu(44,88));



// # Arrow Function :-
// Arrow ka used function me function ko htakar arrow lene ke
// liye used krte hai denoted by(=>) arrow symbol


// const shu=(num1,num2)=>{  // used Arraow
//      return num1+num2;
// }


// console.log(shu(44,88));


// const squarNumber=(num3,num4)=>{
//     return num3*num4;
// }

// console.log(squarNumber(4,4));  // secand types function se run hoga Arrow


// first types se nhi
// ()=>{
    // return num3*num4;
// }

// console.log(4,4);  // not run code 


// # Function me  Single parameter(num) hai to () briket
// lgane ki jhurt nhi 

// squar root num*nu,
// const squarNumber=num=>{
//     return num*num;
// }

// console.log(squarNumber(3,3));


// # Arrow function me cirly bass lgane ki jrurt nhi
// aur return bhi likh ne ki jrurt nhi return ko Arrow
// ke bad likh jayega

// const squarNumber=(num1,num2)=>num1+num2;  // direct not return used/ likhe
 
 
//  console.log(squarNumber(4,4));  


// function ke under object creat

//  const obj=()=>{

//     let user={
//         name:"shubham",
//         age:12,
//     }

//  console.log(user);
// }

// obj(); // function call


// direct object ko likh skte hai function ke under
// () symbol lga ke

// const obj=()=>({name:"shubham",age:12});


// console.log(obj());  // call function

// console.log(obj)  // isse yh bta  chale ga kya hai yh


// # IIFE-(Immdiately Involed function)
// iska used hm code atomatcally execte krne ke lye 
// krte hai first vale ()- Rape krne  code ko and
// secand vala ()-run krne ke liye code

// (function greet(){
//     console.log("welcom back ");
// })
// ();


// variable bana ne vala function me not used IIFE

// (const meet=function(){
//   console.log("shubhammishra");
// })
// ();


// # Callback
// ek function ke under dusre function ko callback krna 
// jo function ko phle chlana


function greet(){
    console.log("hello shubham mishra");
    
}
function meet( callback){
    console.log("I meer you")
     callback();
    console.log("shubham")   // last me print
}

// greet(meet()); // single run dono chahiye
meet(greet); // jisme callback used kiye hai 
// usko function call krte time bahr likhna hoga 









