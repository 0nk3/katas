console.log("Exercise : Hello");
function hello(name:string) {
    console.log("Hello " + name);
}
hello("Tshepo");
console.log();
console.log("Exercise : Check if a number is even");
function evenOrOdd(num:number):string {
    if(num%2===0){
        return "even";  // zero is an even number by definition
    }else {
        return "odd";
    }
}
console.log(evenOrOdd(-0));