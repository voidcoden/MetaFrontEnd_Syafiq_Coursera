// if else statement with switch case also

var result = 50;

if(result > 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if

var place = 'first';

if(place == 'first') {
    console.log("Gold");
} 

else if (place == 'second') {
    console.log("Silver")
}

else if (place == 'third') {
    console.log("Bronze")
}

else {
    console.log("No Medal");
}

// switch statement
var place = "fourth";

switch(place) {
    case "first":
        console.log("Gold")
        break;
    case "second":
        console.log("Silver")
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}