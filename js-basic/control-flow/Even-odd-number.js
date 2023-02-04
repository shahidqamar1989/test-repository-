// showNumbers(10);

// function showNumbers(Limit) {
//     for (let i = 0; i <= Limit; i++) {
//         // if (i % 2 === 0)  console.log(i, 'EVEN');
//         //     else console.log(i, 'ODD')
//         const massage = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, massage);
//     }
// }
 
// {
//     let password;
//     do {
//         password = prompt('what is passwoed');

//     } while (password !== 'shahid');
// }

// let urdu = 150;
// let math = 100;
// let english = 150

// const toMa = [urdu + math + english];

// document.write('total subject - 3 <br> total marks - 300 <br>');

// function sumMarks(urdu, math, english) {
//     let a = urdu + math + english;
//     return a;
// }
// let b = sumMarks(100, 50, 100);
// document.write('obtain marks ' + '- ' + b +'<br>');
 
// function purcentage(obt) {
//     let c = obt / toMa * 100;
//     return c;
// }
// let d = purcentage(b)

// document.write( 'purcentage  ' + d)



const marks = [50, 90, 50,70]; 
    
function calculate(marks) {
    let obtainMarks = 0; 
    let totalSubject = 0;
    let average;
    let p;
    let totalMarks = 0;

    for (let mark in marks) {
        obtainMarks += marks[mark];
        totalSubject++;
        totalMarks += 100;

    }
    average = obtainMarks / totalSubject;
    p = (obtainMarks / totalMarks) * 100;


    console.log(totalMarks);
    console.log(obtainMarks);
    console.log(totalSubject);
    console.log(average);
    console.log(p);
}
calculate(marks);