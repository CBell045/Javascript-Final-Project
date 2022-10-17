// Author: Chad Bell
// Final Project -- Translator API
// 10-17-22

// Get the tra








// // Step 3: Create another function called getTemples. Make it an async function.
// // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
// const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
// async function getTemples(url) {
//     let response = await fetch(url);
//     if (response.ok) {
//         let data = await response.json();
//         temples = data;
//         output(temples);
//     }    
// }

// getTemples(url);


// // Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
// function reset(){
//     document.getElementById("temples").innerHTML = '';
// }

// // Step 8: Declare a function named sortBy that does the following:
// // - Calls the reset function
// // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// // - Calls the output function passing in the sorted list of temples
// function sortBy() {
//     reset();
//     var order = document.getElementById("sortBy");
//     var value = order.value;
//     if (value == "templeNameAscending"){
//         temples.sort();
//         output(temples);
//     }
//     else {
//         temples.reverse();
//         output(temples);
//     }
// }
// // Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
// document.getElementById("sortBy").addEventListener("change", sortBy);
// /* STRETCH */

// // Consider adding a "Filter by" feature that allows users to filter the list of temples
// // This will require changes to both the HTML and the JavaScript files
