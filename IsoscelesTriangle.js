/* ************************************* *
 * @author : Ndumiso Onke Fanti          *
 * Exercise : Find the longest String    *
 *************************************** */
function longestString(longest) {
    var temp = "";
    for (var _i = 0, longest_1 = longest; _i < longest_1.length; _i++) {
        var word = longest_1[_i];
        if (temp.length < word.length) {
            temp = word;
        }
    }
    return temp.length;
}
console.log(longestString(["the", "quick", "brown", "fox", "ate", "my", "chickens"]));
