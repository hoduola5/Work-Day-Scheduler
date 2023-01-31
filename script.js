$(document).ready( function () {
//Getting components form html
let currentDayEl = $('#currentDay');
// let timeblockContainerEl = $('.container');
let timeblockInputEl = $('.timeblock');
// let saveButtonEl = $('#save');
let nineEl = $('#nine');
let tenEl = $('#ten');
let elevenEl = $('#eleven');
let twelveEl = $('#twelve');
let oneEl = $('#one');
let twoEl = $('#two');
let threeEl = $('#three');
let fourEl = $('#four');
let timeblockInput1 = $('#timeblock-input-1')
let timeblockInput2 = $('#timeblock-input-2')
let timeblockInput3 = $('#timeblock-input-3')
let timeblockInput4 = $('#timeblock-input-4')
let timeblockInput5 = $('#timeblock-input-5')
let timeblockInput6 = $('#timeblock-input-6')
let timeblockInput7 = $('#timeblock-input-7')
let timeblockInput8 = $('#timeblock-input-8')

//Styling the timeblock inputs
timeblockInputEl.css("width", "500px");

//function to display the current day and month.
function displayCurrentDay() {
  let curDay = moment().format("dddd, MMM Do");
  currentDayEl.text(curDay);
}

displayCurrentDay();

//To display current hour
let currentHour = moment().hour();

//convert hours to number type so as to compare with current hour and asign yellow for present, green for future, and red color for past.
function currentState() {
  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(nineEl[0].textContent)){
    console.log('present');
    timeblockInput1.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(nineEl[0].textContent)){
    console.log('future');
    timeblockInput1.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput1.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(tenEl[0].textContent)){
    console.log('present');
    timeblockInput2.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(tenEl[0].textContent)){
    console.log('future');
    timeblockInput2.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput2.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(elevenEl[0].textContent)){
    console.log('present');
    timeblockInput3.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(elevenEl[0].textContent)){
    console.log('future');
    timeblockInput3.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput3.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(twelveEl[0].textContent)){
    console.log('present');
    timeblockInput4.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(twelveEl[0].textContent)){
    console.log('future');
    timeblockInput4.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput4.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(oneEl[0].textContent)){
    console.log('present');
    timeblockInput5.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(oneEl[0].textContent)){
    console.log('future');
    timeblockInput5.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput5.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(twoEl[0].textContent)){
    console.log('present');
    timeblockInput6.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(twoEl[0].textContent)){
    console.log('future');
    timeblockInput6.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput6.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(threeEl[0].textContent)){
    console.log('present');
    timeblockInput7.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(threeEl[0].textContent)){
    console.log('future');
    timeblockInput7.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput7.css('background-color', 'red');
  }

  // Check for current time for timeblockInput1
  if (parseInt(currentHour) === parseInt(fourEl[0].textContent)){
    console.log('present');
    timeblockInput8.css('background-color', 'yellow');
  } else if (parseInt(currentHour) < parseInt(fourEl[0].textContent)){
    console.log('future');
    timeblockInput8.css('background-color', 'green');
  }else {
    console.log('past');
    timeblockInput8.css('background-color', 'red');
  }
  
}
currentState();

})