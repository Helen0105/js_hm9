// 1
console.log("1 task");
function logItems(array) {
    for (let i = 0; i < array.length; i+=1) {
        console.log(`${i+1} - ${array[i]}`);
    }
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// 2
console.log("2 task");
function calculateEngravingPrice(message,pricePerWord) {
    let price = message.split(" ").length * pricePerWord;
    return price;
}
console.log(calculateEngravingPrice("",20));

//3
console.log("3 task");

let array = [];  


function findLongestWord(a){
    let max = a[0];
    for(const word of a){
        if (word > max) {
            max = word;
        }
    }
    return max;
}
console.log(findLongestWord(array));
