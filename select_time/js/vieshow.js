// navigation //

$(".burger img").click(function () {
  var thisImg = $(this).attr("src");
  $(".submenu").toggleClass("dropdown");
  if (thisImg == "./img/burger.png") {
    $(this).attr("src", "./img/burgerhover2.png");
  } else {
    $(this).attr("src", "./img/burger.png");
  }
});

// dropdown bar - 選擇影城 //

$(".options-container .option").click(function () {
  $(".option.active").removeClass("active");
});
$(".select-box").click(function () {
  $(".options-container").toggleClass("active");
});
$(".option").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-theater").text("請選擇影城");
    $(".select-theater").text(label);
  });
});

// dropdown bar - 選擇影片 //

$(".options-container2 .option2").click(function () {
  $(".option2.active").removeClass("active");
});
$(".select-box2").click(function () {
  $(".options-container2").toggleClass("active");
});
$(".option2").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-movie").text("請選擇影片");
    $(".select-movie").text(label);
  });
});

// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionList = document.querySelectorAll(".option");

// selected.addEventListener("click",() => {
//     optionsContainer.classList.toggle("active");
// })

// optionList.forEach( o => {
//     o.addEventListener("click", () => {
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     })
// })
