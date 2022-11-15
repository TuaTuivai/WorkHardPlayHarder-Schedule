
// created date for top of page with dayJs and formatting month/day/year

var currentMoment = dayjs().format("MM/D/YYYY")

// set .text to issue out current day to screen 

$("#currentDay").text(currentMoment)

// sets current hour with (H)

var currentHour = dayjs().format("H")
console.log(currentHour)

//created for loop to run through hours 9-16 to add class to current hours depending on dayjs  

for(i = 9; i <= 16; i++) {
  // if past
  if(currentHour > i) {
  $("#hour-"+i).addClass("past")
  // if present
  } else if (currentHour == i) {
    $("#hour-"+i).addClass("present")
    // if future
  } else {
    $("#hour-"+i).addClass("future")
  }
}

// created variable to attach to all buttons 

var allButtons = $(".btn")

// created event listners for click 
// split functions retrieves click events into an array to seperate class from number
allButtons.on("click", function(event){
  var number = (event.currentTarget.id.split("-")[1]);

  var textArea = $("#txt-"+ number)

//textArea set to val to save any input stated in input 

  var textToSave = textArea.val();

  console.log(textToSave)

  // created local storage to set items 

  localStorage.setItem("saved-"+number, textToSave)

})
// created for loop to GetItems from local storage
for(i = 9; i <= 16; i++) {
  var savedText = localStorage.getItem("saved-"+i);
  $("#txt-"+i).val(savedText)
}


