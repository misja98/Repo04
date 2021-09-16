function main(numOne, numTwo) {

    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!'
    } else {
    //Only change code below this line
var numOne;
var numTwo;
var myQuotient = numOne / numTwo;
    //Only change code above this line
    }

return myQuotient;
}

console.log(main(5.0, 2.0)); 
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;