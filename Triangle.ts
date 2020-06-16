/* ********************************************
 * @author : Ndumiso Onke Fanti               *
 * Exercise : Draw a right handed triangle    *
 * ****************************************** */
function triangle(size:number) {
    let output:string = "";
    for (let i:number = 0; i <= size; i++){
        for (let j:number = 0 ; j < i; j++){
            output += "#";
        }
        output+="\n";
    }
    console.log(output);
}
triangle(2);
console.log();
triangle(4);