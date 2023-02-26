

showPrime(10)

function showPrime(limit) {
    for (let number = 1; number <= limit; number++)
        if (isPrime(number)) console.log(number);
    
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true
    }   