/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var todayDate = new Date();
// Step 2: Declare another variable to hold the day of the week
var dayOfWeek = todayDate.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed
var message1 = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek > 0 && dayOfWeek<6){
    message1 = 'Hang in there!';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message1='Woohoo! It is the weekend!';
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var message2 = '';
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(dayOfWeek){
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4: 
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
    
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML+=message1;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML += message2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(templeList){
    templeList.map(temple => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;

        const h4 = document.createElement("h4");
        h4.innerHTML = temple.location;

        const h4_2 = document.createElement("h4");
        h4_2.innerHTML = temple.dedicated;

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);

        article.append(h3, h4, h4_2, img);
        document.getElementById("temples").appendChild(article);
    });
}

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        temples = data;
        output(temples);
    }    
}

getTemples(url);


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    document.getElementById("temples").innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset();
    var order = document.getElementById("sortBy");
    var value = order.value;
    if (value == "templeNameAscending"){
        temples.sort();
        output(temples);
    }
    else {
        temples.reverse();
        output(temples);
    }
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
