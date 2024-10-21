$(document).ready(function () {
  $(".navbar li").on("click", function () {
    const targetIndex = $(this).data("target");


    $(".navbar li").removeClass("active");
    $(this).addClass("active");


    $(".links_container section")
      .removeClass("active")
      .eq(targetIndex)
      .addClass("active");
  });

 const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

 function updateCountdown() {
   const now = new Date().getTime();
   const timeLeft = endTime - now;

   $("#hours-tens").text(Math.floor(((timeLeft / (1000 * 60 * 60)) % 24) / 10));
   $("#hours-ones").text(Math.floor(((timeLeft / (1000 * 60 * 60)) % 24) % 10));
   $("#minutes-tens").text(Math.floor(((timeLeft / (1000 * 60)) % 60) / 10));
   $("#minutes-ones").text(Math.floor(((timeLeft / (1000 * 60)) % 60) % 10));
   $("#seconds-tens").text(Math.floor(((timeLeft / 1000) % 60) / 10));
   $("#seconds-ones").text(Math.floor(((timeLeft / 1000) % 60) % 10));

   if (timeLeft < 0) {
     clearInterval(countdownInterval);
     $(".countdown").text("Offer Expired");
   }
 }

 function showPopup() {
   $(".popup-overlay").fadeIn(300);
   $(".offer-container").fadeIn(300);
 }


 $(".close-btn").click(function () {
   $(".popup-overlay").fadeOut(300);
   $(".offer-container").fadeOut(300);
 });


 $(".offer-container").click(function (e) {
   e.stopPropagation();
 });

 const countdownInterval = setInterval(updateCountdown, 1000);

 // Show the popup 5 seconds after the page loads
 setTimeout(showPopup, 5000);
  
  
});
