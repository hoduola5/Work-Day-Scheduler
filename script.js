//Getting components form html
let currentDayEl = $('#currentDay');

//function to display the current day and month.
function displayCurrentDay() {
    let curDay = moment().format("dddd, MMM Do");
    currentDayEl.text(curDay);
}
displayCurrentDay();
//Display current time and day using moment js

//Create timeblock for eight hours

//Assign red color for past, green for present, and yellow for future.

//Use input for timeblock to allow user enter their hourly event when clicked.

//Create a save button with each timeblock that allow user to save on local storage when clicked.

//The event should remain on the page after refreshing the browser.

//