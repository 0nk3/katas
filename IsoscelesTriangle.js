/* ************************************* *
 * @author : Ndumiso Onke Fanti          *
 * Exercise : Find the longest String    *
 *************************************** */
var Longest = /** @class */ (function () {
    function Longest() {
    }
    Longest.prototype.longestString = function (longest) {
        var temp = "";
        for (var _i = 0, longest_1 = longest; _i < longest_1.length; _i++) {
            var word = longest_1[_i];
            if (temp.length < word.length) {
                temp = word;
            }
        }
        return temp.length;
    };
    return Longest;
}());
var long = new Longest();
// change the array below to test for a different input
var arr = ["the", "quick", "brown", "fox", "ate", "my", "chickens", "uuuuuuuu"];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var word = arr_1[_i];
    if (word.length === long.longestString(arr)) {
        console.log(word);
    }
}
