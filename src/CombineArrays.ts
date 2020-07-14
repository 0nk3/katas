/* *************************************** *
 * @author : Ndumiso Onke Fanti            *
 * Exercise : Combine two arrays           *
 ***************************************** */
class CombineArrays {
    combine(fistArray:number[], secondArray:number[]):number[]{
        let finalLength:number = fistArray.length + secondArray.length; //the combined lengths of the two arrays to give the size of the final array for the combined given arrays
        let combination:number[] = []; // new array to store the alternating elements of the two arrays
        for (let i = 0; i < finalLength/2; i++) { // the number of iterations is halved, elements of one array will occupy th odd index values, the other will take on even index value
            combination[2*i] = fistArray[i];
            combination[2*i + 1] = secondArray[i];
        }
        return combination;
    }
}
// two arrays to be combine(alternatingly)
let array1  = [11, 22,33];
let array2  = [1, 2,3];

// create an object for the class to access methods contained
let comb = new CombineArrays();

let combined:number[] = comb.combine(array1, array2);
// print out the array containing the two combined array
console.log(combined.toString());

