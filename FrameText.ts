/* *************************************** *
 * @author : Ndumiso Onke Fanti            *
 * Exercise : Frame Text                   *
 ***************************************** */
class FrameText{
    private size: number = 0;
    frame(words:string[]){
        for (const argument of words) {
            if(argument.length > this.size){
                this.size = argument.length;
            }
        }
        let temp0:string = "";
        for (let i = 0; i <= this.size + 1; i++) {
            temp0+="*";
        }

        let temp1:string = "";
        let temp2:string = "";
        for (let j = 0; j < words.length; j++) {
            temp1  = temp1 + "*" + words[j] +" *\n";
            for (let i = words[j].length; i <= this.size -1; i++) {
                temp2 += " "
            }
        }
        let temp5:string = "";
        for (let i = 0; i <= this.size +1 ; i++) {
            temp5 += "*";
        }

        console.log(temp0); //good
        console.log(temp1 +temp0);



    }
}
let words:string[] = ["this", "is", "a", "random", "text", "message"];
let fr = new FrameText();
fr.frame(words);