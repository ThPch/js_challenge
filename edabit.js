//According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
const compact = (arr) => {
	return arr.filter((e) => {
		if((e!=null)&&(e!=false)&&(e!=0)&&(e!=undefined)&&(e!=NaN)) {
			return e;
		}
	})
} 
// console.log(compact([ 1, 0, false, null, undefined, 'banana' ])) //Expected: "[1, 'banana']"
// console.log(compact([ { color: 'red', make: 'toyota' }, { color: 'blue', make: 'mazda' } ])) //Expected: "[1, 'banana']"
/*
Best Solution :
const compact = arr => arr.filter(Boolean);
*/


//Create a function that returns true if the first array can be nested inside the second.
const canNest = (arr1, arr2) => {
    let result = true;
	arr1.forEach(element => {
        if(arr2.indexOf(element) > -1) {
            result = false;
        }
    }); 
    return result;
}
// console.log(canNest([1, 2, 3, 4], [0, 6])) //➞ true
// console.log(canNest([3, 1], [4, 0])) //➞ true
// console.log(canNest([9, 9, 8], [8, 9])) //➞ false
// console.log(canNest([1, 2, 3, 4], [2, 3])) //➞ false
/*
Best Solution :
function canNest(arr1, arr2) {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}
*/


//The left shift operation is similar to multiplication by powers of two.
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
const shiftToLeft = (x,y) => {
    let result = 1;
    for(let i = 0; i<y; i++) {
        result = 2*result;
    }
    return x*(result);
}
// console.log(shiftToLeft(5, 2)) //➞ 20
// console.log(shiftToLeft(10, 3)) //➞ 80
// console.log(shiftToLeft(-32, 2)) //➞ -128
// console.log(shiftToLeft(-6, 5)) //➞ -192
// console.log(shiftToLeft(12, 4)) //➞ 192
// console.log(shiftToLeft(46, 6)) //➞ 2944
/*
Best Solution :
const shiftToLeft = (x, y) => x * 2 ** y
*/

