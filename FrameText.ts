import {Longest} from './LongestString';
/* *************************************** *
 * @author : Ndumiso Onke Fanti            *
 * Exercise : Frame Text                   *
 ***************************************** */
class FrameText{

    space(L: number, word: string): number{
        return L - word.length;
    }

    private maxsize: number = 0;
    frame(words: string[]) {
        const L = Longest.longestString(words); // longest word length
        let spaces: string = "";
        for (const argument of words) {
            if(argument.length > this.maxsize){
                this.maxsize = argument.length;
            }
        }
        
        let temp0:string = "*";
        for (let i = 0; i <= this.maxsize + 1; i++) {  // first line of stars(top starts)
            temp0+="*";
        }
        
        temp0+="*";
        let temp1:string = "";
        console.log();
        for (let j = 0; j < words.length; j++) {
            let wordLength = this.space(L, words[j]);
            for (let i: number = 0; i < wordLength; i++){
                spaces += "_";
            }
            temp1 = temp1 + "* " + words[j] + spaces + " *\n"; // start  with a * and a space before a word
            spaces = "";
           //TODO : dealing with the spaces
            // for (let i = words[j].length; i <= this.maxsize-1; i++) {
            //     spaces+= "+";
            // }
        }
        console.log(temp0); //good
        console.log(temp1 +temp0);
    }
}

const words:string[] = ["Write","good","code","every","day"];
const frameText = new FrameText();
frameText.frame(words);
