/* ************************************* *
 * @author : Ndumiso Onke Fanti          *
 * Exercise : Find the longest String    *
 *************************************** */
export
   class Longest {
        //returns the length of the longest word
        static longestString(longest: string[]): number {
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
    // print out all the words with the same length as value returned by longestString() method
    for (let word of arr) {
        if (word.length === Longest.longestString(arr)){
            console.log(word);
        }
    }
