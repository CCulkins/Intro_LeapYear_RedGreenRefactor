
$(document).ready(function() {
  $("form#leapForm").submit(function(event) {

    var year = parseInt($("input#yearInput").val());


    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      // $('#yesleapyear').show();
      alert("Yes, the year you input is a leap year.");
    } else {
      // $('#noleapyear').show();
      alert("No, the year you input is not a leap year.");
    }

// function leapYear(year){
  // return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));

// }
    event.preventDefault();
  });
});



// $(document).ready(function() {
//   $("form#leapForm").submit(function(event) {
//
//     var year = parseInt($("input#yearInput").val());
//
//     if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//       alert(working);
//       // $('#leapyear').show();
//
//     } else {
//       // $('#noleapyear').show();
//       alert(notworking);
//     }
//
// // function leapYear(year){
//   // return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
//
// // }
//     event.preventDefault();
//   });
// });
