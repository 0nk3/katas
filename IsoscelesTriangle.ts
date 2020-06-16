/* **************************************** *
 * @author : Ndumiso Onke Fanti             *
 * Exercise : Draw an Isosceles Triangle    *
 * **************************************** */
function isosceles(n : number) {
    let str:string = "";
    //This is the upper part of the isosceles triangle
    for (let rows:number = 1; rows <= n; rows++){
        for (let j:number = n + 1; j >= rows; j--){ //dealing with the trailing spaces
            str+=" ";
        }
        //dealing with trailing spaces
        let hashes:string = "";
        // printing out the '#'s, numbers of hashes per row is is always odd
        for (let k:number = 1; k <= 2*rows -1 ; k++){
            hashes+="#";
        }
        console.log(str +hashes)
        str = "";
        //console.log(" ")
    }
}
isosceles(5);