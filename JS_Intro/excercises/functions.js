const difference = (a, b) => a - b;

const product = (a, b) => a * b;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const printDay = (i) => days[i - 1];

const lastElement = (a) => a[a.length - 1];

const numberCompare = (a, b) => {

    if (a < b) {
        return "Second is greater"
    } else if (a > b) {
        return "First is greater"
    } else {
        return "Numbers are equal"
    }

}

const singleLetterCount = (str, a) => {

    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === a.toLowerCase()) {
            count++
        }
    }
    return count


}
const multipleLetterCount = (str) => {

    str = str.toLowerCase()
    let counts = {}

    for (let i = 0; i < str.length; i++) {
        let a = str[i]
        if (counts[a] === undefined) {

            counts[a] = 1
        }
        else {
            counts[a]++
        }
    }
    return counts
}

function arrayManipulation(arr, opp, pos, key) {
    if (opp === 'remove') {
        if (pos === 'end') {
            return arr.pop();
        }
        return arr.shift();
    }
    else if (opp === 'add') {
        if (pos === 'end') {
            arr.push(key)
            return arr;
        }
        arr.unshift(key)
        return arr;
    }
}
const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('')