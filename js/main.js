function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
https: //www.google.ru/maps/@52.4350486,31.0087386,19.17z

$(function() { 
    $(window).scroll(function() {     
        if($(this).scrollTop() != 0) {     
            $('#toTop').fadeIn();        
        } else {     
            $('#toTop').fadeOut();     
        }
    });
     
    $('#toTop').click(function() {     
        $('body,html').animate({scrollTop:0},800);     
    });     
});