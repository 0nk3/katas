/* **************************************
 * @author : Ndumiso Onke Fanti         *
 * Exercise : check if a number is even *
 * ************************************ */
function evenOrOdd(num:number):string {
    if(num%2===0){
        return "even";  //NB zero is an even number by definition
    }else {
        return "odd";
    }
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));