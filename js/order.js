$(".js-click1").click(function () {
    $(".js-click1").css('background', '#A3431A');
});
$(".js-click2").click(function () {
    $(".js-click2").css('background', '#A3431A');
});
$(".js-click3").click(function () {
    $(".js-click3").css('background', '#A3431A');
});
$(".js-click4").click(function () {
    $(".js-click4").css('background', '#A3431A');
});

$(".clear").click(function () {
    $(".js-click1").css('background', 'white');
});
$(".clear").click(function () {
    $(".js-click2").css('background', 'white');
});
$(".clear").click(function () {
    $(".js-click3").css('background', 'white');
});
$(".clear").click(function () {
    $(".js-click4").css('background', 'white');
});

$(document).ready(function() {
    $('.clear').click(function() {
        $(":checkbox").attr("checked", false);
    });
});



