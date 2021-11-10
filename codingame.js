//Should removes duplicated numbers of an array of numbers
function filterDuplicates(data){
    let uniqueArray = data.filter(function(item, pos) {
        console.log("Item : " + item + " Index Of : " + data.indexOf(item) + " Starting from index " + pos + " " )
        return data.indexOf(item) == pos;
    })
    return uniqueArray;
}

//console.log(filterDuplicates([7,3,6,4,3,3,4,9,7]))


function computeMultiplesSum(n) {
    console.log(n)
    if((0 <= n)&&(n <= 1000)) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
     
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
          if(i<n){
            sum += i;
          } 
      }
    }
    return sum;
  }
}

// console.log(computeMultiplesSum(10))


function average(table) {
    let result = table.reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
    })
    return result/table.length;
}
  
//console.log(average([0,1,2,3,4,6,7,8,9,10]))


// Write a function that returns the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

//It will take a number and return the sum of all numbers from 1 up to the number passed in iteratively.
const sumzRange = (n) => {
    let sum = 0;
    for(let i = 1; i<= n ; i++){
        sum = i+sum;
    }
    return sum;
}

//console.log(sumRange(6))

//It will take a number and return the sum of all numbers from 1 up to the number passed in recursively.
const sumRangeRecursive = (n) => {
    if(n==1){
        return 1;
    } else {
        return n + sumRange(n - 1);
    }
}

// console.log(sumRangeRecursive(6))

//Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
const power = (base, exp)  => {
    if(exp == 0) return 1;
    return base * power(base, exp-1)
}
// console.log(power(2,1))



// var allAreLessThanSeven = all([1,2,6], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array
    if(copy.length && array.length) {
        console.log(`copy = ${copy} && array = ${array}`)
    }
    
	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
const productOfArray = (array) => {
    return array.reduce((acc,curr) => {
            acc = acc*curr;
            return acc;
    })
}


//Should returns the product of all value of an array of numbers
function productOfArrayRecursively(array){
	if(array.length === 0) return 1;

    //shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément.
	return array.shift() * productOfArray(array);
}

//console.log(productOfArray([1,2,3,10]))


//Should check if a js object contains a value
function contains(obj, value){
    for(var key in obj){
        if(typeof obj[key] === 'object'){
            return contains(obj[key], value)
        }
        //Condition d'arrêt si on trouve la valeur
        if (obj[key] === value){
            return true;
        }
    }
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// console.log(contains(nestedObject, 44)); // true
// console.log(contains(nestedObject, "foo")); // false

const totalIntegers = (array) => {
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
const replicate = (repli, num) => {
    if(repli < 0) {
        return [];
    } else {
        let result = [];
        for(let i = 1; i <= repli; i++) {
            result.push(num);
        }
        return result;
    }
}

function replicateRecursively(times, number){
	if(times <= 0) return [];
	return [number].concat(replicate(times - 1, number));
}

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []
//console.log(replicateRecursively(7,9)) //[9,9,9,9,9,9,9]

const encode1 = (plainText) => {
    let tab = [];
    
    tab = plainText.split('');

    let result = tab.reduce((acc, curr, index) => {
        if(acc.letter == curr){
            acc.count = acc.count+1
        } else {
            if(acc.letter){
                if(acc.encoded) {
                    acc.encoded = acc.encoded.concat(acc.letter.concat(acc.count));
                } else {
                    acc.encoded = acc.letter.concat(acc.count);
                }
            }
            acc.letter = curr;
            acc.count = 1
        } 
        if (index == tab.length - 1) {
            acc.encoded = acc.encoded.concat(acc.letter.concat(acc.count));
        }
        return acc;
    }, {})

    return result.encoded;
}

function encode(str) {
    strSplitted = str.split("");
    let result = [];
    strSplitted.reduce((acc, curr, index) => {
        if(acc !== curr) {
            result.push(index)
            acc = curr;
        }
        return acc
    })
    result.push(strSplitted.length)

    let encodedResult = strSplitted[0].concat(result[0]);
    result.reduce((acc, curr) => {
        encodedResult = encodedResult.concat(strSplitted[acc]).concat(curr-acc)
        acc = curr
        return acc
    })
    console.log(encodedResult)
    
}

//console.log(encode("aaabbccaaaaccccccccccbbb")); //Should return a3b2c2a4c10b3


function closestToZero(numbers) {

    if(numbers.includes(0)) return 0;
    let result = numbers.reduce((acc, curr) => {
        if(curr == Math.abs(acc.closestToZero)) {
            acc.closestToZero = curr;
            acc.negative = false;
        }
        if(curr>0) {
            if(acc.closestToZero) {
                if(acc.negative) {
                    if(Math.abs(curr) < Math.abs(acc.closestToZero)) {
                        acc.closestToZero = curr;
                        acc.negative = false;
                    } 
                } else {
                    if(curr < acc.closestToZero) {
                        acc.closestToZero = curr;
                        acc.negative = false;
                    } 
                }
            } else {
                acc.closestToZero = curr;
            }
        } else {
            if(acc.closestToZero) {
                if(acc.negative) {
                    if(Math.abs(curr) < Math.abs(acc.closestToZero)) {
                        acc.closestToZero = curr;
                        acc.negative = true;
                    } 
                } else {
                    if(Math.abs(curr) < acc.closestToZero) {
                        acc.closestToZero = curr;
                        acc.negative = true;
                    } 
                }
            } else {
                acc.closestToZero = curr;
                acc.negative = true;
            }
        }

        return acc;
    }, {})
    return result.closestToZero;
}

 console.log(closestToZero([ -5, -9, 7, 8, -1, 50, 1])); //Should return 1
 console.log(closestToZero([ -50, -6, 7, 8, -10, 50, 10])); //Should return -6
 console.log(closestToZero([ -5, -9, 7, 8, 0 , -1, 50, 1])); //Should return 0
 console.log(closestToZero([ -1, -5, -9, 7, 8, 0 , 50, 1])); //Should return 0

// Find the minimum difference between 2 numbers inside an array of n size 
function findSmallestIntervall(numbers) {
    numbers.sort(function(a, b){return a-b});
    const result = numbers.reduce((acc,curr) => {
        if(acc.smallestIntervall) {
            if((curr - acc.pastNumber) < acc.smallestIntervall) {
                acc.smallestIntervall = curr - acc.pastNumber 
            }
        } else {
            acc.smallestIntervall = numbers[numbers.length-1] - numbers[0];
        }
        acc.pastNumber = curr;
        return acc;
    }, {})
    return result.smallestIntervall;
}


// console.log(findSmallestIntervall([80, 1, 4, 25, 12, 60, 78, 70])); //Should return 2

function isTwin(a, b) {
    let tempA = a.toLowerCase().split('')
    let tempB = b.toLowerCase().split('')

    tempA.sort()
    tempB.sort()

    return JSON.stringify(tempA) === JSON.stringify(tempB)
}

// console.log(isTwin("hello", "world"))
// console.log(isTwin("bca", "acb"))

