function welcome() {
    alert("Welcome!");
    let person = prompt("Please enter your name", "");

    if (person != null) {
        document.getElementById("greeting").innerHTML =
        `Hello ${person}! How are you today?`;
    }
    setTimeout(() => {soccer(person)}, 1000);
}

function soccer(user) {
    let message;
    let confirmation = confirm(`Do you like soccer, ${user}? Please click Ok if you do or Cancel if your don't!`);
    if (confirmation == true) {
        message = `${user} likes soccer!`;
    } else {
        message = `${user} doesn't really like soccer.`;
    }
    document.getElementById("soccer").innerHTML = message;
}


