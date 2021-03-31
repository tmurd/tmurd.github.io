// Check when you have scrolled past the jumbotron
// then add a class to the nav to make it not transparent
$(function () {
  $(document).scroll(function () {
    var $home = $("#home");
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $home.height())
  });
});

document.querySelector(".navbar-toggler").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("transparent");
});

// For google maps
// function initMap() {
//   // The location of Uluru
//   var uluru = {
//     lat: 46.574345,
//     lng: -120.541489
//   };
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 15,
//       center: uluru
//     });
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

function sendEmail() {
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
  var body = document.querySelector("#message").value;

  // 07ad2147-2097-4795-aaad-0a0b8c4932a4

  Email.send({
    SecureToken: "a25abfc5-43f0-4a32-8fdf-a2902cdc01c0",
    To: "bpwyatt04@gmail.com",
    From: email,
    Subject: subject,
    Body: body
  }).then(
    //   message => alert(message)
    message => document.querySelector("#email-sent").classList.remove("d-none")
  );
}

document.querySelector("#send-email").addEventListener("click", sendEmail);