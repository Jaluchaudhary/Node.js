const { clear } = require("console");

// Define the functin
function printValue(j) {
    console.log('The value is: ' + j);
}

// using setTimeout loop in reverse
for (let j = 3; j >= 0; j--) {
    setTimeout(() => {
        printValue(j);
    }, (3 - j) * 1000); // Multiply by 1000
}
