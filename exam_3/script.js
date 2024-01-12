let number = 15
let sum = 0
document.write('Number: ' + number)

let sumOfListPrime = (number) => {
    for (let i = 2; i <= number; i++) {
        let isPrime = true
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            sum += i
        }
    }
    return sum
}

let result = sumOfListPrime(number)

document.write('<br><br>Result: ' + result)