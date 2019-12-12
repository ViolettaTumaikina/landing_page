var menu = $('.menu');

var info = $('.info');

var menu2 =$('.menu2');

var work =$('.work')

var show_popup =$('.show_popup')

var popup_feedback_form =$('.popup_feedback_form')

var popup =$('.popup')


$('.menu').click(function() {
	menu.toggleClass('close');
 		info.toggleClass('active');	
})

$('.menu2').click(function() {
	menu2.toggleClass('close');
 		info.toggleClass('active');
})

var backButton = ('.backbtn');
var nextButton = ('.nextbtn');

$('.work').slick({

	infinite: true,
	dots: true,
	slidesToShow: 3, 
	slidesToScroll: 1,
	prevArrow: backButton,
   	nextArrow: nextButton,
	 responsive: [
			{
			breakpoint: 1200,
			settings: {
			prevArrow: false,
   			nextArrow: false,
			slidesToShow: 2,
			slidesToScroll: 1,
				      },
			},
				{
				breakpoint: 500,
				settings: {
				prevArrow: false,
   			 	nextArrow: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				      		}
				}
				]
	 		 })

$(function(){
	$('.show_popup').click(function(){
		popup.show().css("display","flex");
		popup_feedback_form.show();
		$("body").append("<div id='overlay'></div>");
		$("html,body").css("overflow","hidden");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;	
	});
	$('.close1').click(function(){
		popup.hide();
        popup_feedback_form.hide();
        $('#overlay').remove('#overlay');
		$('html,body').css('overflow','scroll');
		return false;

    });
});