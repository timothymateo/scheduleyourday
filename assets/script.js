// variables needed | used in schedule time/color coding
let now = moment()

// timestamp in header | Day, Month, Date (Xrd)(Xth) Current Year
let currentDay = moment().format('dddd, MMM Do YYYY');
let timeNow = moment().hour();
$("#currentDay").html(currentDay);

// clear button | variable
let clearBtn = $('#clearButton');
// clear button | function to clear/reload local storage
clearBtn.on("click", function () {
    localStorage.clear();
    location.reload();
});

 // color coding | start time evaluation via currentTime and html
function timeColor () {
    var currentTime = now.hour();
    //console.log(currentTime);
    var hourRows = $('.description');
    //console.log(hourRows.length);
 // for loop | evaluate time and add class past/present/future
      for (i=0; i < hourRows.length; i++) {
        if (parseInt(hourRows[i].id) < currentTime) {
          $(hourRows[i]).addClass('past');
        }
        if (parseInt(hourRows[i].id) === currentTime) {
          $(hourRows[i]).addClass('present');
        }
        if (parseInt(hourRows[i].id) > currentTime) {
          $(hourRows[i]).addClass('future');
      }
    }
  }
 
  timeColor();


// save button | will save local time and text in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

// local storage | retrieves what is stored and the saved event persists
    $("#time-09 .description").val(localStorage.getItem("time-09"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));
    $("#time-18 .description").val(localStorage.getItem("time-18"));
})