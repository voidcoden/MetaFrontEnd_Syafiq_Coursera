// Array are objects

// pushing items in array

var fruits = [];
fruits.push("apple"); // ["apple"]
fruits.push("pear"); // ["apple" , "pear"]

console.log(fruits)
fruits.pop;
console.log(fruits)

// array builder example

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simepleArr = arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
console.log(simepleArr);