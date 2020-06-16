console.log("Exercise : Draw a right handed triangle\n");
function triangle(size:number) {
    let output:string = "";
    for (let i:number = 0; i < size; i++){
        for (let j:number =0 ; j < i; j++){
            output += "#"
        }
        console.log(output);
    }
}
triangle(2);