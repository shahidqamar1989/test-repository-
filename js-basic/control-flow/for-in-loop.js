// for in loop

const person = {
    name: 'mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

const color = ['red', 'green', 'blue'];

for (let indox in color)
    console.log(indox, color[indox]);   

    //for of loop

const colors = ['red', 'green', 'blue'];

for (let color of colors)
console.log(color, )