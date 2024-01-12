let scores = [1, 2, 3, 4.9, 5, 6, 7, 8, 9.5, 10]
let scoreLength = scores.length

let findAvg = (array, len) => {
    let sum = 0
    for (let count = 0; count < len; count++) {
        sum += array[count]
    }
    return sum
}

let sumSocre = findAvg(scores, scoreLength)
let AverageScore = sumSocre / scoreLength

document.write('Score: ' + scores.join(' | '))
document.write('<br><br>Average: ' + AverageScore.toFixed(2))