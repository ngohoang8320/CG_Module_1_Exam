let number = 12
let sum = 0
document.write('Number: ' + number)

let sumOfListPrime = (number) => {
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum
}

let result = sumOfListPrime(number)

document.write('<br><br>Result: ' + result)