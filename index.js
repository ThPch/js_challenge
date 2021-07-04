//Should removes duplicated numbers of an array of numbers
function filterDuplicates(data){
    let uniqueArray = data.filter(function(item, pos) {
        return data.indexOf(item) == pos;
    })
    return uniqueArray;
}

// console.log(filterDuplicates([7,3,6,4,3,3,4,9]))


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
    if(table.length == 0) {
      return 0;
    } else if (table.length > 0) {
        var b = table.length,
        c = 0, i;
        for (i = 0; i < b; i++){
        c += Number(table[i]);
        }
        console.log()
        return c/b;
    }
  }
  
// console.log(average([[0,1,2,3,4,6,7,8,9,10]]))


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
const sumRange = (n) => {
    let sum = 0;
    for(let i = 1; i<= n ; i++){
        sum = i+sum;
    }
    return sum;
}

// console.log(sumRange(6))

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
        if(acc==0){
            acc = curr;
        } else {
            acc = acc*curr;
        }
        return acc;
    }, 0)
}


//Should returns the product of all value of an array of numbers
function productOfArrayRecursively(array){
	if(array.length === 0) return 1;

    //shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément.
	return array.shift() * productOfArray(array);
}

// console.log(productOfArray([1,2,3,10]))


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
// console.log(replicateRecursively(7,9)) //[9,9,9,9,9,9,9]

const encode = (plainText) => {
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

// console.log(encode("aaabbccaaaaccccccccccbbb")); //Should return a3b2c2a4c10b3


//TO DO
function closestToZero(numbers) {
    numbers.sort();
    console.log(numbers)
    let result = numbers.reduce((acc,curr) => {
        if(curr<0){
            if((0+curr) < acc) {
                acc = curr;
            }
        } else {
            if((0-curr) < acc) {
                acc = curr;
            }
        }

        return acc;
    },500000)
    console.log(result)
}

// console.log(closestToZero([ -5, -9, 2, 7, 8 ])); //Should return 2








// function calculateTotalPrice(prices, discount) {
//     prices.sort();
//     let higherPrice = prices[prices.length-1]
//     let sum = 0;
//     if((0 <= discount)&&(discount<=100)) {
//             if((0 < prices.length)&&(prices.length < 100)) {
//                 prices.forEach(price => {
//                     if((0 < price)&&(price < 100000)) {
//                         if(price==higherPrice){
//                             sum = price*(discount/100);
//                         } else {
//                             sum = price+sum
//                         }
//                     }
//                     else{
//                          console.error('Erreur avec le prix dun produit');
//                          return 0;
//                     }
//                 });
//         }
//     }
//     return sum;
// }

// console.log(calculateTotalPrice([100,400,200], 20))
