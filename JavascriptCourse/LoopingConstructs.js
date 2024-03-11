// For and while loop

for (var i = 1; i <= 3; i++) {
    console.log(i)
}
console.log("Go\n")

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year\n")

// while loop

var counter = 3

while (counter > 0) {
    console.log(counter);
    counter -= 1;
}
console.log("Start")

// Nested Loops
// nested loop will make ur code slower

for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log("Week " + i + " Day " + j)
    }
}