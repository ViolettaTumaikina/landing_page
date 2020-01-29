var menu = $('.menu');

var info = $('.info');

var menu2 =$('.menu2');

var work =$('.work')

var show_popup =$('.show_popup')

var popup_feedback_form =$('.popup_feedback_form')

var popup =$('.popup')

var backButton = $('.backbtn')

var nextButton = $('.nextbtn')

var change = $('.change')

function burgerMenu(icon) {
  icon.classList.toggle("change");
  menu2.toggleClass('close');
 		info.toggleClass('active');
};

function burgerMenu(icon) {
  icon.classList.toggle("change");
 	menu.toggleClass('close');
 		info.toggleClass('active');
};




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
	/*$('.popup1').submit(function(){
    $.post(
        'post.php', // адрес обработчика
         $(".popup1").serialize(), // отправляемые данные          
        
        function(msg) { // получен ответ сервера  
            $('#my_message').html(msg);
        }
        $('#name_input').val('');
    	$('#tel').val('');
		}
    );
    return false;*/
	/*$('.close1').click(function(){
		popup.hide();
        popup_feedback_form.hide();
        $('#overlay').remove('#overlay');
		$('html,body').css('overflow','scroll');
		return false;
    });*/
});

function call() {
	  var msg   = $('.popup1').serialize();
       $.ajax({
         type: 'POST',
         url: 'post.php', //обращаемся к обработчику
         data: msg,
        success: function(data) {  //в случае успеха выводим результаты в div "results"
           //скрываем форму после отправки 
            $('#results').html(data); //показываем сообщение об успехе вместо неё 
         },
         error:  function(xhr, str){ //ошибка выводит соответствующее сообщение 
	    alert('Возникла ошибка: ' + xhr.responseCode);
         }
       });
   }

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.popup_feedback_form'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide();
			popup.hide();
			$('#overlay').remove('#overlay');
			$('html,body').css('overflow','scroll');
			return false;// скрываем его
		}
	});
});