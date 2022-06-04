// variables needed | used in schedule time/color coding
let now = moment()

// timestamp in header | Day, Month, Date (Xrd)(Xth) Current Year
let currentDay = moment().format('dddd, MMM Do YYYY');
let timeNow = moment().hour();
$("#currentDay").html(currentDay);

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

// local storage | retrieves what is stored and the saved event persists
    $("#time-09 .description").val(localStorage.getItem("09"));
    $("#time-10 .description").val(localStorage.getItem("10"));
    $("#time-11 .description").val(localStorage.getItem("11"));
    $("#time-12 .description").val(localStorage.getItem("12"));
    $("#time-13 .description").val(localStorage.getItem("13"));
    $("#time-14 .description").val(localStorage.getItem("14"));
    $("#time-15 .description").val(localStorage.getItem("15"));
    $("#time-16 .description").val(localStorage.getItem("16"));
    $("#time-17 .description").val(localStorage.getItem("17"));
    $("#time-18 .description").val(localStorage.getItem("18"));

// set local storage | will save text entered in local storage

$('button').on('click', setSchedule);
function setSchedule (_e) {
  $(this).find('.fa').removeClass('fa-envelope-open').addClass('fa-envelope');
//let icon disappear so user knows it's saved
  setTimeout(() => {
    $(this).find('.fa').removeClass('fa-envelope').addClass('fa-envelope-open');
  }  , 300);


  //save data to user's local storage
  let num = $(this).parent().children('textarea').attr('id');
  let task = $(this).parent().children('.description').val();

  localStorage.setItem(num,task)

}

// clear button | variable
let clearBtn = $(".clearBtn");
// clear button | function to clear/reload local storage
clearBtn.on("click", function () {
    localStorage.clear();
    location.reload();
});