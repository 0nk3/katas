function triangle(size) {
    var output = "";
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < i; j++) {
            output += "#";
        }
        console.log(output);
    }
}
triangle(2);
