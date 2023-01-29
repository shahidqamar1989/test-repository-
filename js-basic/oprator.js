let x = 10;
let y = 3; 

console.log(x + y); //addection
console.log(x - y);  //subtraction
console.log(x * y);  //multipulcation
console.log(x / y); //  devstion 
console.log(x % y); // remander of devsion
console.log(x ** y); //exponantion  
// 
//Increment (++)
console.log(x++);
console.log(x);
//deincrement (--)
console.log(--x);

//assignment oprator 

let x = 10;

x = x + 5;
x += 5;

x = x * 5;
x *= 5;

//comparisson oprator

let x = 1;

//relatinal 
console.log(x > 0);   //ture
console.log(x >= 1);  //ture
console.log(x < 1); //false
console.log(x <= 1);  //ture



//Equality 

console.log(x === 1); //ture
console.log(x !== 1);  //false

//equa;ity oprator

//strict Equality (Type = value)
console.log(1 === 1);
console.log('1' === 1);

//lose Equality  (value)
console.log(1 === 1);
console.log('1' === 1);
console.log(true === 1);

// ternary oprator 

// if a customer has more than 100 point
//Thay are a 'gold' customer otherwise
// thay are a 'silver' silver customer

let point = 10;
let type = point > 100 ? 'gold' : 'silver';

console.log(type);




//logical oorator

//falsy (false)
//undefined
//null
// 0
//false
// ' '
//nan


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor)


    //bitwise oprator

    // 2=00000010
// 3=00000011
// R= 0000000
// Reade Write Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const WritePermission = 2;  
const ExecutePermission = 1;

let myPermission = 0;
myPermission = myPermission | WritePermission;

let massage = (myPermission & readPermission) ? 'yes' : 'no';

console.log(massage);   

