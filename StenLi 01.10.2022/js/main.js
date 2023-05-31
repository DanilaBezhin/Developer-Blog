window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
})

window.onbeforeunload = function () {
      window.scrollTo(0, 0);
}

$(window).on('load', function() {
    if ($(window).width() <= 1100) {
        $(".bg-img-block-two").css({'height' : 'auto'});
    }
    else {
        $(".bg-img-block-two").animate ({
            "height": "38.8em"
        }, 1500)
    }

    setTimeout(() => {
        $(".bg-img-block-two-img.one").toggleClass('animate-scale');
    }, 500);

    setTimeout(() => {
        $(".bg-img-block-two-img.two").toggleClass('animate-scale');
    }, 750);

    setTimeout(() => {
        $(".bg-img-block-two-img.three").toggleClass('animate-scale');
    }, 900);

    setTimeout(() => {
        $(".bg-img-block-two-img.four").toggleClass('animate-scale');
    }, 950);
});

$(window).on('load', function() {
    $(".bg-img-block-hr").animate ({
        "left": "0%",
        "width": "100%"
    }, 1100)

    setTimeout(() => {
        $(".bg-img-block-flex").animate ({
            "top": "0em",
            "opacity": "1"
        }, 900)
    }, 200);
});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animate-one');
for (let elm of elements) {
  observer.observe(elm);
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let optionss = { threshold: [0.5] };
let observers = new IntersectionObserver(onEntry, optionss);
let elementss = document.querySelectorAll('.animate-two');
for (let elm of elementss) {
  observers.observe(elm);
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let optionsss = { threshold: [0.5] };
let observerss = new IntersectionObserver(onEntry, optionsss);
let elementsss = document.querySelectorAll('.animate-three');
for (let elm of elementsss) {
  observerss.observe(elm);
}

$('[data-anchor]').on('click', function(){
  let id = $(this).attr('data-anchor');
  if($(document).find('#'+id).length > 0) {
    let posY = $(document).find('#'+id).offset().top;
    $('html,body').animate({
      scrollTop: posY
    }, 100);
  }
  setTimeout(() => {
    $("#btn-start").addClass('show');
  }, 500);

  return false;
});


var height = $(document).height()
var totalWheel = 0
height = height / 5
window.onwheel = function(e){
    var delta = window.pageYOffset
    if (delta >= height) $("#btn-start").addClass('show')
    else $("#btn-start").removeClass('show')
};

$('#btn-start').click(function() {
    $('#btn-start').removeClass('show');
    $('body,html').animate({scrollTop: 0}, 200);
})



