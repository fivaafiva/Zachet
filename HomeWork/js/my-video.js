var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
    video.play()
    video.setAttribute("controls","controls");
}, false);

$(".video-play-btn").click(function() {
    $(".video-play-btn").addClass('video-play-btn--hide');
})