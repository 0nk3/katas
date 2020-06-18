/* *************************************** *
 * @author : Ndumiso Onke Fanti            *
 * Exercise : Frame Text                   *
 ***************************************** */
class FrameText{
    private maxsize: number = 1;
    frame(words:string[]){
        for (const argument of words) {
            if(argument.length > this.maxsize){
                this.maxsize = argument.length;
            }
        }
        let temp0:string = "";
        for (let i = 0; i <= this.maxsize + 1; i++) {
            temp0+="*";
        }
        let temp1:string = "";
        let temp2:string = "";
        for (let j = 0; j < words.length; j++) {
            temp1  = temp1 + "* " + words[j] +"  *\n";
            for (let i = words[j].length; i <= this.maxsize-1; i++) {
                temp2 = temp2 + " ";
            }
        }
        let temp5:string = "";
        for (let i = 0; i <= this.maxsize +1 ; i++) {
            temp5 += "-";
        }
        console.log(temp0); //good
        console.log(temp1 +temp0);
    }
}
let words:string[] = ["thisssssss", "is", "a", "random", "text", "message"];
let fr = new FrameText();
fr.frame(words);