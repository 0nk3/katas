/* ******************************
 * @author : Ndumiso Onke Fanti *
 * Exercise : Draw a square     *
 * **************************** */
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.square = function (size) {
        var out = "";
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                out += " # ";
            }
            out += "\n"; // after appending '#' j times, I must add a new line and go to it
        }
        console.log(out);
    };
    return Square;
}());
var sqObj = new Square();
sqObj.square(2);
console.log();
sqObj.square(4);
