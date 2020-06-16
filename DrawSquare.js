console.log("Exercise : Draw a square\n");
function square(size) {
    var out = "";
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            out += " # ";
        }
        out += "\n";
    }
    console.log(out);
}
square(2);
console.log();
square(4);
