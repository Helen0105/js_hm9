

function logItems(array) {
    const arr = [];

    for (let i = 0; i < array.length; i += 1) {
        arr.push(`${i + 1} - ${array[i]}`)
    }
    return arr
}
console.log(logItems(['Mango', 'Poly', ' Ajax']));


function calculateEngravingPrice(message, pricePerWord) {
    const messageLength = message.split(" ").length
    return `Ціна гравіювання складає: ${messageLength * pricePerWord}$`
}

console.log(calculateEngravingPrice("01.05.12 Олена", 40));

 

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
    const stringArr = string.split(" ")
    let longestWord = stringArr[0];
   
    
    for (let i = 0; i < stringArr.length; i++) {
        if (longestWord.length < stringArr[i].length) {
            longestWord = stringArr[i];
        }
    }
    return longestWord
}

console.log(findLongestWord("Я Олееееееееенааааааааа, мені тринадцять. Хочу їстииииииииииииииииииииии"));



function formatString(string) {
    if (string.length < 40) {
        return string
    }else{
        return string.slice(0, 40) + "..."
    }
}

console.log(formatString("ЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛАЛАЛЛААЛЛАЛАЛЛАЛАЛЛАЛАЛАЛАЛАЛАЛАЛЛАЛА"));


// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    console.log(message);
    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
        return true
    }else{
        return false
    }
}
console.log(checkForSpam("Функція перевіряє її на вміст слів Sale"));

 

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введіть число");
    if (input === null) {
        break
    }
    if (isNaN(input)) {
        alert("Введено не число, спробуйте ще раз")
        continue
    }
    const number = Number(input);
    numbers.push(number)
} while (true);
console.log(numbers);
if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    
}