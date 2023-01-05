$(".burger img").click(function () {
  var thisImg = $(this).attr("src");
  $(".submenu").toggleClass("dropdown");
  if (thisImg == "./img/burger.png") {
    $(this).attr("src", "./img/burgerhover2.png");
  } else {
    $(this).attr("src", "./img/burger.png");
  }
});
