const video = document.querySelector("#video-main"),
    button = document.querySelector("#button-video");

button.addEventListener("click", function() {
    video.play();
    video.setAttribute("controls","controls");
}, false);

$(".video-play-btn").click(function() {
    $(".video-play-btn").addClass('video-play-btn--hide');
    $(".video-pres-desc").addClass('video-play-btn--hide');
});