(function(){
    var st = {
        parent                : 'body',
        coverSection          : '.cover',

        recomendationSection  : '.recomendation',
        elSliderRecomendation : '.slider_recomendation .swiper-container',
    };

    var dom = {};

    var catchDom = function() {
        dom.parent                = $(st.parent);
        dom.recomendationSection  = $(st.recomendationSection, dom.parent);
        dom.elSliderRecomendation = $(st.elSliderRecomendation, dom.recomendationSection);
    }

    var suscribeEvents = function() {
        // dom.iconMenu.on('click',events.toggleMenu);
    }

    var events = {
        toggleMenu : function(e) {
        }

    }

    var fn = {
        loadSlider : function() {
            var swiper = new Swiper(st.elSliderRecomendation, {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // loop : true,
                // loopedSlides:3000,
                slidesPerView: 4,
                breakpoints: {
                    479: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    959: {
                        slidesPerView: 3,
                    }
                }
            });
        },
        redimensionarVideo : function(){
            var $video  = $('video'),
                $window = $(window);

            $(window).resize(function(){
                var height = $window.height();

                $video.css('height', height);

                var videoWidth = $video.width(),
                    windowWidth = $window.width(),
                    marginLeftAdjust =   (windowWidth - videoWidth) / 2;

                $video.css({
                    'height': height,
                    'marginLeft' : marginLeftAdjust
                });
            }).resize();
        }
    }

    function initialize() {
        catchDom();
        suscribeEvents();
        fn.loadSlider();
        // fn.redimensionarVideo();
    }

    initialize();
})();
