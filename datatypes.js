// #  Number data types & basic operation 
// 3 method apply to number  (floating number ko)
// a- .tofixed() , b-toPrecision(), c- to String()

//  (a) - toFixed method
// let a=12;
// let b=12.2123; 
// console.log( b.toFixed(2));

//  (b) - to Precision () method used float number
// let a=12;
// let b=12.2123; 
// console.log( b.toPrecision(4));
// console.log( b.toPrecision(3));

// (c) -  to string () method  used is number convert string

// let a =123;
// let b=12.34;
// console.log( typeof b.toString());
// console.log(typeof a .toString());


// #  Creat number to Object
// new object krne ke liye aur yh  number creat string is not creat 
//object - object refference copy krta hai
//primitive - value copy krta hai


// let a = new Number(10);
// console.log( typeof a); // number

// let b = new Number("shubham"); // string not creat object
// console.log( typeof b);

// compair object to object
// let a = new Number(10);
// let b=a;  // be ke under a ka value
// console.log(b);   

// let obj1={
//     name:"shubha", 
// }
// let obj2={
//     name:"shivam",
// }
// console.log(obj1==obj2); // not compair
 
      
// New number (0) and Truthy object primitive
// object ke under any data types dala jata hai output True aaye ga

// console.log(Boolean(0)); //false
// console.log(Boolean(1)); // true

// console.log(Boolean (new Number[0]));


// # Math

// console.log(Math.abs(-4)); // negative value ko positive value convert "abslute"
//  console.log(Math.floor(6.3)); // lower level value
//  console.log(Math.ceil(7.10)); 


// understanding math. random()
// console.log(Math.random());

// ex- satebaa ji ek game banaata (0-9)
// console.log(Math.random()*10)

// (math.random()* total no of outcome)+shift mtlb start kha se hai)
// console.log(Math.random()*10 +1); 

// formul -: random()*(max-min+1)+1

// 1 to 10 rondom number print
// console.log(Math.random()*(10-1+1)+1);  // formula based

// dono shi hai but formula per rkhna hai


// # Generating 4 - digit password OTP
//  (1000 se 9999 tk hota hai)
// console.log(Math.random()*(9999-1000+1)+1000); // formula based
// point ke baad value ko delet krne ke liye used floor
console.log(Math.floor(Math.random()*(9999-1000+1)+1)); 

// note-: but yh proble shi nhi hai iske liye 
// Cypto libraries bana pade ga used cypto  