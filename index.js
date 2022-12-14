// user's age

let age = prompt('How old are you?')
let userAge

if (age <= 11) {
    userAge = "You're a child"
} else if (age >= 11 && age <= 17) {
    userAge = "You're a teen"
} else if (age >= 18 && age <= 59) {
    userAge = "You're an adult"
} else if (age >= 60 && age <= 125) {
    userAge = "You're a pensioner"
} else {
    userAge = 'Incorrect data'
}
alert(userAge)

// keyboard numbers

let keyboardNumber = prompt('Enter a keyboard number')
let keyboardSymbol

switch (keyboardNumber) {
    case 1:
        keyboardSymbol = '!'
        break;
    case 2:
        keyboardSymbol = '@'
        break;
    case 3:
        keyboardSymbol = '#'
        break;
    case 4:
        keyboardSymbol = '$'
        break;
    case 5:
        keyboardSymbol = '%'
        break;
    case 6:
        keyboardSymbol = '^'
        break;
    case 7:
        keyboardSymbol = '&'
        break;
    case 8:
        keyboardSymbol = '*'
        break;
    case 9:
        keyboardSymbol = '('
        break;
    case 0:
        keyboardSymbol = ')'
        break;

    default:
        keyboardSymbol = 'Incorrect data'
        break;
}
alert(keyboardSymbol)

// the sum of all numbers in a given range

let rangeStart = +prompt('Enter the range start')
let rangeEnd = +prompt('Enter the range end')
let sum = 0

console.log(rangeStart, rangeEnd)
for (let i = rangeStart; i <= rangeEnd; i++) {
    sum += i
}

alert(sum)

//greatest common divisor


let firstNumber = +prompt('Enter first number')
let secondNumber = +prompt('Enter second number')
let gcd


while (secondNumber > 0) {
    if (firstNumber === secondNumber) {
        gcd = secondNumber
        break
    }
    if (firstNumber > secondNumber) {
        gcd = firstNumber - secondNumber
    } else {
        gcd = secondNumber - firstNumber
    }
    firstNumber = secondNumber
    secondNumber = gcd
    console.log(gcd)
}
alert('Greatest common divisor is ' + gcd)

let userNumber = +prompt('Enter a number')
let divisors = []

for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i === 0) {
        divisors.push(i)

    }

}
alert('Divisors of your number are ' + divisors)

let string = prompt("let's check if this string is a palindrome")
let stringLength = string.length
let isPalindrome = true

for (let index = 0; index < stringLength / 2; index++) {
    if (string[index] !== string[stringLength - 1 - index]) {
        isPalindrome = false
        break
    }
}
if (isPalindrome) {
    alert("it's a palindrome")
} else {
    alert("it's not a palindrome")
}

let purchaseAmount = +prompt('Enter purchase amount')
let discountedAmount

if (purchaseAmount >= 200 && purchaseAmount <= 300) {
    discountedAmount = purchaseAmount - (purchaseAmount * 3 / 100)
    alert("Your discounted amount is " + discountedAmount)
} else if (purchaseAmount >= 300 && purchaseAmount <= 500) {
    discountedAmount = purchaseAmount - (purchaseAmount * 5 / 100)
    alert("Your discounted amount is " + discountedAmount)
} else if (purchaseAmount >= 500) {
    discountedAmount = purchaseAmount - (purchaseAmount * 7 / 100)
    alert("Your discounted amount is " + discountedAmount)
} else {
    alert("Your purchase amount is too low to have a discount")
}

let positive = 0
let negative = 0
let zeros = 0
let even = 0
let odd = 0
    // let nums = []

for (let i = 1; i <= 10; i++) {
    const num = +prompt("enter a number");
    negative += num < 0
    positive += num > 0
    zeros += num == 0
    even += !(num % 2)
    odd += num % 2

}
alert(`positive: ${positive},\nnegative: ${negative},\nzeros: ${zeros},\neven: ${even},\nodd: ${odd}`)

// days of the week cycle
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ];
let currDay = 0;
while (confirm(`${days[currDay]}. Do you want to see a next day?`)) {
    if (currDay === days.length - 1) {
        currDay = 0
    } else {
        currDay = (currDay + 1);
    }
}