//Divisible by 3 => fizz
//Divisible by 5 => buzz
//Divisible by both 3 and 5 => fizzbuzz
// Not Divisible by 3 or 5  => input
//Not a number => Not a number

const output = fizzbuzz(3);
console.log(output);

function fizzbuzz(input) {
    if (typeof input !== 'number')
        return 'NaN';
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzbuzz'
    
    if (input % 3 === 0)
        return 'fizz'
    
    if (input % 5 === 0)
        return 'buzz'
    
    return input;
    
}