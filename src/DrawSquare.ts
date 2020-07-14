/* ******************************
 * @author : Ndumiso Onke Fanti *
 * Exercise : Draw a square     *
 * **************************** */
class Square{
    square(size:number):void {
        let out:string  = "";
        for (let i: number = 0; i < size; i++) {
            for (let j: number = 0; j < size; j++) {
                out += " # ";
            }
            out+="\n";  // after appending '#' j times, I must add a new line and go to it
        }
        console.log(out);
    }
}
const sqObj = new Square();

sqObj.square(2);
console.log();
sqObj.square(4);