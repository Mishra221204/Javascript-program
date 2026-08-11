// Scope and close,  High order function(HOF)
// there are 3 types scope

// 1- Global -> Accessible to everyone

//  let a=10;
//  const b=20;
//  console.log(a);
// console.log(b);

// function meet(){    // function scope
//     let c=30;  // first acces 
//      console.log(a);         
//    console.log(c); // under access
//  }
//   console.log(c); // not acces error
//  meet();
//  if(true){
//     let c=30;
//     console.log(a);  
//  }
// //  console.log(c);  // error 


// 2 - Function -> Accesible only that function

//function meet(){    // function scope
//     let c=30;  // first acces 
//      console.log(a);         
//    console.log(c); // under access
//  }
// 3 - block level scope -> Accesible only to that block
// for loop used

// if(true){
    // let c=30;
    // console.log(a);  
//  }
//  console.log(c);  // error 


//# Variable  used let, const , var

// let - Global scope, function , and block scope ko respect deta hai
// const - Global scope, function , and block scope ko respect deta hai
// var - Global scope, function  dono ko respect deta hai  ,but block scope ko respect nhi  deta hai



// #  What is Cloures  in function
//  clouresbjo function ke outersider variable ko yad rkhta hai
// stack  variable ko heap me store rkhta hai  (usi ko yaad rkhta hai )  

function CreatCounter(){
    let Count =0;
    function increament(){
        Counter ++;
        return Count;
    }
     return increament;
}
// console.log(Count);  // not acces

const Counter=CreatCounter();
console.log(Counter());
// console.log(Counter);
// console.log(Counter);
