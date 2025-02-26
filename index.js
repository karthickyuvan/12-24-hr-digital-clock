
// javascript for switch clock format

const formatSwitchbtn=document.querySelector('.format-switch-btn');
formatSwitchbtn.addEventListener('click',()=>{
formatSwitchbtn.classList.toggle('active');

var formatValue=formatSwitchbtn.getAttribute("data-format");
if(formatValue==="12")
{
    formatSwitchbtn.setAttribute("data-format","24");
}else{
    formatSwitchbtn.setAttribute("data-format","12");

}
});

// --------------------------------------------------------------


// Function to display Time 

// Step 1: Create a function to update the clock
function updateClock() {
    // Create a new Date object to get the current time
    
    const now = new Date();
    
    // Extract hours, minutes, and seconds from the Date object
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period="AM";

    // Convert to 12-hour format and determine AM/PM
    // if hour is greater than 12 then set it to "PM"
    if (hours >= 12) {
        period = "PM";
    }

    //set the 12-hour clock Format
    var formatValue=formatSwitchbtn.getAttribute("data-format");

    if (formatValue==="12") {
        hours = hours>12?hours%12:hours;
    }

    if (hours === 0) {
        hours = 12; // Midnight case
    }

    // Step 2: Format numbers to always show two digits (e.g., 08 instead of 8)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    // Step 3: Display the time in the HTML element 
    
    document.querySelector('.hour').innerHTML=hours;
    document.querySelector('.minutes').innerHTML=minutes;
    document.querySelector('.seconds').innerHTML=seconds;
    document.querySelector('.period').innerHTML=period;

  }

  // Step 4: Initialize the clock immediately so the time shows as soon as the page loads
  updateClock();
  
  // Step 5: Update the clock every 1000 milliseconds (1 second)
  setInterval(updateClock, 1000);



// --------------------------------------------------------------

// function to display date

// Step 1: Create a function to update the date
function updateDay()
{
    // Create a new Date object to get the current date
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];

    // Step 2: Display the date in the HTML element
    document.querySelector('.day').innerHTML=day;
    document.querySelector('.date').innerHTML=date;
    document.querySelector('.month').innerHTML=monthNames[month];
    document.querySelector('.year').innerHTML=year;
}
updateDay();


// --------------------------------------------------------------
// javascript for dot menu toggle

const dotmenuBtn=document.querySelector('.dot-menu-button');
const dotMenu=document.querySelector('.dot-menu');

dotmenuBtn.addEventListener('click',()=>{
dotMenu.classList.toggle('active');
});
