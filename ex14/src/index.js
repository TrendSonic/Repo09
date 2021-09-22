// Only change code below this line
function myForLoop1() {
    var evenNumbers= [];
    
    for (let i = 0; i < 9; i++) { 
        if(i % 2 === 0) { 
            evenNumbers.push(i); 
        }
    } 
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers= [];
    
    for (let i = 9; i > -1; i--) { 
        if(i % 2 === 0) { 
            evenInverseNumbers.push(i); 
        }
    } 
    
    return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
}