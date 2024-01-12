let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let number = 10
let index = 5

document.write('Before: ' + numbers)
document.write('<br><br>Add number 10 to index 5.')

let insertNumberToArray = (array, number, index) => {
    let isRightIndex = true
    let len = array.length

    if (index < 0 || index >= len) {
        isRightIndex = false
    }

    if (isRightIndex) {
        for (index; index <= len; index += 2) {
            let temp = array[index]
            array[index] = number
            if (index == len) {
                break
            }
            number = array[index + 1]
            array[index + 1] = temp
        }
        return array
    }
    else {
        return array
    }
}

let newArray = insertNumberToArray(numbers, number, index)
document.write('<br><br>After: ' + newArray)

