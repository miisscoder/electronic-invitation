// video 
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        $('.btn-music').removeClass('pause');
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});


$('.btn-music').click(function () {
    if (!document.getElementById('audio').paused) {
        document.getElementById('audio').pause();
        $('.btn-music').addClass('pause');
    } else {
        document.getElementById('audio').play();
        $('.btn-music').removeClass('pause');
    }
});


var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
swiper.slideTo(Number(document.cookie) ? Number(document.cookie) : 0);
swiper.on('slideChange', function () {
    document.cookie = swiper.activeIndex;
});

