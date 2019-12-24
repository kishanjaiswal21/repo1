$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('body').toggleClass('show-menu');
    });
    


   

    /* src background*/

    $('.home-slider ul li ').find('img').each(function(n, image){
        var image = $(image);
        var thisurl = $(this).attr('src');
        image.parents('li').css('background-image', 'url(' + thisurl + ')');
      });
    
    $('.boxsec > div').find('img').each(function(n, image){
        var image = $(image);
        var thisurl = $(this).attr('src');
        image.parent('div').css('background-image', 'url(' + thisurl + ')');
      });




     var nsliderlienght = $('.home-slider-new ul li').length;
     var nwindowwidth = $(window).width();
     var nsliderwidth = nsliderlienght * nwindowwidth;
     $('.home-slider-new').css({ width: nwindowwidth});
     $('.home-slider-new li').css({width : nwindowwidth});
     $('.home-slider-new ul').css({width : nsliderwidth, marginLeft: - nwindowwidth });
     $('.home-slider-new ul li:last-child').prependTo('.home-slider-new ul');

     function moveL(){
        $('.home-slider-new ul').animate({
            left: + nwindowwidth
        }, 500, function () {
            $('.home-slider-new ul li:last-child').prependTo('.home-slider-new ul');
            $('.home-slider ul').css('left', '');
        });
     }
     
     function moveR(){
        $('.home-slider-new ul').animate({
            left: - nwindowwidth
        }, 500, function () {
            $('.home-slider-new ul li:first-child').appendTo('.home-slider-new ul');
            $('.home-slider ul').css('left', '');
        });
    }

    $('.new-prev').click(function () {
        moveL();
    });

    $('.new-next').click(function () {
        moveR();
    });

    });
   
