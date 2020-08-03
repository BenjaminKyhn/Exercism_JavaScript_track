function reverseString(str){
    return ([...str].reduce((previousValue, currentValue) => currentValue + previousValue));
}

function reverseString2(str){
    return ([...str].reduce(myFunction));
}

function myFunction(previousValue, currentValue){
    return currentValue + previousValue;
}

console.log(reverseString("hej"))
console.log(reverseString2("hej"))