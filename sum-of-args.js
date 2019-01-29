// Create a function sum() that accepts any number of parameters and adds them
// together by iterating over the values in arguments with a while loop.

const sumOfArgs = (...args) => {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumOfArgs(1, 5, 7, 8, 56))