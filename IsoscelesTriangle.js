/* **************************************** *
 * @author : Ndumiso Onke Fanti             *
 * Exercise : Draw an Isosceles Triangle    *
 * **************************************** */
function isosceles(n) {
    var str = "";
    //This is the upper part of the isosceles triangle
    for (var rows = 1; rows <= n; rows++) {
        for (var j = n + 1; j >= rows; j--) { //dealing with the trailing spaces
            str += " ";
        }
        //dealing with trailing spaces
        var hashes = "";
        // printing out the '#'s, numbers of hashes per row is is always odd
        for (var k = 1; k <= 2 * rows - 1; k++) {
            hashes += "#";
        }
        console.log(str + hashes);
        str = "";
        //console.log(" ")
    }
}
isosceles(5);
