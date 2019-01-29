// Write a JavaScript program to delete the rollno property from the
// following object. Also print the object before and after deleting the
// property.
// Display the length of the object (count of properties using Enumeration and Object.keys)

const countAndDelete = (object) => {
    let newObject = {...object}; // deep copy!
    delete newObject.rollno;
    const length1 = Object.keys(object).length;
    const length2 = Object.keys(newObject).length;
    console.log('Object before deletion:');
    console.log(object);
    console.log(`Length: ${length1}`);
    console.log('Object after deletion:');
    console.log(newObject);
    console.log(`Length: ${length2}`);
}

// Example: 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12 };

countAndDelete(student);