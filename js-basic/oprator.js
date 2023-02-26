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


// sum of multipal 3 and 5

function sum(limitNomber) {
    let sum = 0;
    for (let i = 0; i <= limitNomber; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;
    return sum;
}
console.log(sum(10));



// Exerdise Grade

const marks = [80, 100, 50, 100, ];

function calculateMGrade() {
    const average = calculateaverage(marks);
    if (average < 60) return 'f';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
   
}


function calculateaverage(array) {
    let sum = 0;
    
    for (let value of array) 
        sum += value;       
     return sum / array.length;   
}


console.log(calculateMGrade());
console.log(calculateaverage(marks))


// Show star



showstars(10)

function showstars(lines) {
    for (let row = lines; row > 0; row--) {
        let pattren = '';

        for (let i = 0; i < row; i++)
            pattren += '*'
        console.log(pattren)
    }
}



showstar(20)

function showstar(lines) {
    for (let row = 1; row <= lines; row++) {
        let pattren = '';
        
        for (let i = 0; i < row; i++)
            pattren += '*'
        console.log(pattren)
    }
}