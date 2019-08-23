var index = 0;
var timer = setInterval(function() {
    index++;
    index = index == 3 ? 0 : index;
    $(".carousel>img").eq(index).show().siblings("img").hide();
    $(".carousel ol li").eq(index).addClass("act").siblings("li").removeClass("act");
}, 2500);