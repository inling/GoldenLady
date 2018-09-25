window.onload = function () {
    setInterval(() => {
        if ($('#home>.home-slider>.active').next().length != 0) {
            $('#home>.home-slider>.active').addClass('lineImg').removeClass('active').next().addClass('active');
        }
        else {
            $('#home>.home-slider>.active').addClass('lineImg').removeClass('active');
            $($('#home>.home-slider>div')[0]).addClass('active');
        }
        var start1=0;
        if (start1 == 0) {
            setTimeout(() => {
                var img = $('#home>.home-slider>div');
                var i1, i2, i3, i4;
                for (var i = 0; i < img.length; i++) {
                    if ($(img[i]).css('z-index') == 4) {
                        i4 = i;
                    } else if ($(img[i]).css('z-index') == 3) {
                        i3 = i;
                    } else if ($(img[i]).css('z-index') == 2) {
                        i2 = i;
                    } else if ($(img[i]).css('z-index') == 1) {
                        i1 = i;
                    }
                }

                $(img[i3]).css('z-index', 4);
                $(img[i2]).css('z-index', 3);
                $(img[i1]).css('z-index', 2);
                $(img[i4]).css('z-index', 1);
                var start2=0;
                if (start2 == 0) {
                    setTimeout(() => {
                        $(img[i4]).removeClass('lineImg');
                    }, 1000);
                }
            }, 2000)
        }
    }, 5000)

}