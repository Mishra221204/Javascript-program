// Object

// kay value pair rhta hai
// const user={
//     name:"shubham",
//     age:18,
//     emailid:"mishrashubham7629",
//     "home addres" =sara 
// }
// console.log(user);
// console.log(typeof user); // object

// CRUD operation - creat read update delet

// Read opeation
// Acess bhi kr sakte hai jaise  name, age,emailid any
// console.log(user.age); // acces
// console.log(user.name); // name acces
// console.log(user["age"]); //acess ho jaye ga ye string jaisa hota hai  dot nhi lgaye ge access

// creat opeation
// user.amount=5000;
// console.log(user);

// Update opeatio
// user.age=20;
// console.log(user);

// delete operation
// delete user.age;
// console.log(user);

// object ke under new value dalna ho to
// doubl quote ke under ""

// const user={
//     name:"shubham",
//     age:18,
//     emailid:"mishrashubham7629",
//     "home addres":"sarai"  
// }
// console.log(user);

// important
// object ka key ya  value acces kr hai

// key access
// console.log(Object.keys(user));


// value access object
// console.log(Object.values(user));

// key  and value access object
// console.log(Object.entries(user)); 


// object  ke under loop
// const user={
//     name:"shubham",
//     age:18,
//     emailid:"mishrashubham7629",
 
// }

// for of loop
// for(let num of user){
//     console.log(num);
// }

// console.log(num,user[keys]);

// # object me se chose kar ke value 
// nikal lete hai use destructry used
// const user={
//     name:"shubham",
//     age:18,
//     emailid:"mishrashubham7629",
 
//  }
// const { name,age}=user;  // chose vale
// console.log(name,age);

// outout me vale bs nhi key bhi sath me chahiye check
// key dalo aur value ke jgh username ,userage

// const {name:username,age:userage} = user;
// console.log(name,age);



// # Array me bhi chose kar nikal skte hai

// const arr=[10,50,60,80,77,88];
// // const[first,secand]=arr;
// // console.log(first,secand);
// const[third,forth] =arr;
//  console.log(third,forth);



//  How to run tempar 
const user={
     name:"shubham",
     age:18,
     emailid:"mishrashubham7629",
 
  }

//   console.log(tempar);

// key value loop
for(let key of user){
    console.log(key);
}
