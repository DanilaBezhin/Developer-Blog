window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
})

$(window).on('load', function() {
    setTimeout(() => {
        if ($(window).width() >= 1100) {
            $(".about-main-menu").toggleClass('animate-deg');

            $("#hr-one").show();
            setTimeout(() => {
                $("#hr-one").animate ({
                    "left": "0%",
                    "width": "100%"
                }, 1000)
            }, 1500);
            setTimeout(() => {
                $("#hr-one").slideUp('fast','linear')
            }, 2500);

            setTimeout(() => {
                $(".about-main-menu").toggleClass('box-shadows');
            }, 1900);

            setTimeout(() => {
                 $(".about-main-menu.three-block").toggleClass('animate-three-block');
            }, 1600);
            setTimeout(() => {
                $(".about-main-menu.one-block").toggleClass('animate-one-block');
            }, 1600);


        }
        else {
            $(".bg-img-block-two").animate ({
                "height": "38.8em"
            }, 1500)
        }
    }, 1000);
});


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        $('#video-img').attr('src', 'img/about/VideoNo.png');
    } else {
        video.pause();
        $('#video-img').attr('src', 'img/about/VideoYes.png');
    }
}


var music = jQuery('#audio').get(0);
var btnMus = document.getElementById("myBtnMusic");

music.volume = 0.1;

function myFunctionMus() {
    if (music.paused) {
        music.play();
        $('#song-img').attr('src', 'img/about/songYes.png')
//        btnMus.html = '<b><i class="fa-sharp fa-solid fa-music"></i></b>';

    } else {
        music.pause();
        $('#song-img').attr('src', 'img/about/songNo.png')
//        btnMus.html = '<b><i class="fa-sharp fa-solid fa-music-slash"></i></b>';

    }
}


$(window).on('load', function() {
    setTimeout(() => {
        $(".about-main-menu.two-block").removeClass('animate-deg')
//        $(".about-main-menu.two-block").css("transform", '')
        $(".about-main-menu.two-block").removeClass('two-block')
    }, 3000)
    setTimeout(() => {
        $('.header-op').css('height', '0vh')
    }, 3700)
});