import {Longest} from './LongestString';
/* *************************************** *
 * @author : Ndumiso Onke Fanti            *
 * Exercise : Frame Text                   *
 ***************************************** */
class FrameText{
    // computation of spaces needed after each word
    space(L: number, word: string): number{
        return L - word.length;
    }

    private maxsize: number = 0;
    frame(words: string[]) {
        const L = Longest.longestString(words); // computation of the longest word given an array
        
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
                spaces += " ";
            }
            temp1 = temp1 + "* " + words[j] + spaces + " *\n"; // start  with a * and a space before a word
            spaces = "";
        }
        console.log(temp0); 
        console.log(temp1 +temp0);
    }
}

const words:string[] = ["Write","good","code","every","day"];
const frameText = new FrameText();
frameText.frame(words);
