// LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop

let count = 0;
while (count <= 5) {
    console.log(count);
    count += 1;
}

// 2. create a loop that prints out the numbers 0 - 5 using a for loop

for (let i = 0; i <= 5; i += 1) {
    console.log(i);
}

// 3. create a loop that prints out the numbers 0 - 5 using a for loop but for each number return the squared version

for (let num = 0; num <= 5; num += 1) {
    console.log(num ** 2);
}

//4. iterate over the string below and print out each character
let string = "the fox jumps over the moon"; 

for (let idx = 0; idx < string.length; idx += 1) {
    console.log(string[idx]);
}
