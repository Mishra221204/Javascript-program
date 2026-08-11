//  Operator in java script


// 1- Arithmetic operators

// console.log(5+7);  // Add
// console.log(5-7);  // substraction
// console.log(5*7); // multiply
// console.log(5/7); // divide

// console.log(0/0);  // out Nan

// console.log(2%8);  //Remender me jo aaye ga

// console.log(2**3);  // double multiply to 2*2*2=8


// Assignment Operators
// let x=20;
// let y=10;
// sum=x+y;
// console.log(sum);

// let z=20;
// let q=10;

// // x=z+q;
// // z+=q;   // direct aise likh sakte hai
// z-=q;
// console.log(z);



// compaison Operator
//  let x=20;
//  let y=20;
// //  let z=Number(y);
// console.log(x&y);
// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);

// let z=20;
//  let p="20";
//  console.log(z==p);  //" number and string compairs  to java scricpt convert kr dena hai string ko number me"


//  let u=20;
//  let v="20";
// console.log(x===z);   // types check kre ga fir dono same type hona chahiye ===, uske baad wo compaire kre ga 


// convert to  string to number and number to string
// let z="12";
// let a=Number(z);  // convert string to number
// console.log(a);


// NaN: Not a number (tyes of its is number)
// let p = "shu12";
// let q = Number(p);  // string to number ko  not convert (output me  likhe ga "Nan  not are number" )
// console.log(q);  

// Number - String  convert
// let a= 20;
// let b= String(a);
// console.log(typeof b);

//  variable  convert number
// console.log(Number(true));  // direct convert
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number(null))
// console.log(Number(undefined)); // NaN
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// computer science challege
//float value add 

// let a="0.1";
// let b="0.2";
//  c=Number(a);
//  d=Number(b);
//  e=c+d;
// console.log(e);  // false 



// nll is loosely equal to undefined only
// null- type-> object
//  undefined-- tyes--> undefined
// Null equal  bas  undefine se hoga aur kisi variable se nhi hoga 
// console.log(null==undefined); //true
// console.log(null==0); //false
// console.log(null==true); //false
// console.log(null==false); //false

// loose equality and compaison opeartor with Null and undefine
// symbol -->  ( >,<, >= ,<=)  

// Null - Yh symbol rhe ga to null automatically convert to number
// null=0 hai 
// console.log(null>=1);
// console.log(null>0);
// console.log(null<1);
// console.log(null<=0);

// undefin convert hota hai  (NaN) me  ,number me nhi hota retur -(false) 
// console.log(undefined>=0);// false
// console.log(undefined<=null);// false
// console.log(undefined>true);// false
// console.log(undefined<false);// false
// console.log(undefined>=undefined);// false


//  String  comparison with ASCll value--check 
// A -- capital  letter  start 63 se
// a small letter start 97 se
// high priorty small letter small letter jha used hoga uski vo bdh hoga
// console.log("Shubham">"Shivam"); // caplital
// console.log("Shubham"<"shivam");// one side  small letter - true
// console.log("shubham">"mohit"); // dono side small jiska ASCll value high 

// null  compaise to string
// kisi value ko campaise krne se phle dono convert number 
// console.log(null >= " ");
// console.log(null <= " ");
// console.log(null < " ");
// console.log(null > " ");
//console.log(NaN == NaN); // false not eqaul



// for loop 
// print 1 to 100 number  used  loop
//    do hote hai 1-Post increament(++) ,2- Post decement(--)

// post increament
// let i=0;
// for(i=0;i<=100;i++){
//     console.log (i)
// }

// Post deceament(--)
// let i=20;
// for(i=20;i<=10;i--){
    // console.log (i)
// }

// do - while loop
// last variable decalareb  and do loop  last me while in break
// let i=0;
// do{
//     console.log(i);
//     i++;
 
//     }    while(i<=10)  


//print shubham 10 time
// let i=0;
// do{
//     console.log("shubham");
//     i++;
 
//     }    while(i<=10)  


// if-else condition
// let age=18;
// if(age>20){
//     console.log("Vote");
// }
// else{
//     console.log ("not vote");
//}


// Else -if for  multiple condition
// if - one time used hoga 
// else - one time used hot hai last me
//if-else - bar-bar used kr skte hai bich me  many time


// Q1-print kind , young and old

// let age=15;
// if(age>18 ){
//     console.log("kind");
// }
// if-else(age>60){
//   console.log("young");
// }
// else{
//     console.log("young")
// }



// 4- Logical opeators
// 1-&&(AND) 2 - OR(!!)

// // 1-&&(AND)
// // firt value "True" hai  to secand value print hoga 
// // first value "Fale" hai to print first value
// console.log(true&& true);
// console.log(false&& false);
// console.log(false&& true);
// console.log(true && false);

// 1-!!(Or)
// firt value "True" hai  to first value print hoga 
// first value "Fale" hai to print secand value
// console.log(true&& true);
// console.log(false&& false);
// console.log(false&& true);
// console.log(true && false);


// not  equal 

console.log(50==50);
console.log(50!=50);
console.log(20!=50);