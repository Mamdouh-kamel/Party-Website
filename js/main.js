//-----------------------------------------------nav--------------------------------------------------------//

function openNav() {
  if ($("#nav-bg").width() == "250") {
    closeNav();
  } else {
    $("#nav-bg").width("250px");
    $("#home-content").css("margin-left", "250px");
  }
}

function closeNav() {
  $("#nav-bg").width("0px");
  $("#home-content").css("margin-left", "0px");
}

$("a").click(function () {
  var sectionId = $(this).attr("href");

  if ($(sectionId).offset() != undefined) {
    var positionOfSection = $(sectionId).offset().top;

    $("body").animate({scrollTop: positionOfSection} , 10000);
  }
});

//-----------------------------------------------date--------------------------------------------------------//

function counter() {
  let now = new Date();
  let eventDate = new Date(2023, 5, 30);

  let currentTiime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTiime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24) - 30;

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
  document.getElementById("hours").innerHTML = "<h3>" + h + " H" + "</h3>";
  document.getElementById("minutes").innerHTML = "<h3>" + m + " M" + "</h3>";
  document.getElementById("seconds").innerHTML = "<h3>" + s + " S" + "</h3>";

  setTimeout(counter, 1000);
}

counter();

//-----------------------------------------------singer--------------------------------------------------------//

$(document).ready(function () {
  $(".singer-content div:first").css("display", "block");
  $(".singer-content h3").click(function () {
    $(this).next().slideToggle(500);
    $(".singer-content div").not($(this).next()).slideUp(500);
  });
});

//-----------------------------------------------character--------------------------------------------------------//

$(function () {
  var max = 100;
  $("textarea").keyup(function () {
      var length = $(this).val().length;
      var character = max - length;
      console.log(character)
      if (character <= 0) {
          $("#character").text("your available character finished");
      } else {
          $("#character").text(character);
      }
  });
});







// function divide(x, y) {
//   if (x % y == 0) {
//     return x
//   } else {
//    for(i = x; i<=x; i++){
//     if (x % y == 0){
//         return x
//     }
//     x++
//    }
//   }
// }
// let z = divide(-5, 7);
// console.log(z)


// function divide(x, y) {
//     if (x % y == 0) {
//       return x
//     } else {
//      for(i = x+1 ; i>x; i++){
//       if (i % y == 0){
//           return i
//       }
//       // x++
//      }
//     }
//   }
//   let z = divide(-7, 7);
//   console.log(z)




// function insert(a, b){
//   let newArray = a.split('');
//   for (i = newArray.length -3; i > 0 ; i= i -3){
//     newArray.splice(i, 0, b)
//   }
//   return newArray.join('')
   
// }

// let result = insert('asdasdasd', '$')
// console.log(result)


