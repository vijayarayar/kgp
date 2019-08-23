$(document).ready(function(){ 
	$(function() {
      
        $('#da-slider').cslider({
          autoplay  : true,
          interval: 4000,
          bgincrement :10
        });
      
      });
           
 $(window).resize(function() {	  
       if ($(window).width() <= 760){       
    $('.header-right').addClass('hidden');
    $('.min-menu').show();
      }
  else{
    $('.header-right').removeClass('hidden');
    $('.min-menu').hide();
    $(".off-canvas-menu").removeClass('open');
 $(".site-backdrop").removeClass('active');
      }
  
});
  
    $('#icon-click').click(function () {
        $(".off-canvas-menu").addClass('open');
        $(".site-backdrop").addClass('active');
      });
    $('.web-link').mouseover(function () {
        $("#data").addClass('show');
         $("#data").removeClass('hide');
      });
    $('.web-link').mouseout(function () {
        $("#data").addClass('hide');
        $("#data").removeClass('show');
      });
    $('.mobile-link').mouseover(function () {
        $("#automation").addClass('show');
         $("#automation").removeClass('hide');
      });
    $('.mobile-link').mouseout(function () {
        $("#automation").addClass('hide');
        $("#automation").removeClass('show');
      });
    $('.design-link').mouseover(function () {
        $("#analytics").addClass('show');
         $("#analytics").removeClass('hide');
      });
    $('.design-link').mouseout(function () {
        $("#analytics").addClass('hide');
        $("#analytics").removeClass('show');
      });
     $('.digital-link').mouseover(function () {
        $("#market").addClass('show');
         $("#market").removeClass('hide');
      });
    $('.digital-link').mouseout(function () {
        $("#market").addClass('hide');
        $("#market").removeClass('show');
      });
    $('.testing-link').mouseover(function () {
        $("#aws").addClass('show');
         $("#aws").removeClass('hide');
      });
    $('.testing-link').mouseout(function () {
        $("#aws").addClass('hide');
        $("#aws").removeClass('show');
      });
     $('.blockchain-link').mouseover(function () {
        $("#test").addClass('show');
         $("#test").removeClass('hide');
      });
    $('.blockchain-link').mouseout(function () {
        $("#test").addClass('hide');
        $("#test").removeClass('show');
      });
    $('html').click(function() {
$(".off-canvas-menu").removeClass('open');
 $(".site-backdrop").removeClass('active');
});
   $('.close-btn').click(function() {
$(".off-canvas-menu").removeClass('open');
 $(".site-backdrop").removeClass('active');
});
$('#icon-click').click(function(event){
    event.stopPropagation();
});
 $('.off-canvas-menu').click(function(event){
    event.stopPropagation();
}); 
  jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });


});


