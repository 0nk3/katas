/* ************************************* *
 * @author : Ndumiso Onke Fanti          *
 * Exercise : Find the longest String    *
 *************************************** */
class Longest {
    longestString(longest: string[]): number {
        let temp: string = "";
        for (let word of longest) {
            if (temp.length < word.length) {
                temp = word;
            }
        }
        return temp.length;
    }
}
let long = new Longest();

// change the array below to test for a different input
let arr:string[] = ["the","quick","brown", "fox", "ate", "my", "chickens"];

for (let word of arr) {
    if (word.length === long.longestString(arr)){
        console.log(word);
    }
}
