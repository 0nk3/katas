console.log("Exercise : Check if a number is even\n");
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even"; // zero is an even number by definition
    }
    else {
        return "odd";
    }
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
