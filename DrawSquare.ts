/* ******************************
 * @author : Ndumiso Onke Fanti *
 * Exercise : Draw a square     *
 * **************************** */
function square(size:number) {
    let out:string  = "";
    for (let i: number = 0; i < size; i++) {
        for (let j: number = 0; j < size; j++) {
            out += " # ";
        }
        out+="\n";
    }
    console.log(out);
}
square(2);
console.log();
square(4);