/* ************************************* *
 * @author : Ndumiso Onke Fanti          *
 * Exercise : Find the longest String    *
 *************************************** */
 function longestString(longest:string[]):number {
    let temp:string ="";
    for(let word of longest){
        if(temp.length < word.length){
            temp = word;
        }
    }
    return temp.length;
 }
 console.log(longestString(["the","quick","brown", "fox", "ate", "my", "chickens"]));