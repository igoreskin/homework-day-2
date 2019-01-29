// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
// var library = [
// { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
// { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
// { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne
// Collins', libraryID: 3245 }];
// Expected Output:
// [
// { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
// { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book
// of The Hunger Games" },
// { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

const sortByKeys = (obj) => {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
        sorted[key] = obj[key];
    })
    return sorted;
}

const changeOrder = (library) => {
    const sortedLibrary = [];
    library.forEach(el => {
        sortedLibrary.push(sortByKeys(el));
    });
    return sortedLibrary.sort((a, b) => b.libraryID - a.libraryID);
}

// Example: 
console.log(changeOrder([
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'SuzanneCollins', libraryID: 3245 }
]));

