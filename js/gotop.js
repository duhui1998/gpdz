 // 返回顶部
 $(document).scroll(function() {
            var scroH = $(document).scrollTop(); //滚动高度
            var h = $(".navbar-default").offset().top //元素到浏览器的高度
            if (h < 0) {
                console.log("123");
            }
            if (scroH > 300) {
                $(window).on('mousewheel', function(event, delta) {
                    if (delta > 0) {
                        $(".navbar-default").css({
                            "backgroundColor": "#fff",
                            "opacity": "1"
                        });
                    } else {
                        $(".navbar-default").css({
                            "opacity": "0"
                        });
                    };
                });
            } else if (scroH < 300) {
                $(".navbar-default").css({
                    "opacity": "1",
                    "backgroundColor": "transparent"
                });

            }
        });