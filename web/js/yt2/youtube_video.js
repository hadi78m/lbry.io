$("#video1", "#video2", "#video3").hover(function() {
    $(this).prop("controls", true);
}, function() {
    $(this).prop("controls", false);
});
