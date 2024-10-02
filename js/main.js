/*timer*/
    now = new Date();
    var perem = new Date()*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.5,
        "fg_width": 0.015,
        "circle_bg_color": "transparent",
        "text_size": 0.06,
        "time": {
            "Days": {
                "text": "Days",
                "color": "#fff",
                "show": false
            },
            "Hours": {
                "text": "horas",
                "color": "#fff",
                "show": true
            },
            "Minutes": {
                "text": "minutos",
                "color": "#fff",
                "show": true
            },
            "Seconds": {
                "text": "segundos",
                "color": "#fff",
                "show": true
            }
        }
    });


    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
});