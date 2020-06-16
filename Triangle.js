console.log("Exercise : Draw a right handed triangle\n");
function triangle(size) {
    var output = "";
    for (var i = 0; i <= size; i++) {
        for (var j = 0; j < i; j++) {
            output += "#";
        }
        output += "\n";
    }
    console.log(output);
}
triangle(2);
console.log();
triangle(4);
