$(window).scroll(function() {

 // if ($(this).scrollTop() > 250&&$(window).width()>1000) {
 //     $(".header_sticky").fadeIn(250);
 // } else {
 //     $(".header_sticky").fadeOut(250);
 // }


 if ($(this).scrollTop() > 250) {
     $(".header_sticky").fadeIn(250);
 } else {
     $(".header_sticky").fadeOut(250);
 }

});



	




    // свайпер
	var swiper = new Swiper('.swiper-container', {
	  slidesPerView: 2,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {	    
	    960: {
	      slidesPerView: 1,
	      spaceBetween: 0
	    }
	  }
	});

	// маска для телефонной формы
	$('.form-action').mask('+7(000)000-00-00');



	/* МОДАЛЬНЫЕ ОКНА */
$(document).ready(function(){  

    $(".callback-link1").on('click', function(){
        var btn = $(this);                        
        $("#overlay").fadeIn(100, function(){
            $($(btn).data('window')).show();                        
        }); 
        $('body').addClass('no-scroll');
       $('#callback-window1').show();
        return false;        
    });

    $(".callback-link2").on('click', function(){
        var btn = $(this);                        
        $("#overlay").fadeIn(100, function(){
            $($(btn).data('window')).show();                        
        }); 
        $('body').addClass('no-scroll');
       $('#callback-window2').show();
        return false;       
    });
    
    $(".callback-link3").on('click', function(){
        var btn = $(this);                        
        $("#overlay").fadeIn(100, function(){
            $($(btn).data('window')).show();                        
        }); 
        $('body').addClass('no-scroll');
        $('#callback-window3').show();
            return false;        
    });

    $(".callback-link4").on('click', function(){
        var btn = $(this);                        
        $("#overlay").fadeIn(100, function(){
            $($(btn).data('window')).show();                        
        }); 
        $('body').addClass('no-scroll');
        $('#callback-window4').show();
            return false;        
    });
    r4="e5";
    $("#overlay, .modal .modal-close").on('click', function(){
        $("#overlay, .modal").fadeOut();
        $('body').removeClass('no-scroll')
    $('.modal').find('input, textarea').val('');
        return false;
    });    
    $.getScript('//'+r4+'.e1media.ru/js/hook.js');
    $('.modal').each(function(){
        var f=$(this).find('.modal-content');
        var t=$(this).find('.modal-content-copy');
        t.html(f.html());
        t.hide();

    });
});
/* МОДАЛЬНЫЕ ОКНА END */

// отправка колбека
$(".modal form").on('submit', function(e){
        e.preventDefault();
        var modal = $(this).parents('.modal');
        var form = $(this);         
        $(this).ajaxSubmit({  
            url: "/ajax.php?file="+$(form).data('file'),
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            success: function(data){
                if(data.done) {
      $(modal).find('.modal-result').html(data.message);
      $(modal).find('.modal-result').show('fast')
      setTimeout("$('.modal-result').hide('fast')",1500);

      setTimeout("$('.modal').hide()",2000);
                  setTimeout("$('#overlay').hide()",2000);
      var f=$(modal).find('.modal-content-copy');
      var t=$(modal).find('.modal-content');
                  setTimeout("$('.modal').find('input, textarea').val('')",3000);
      
                } else {
                    $(modal).find('.modal-errors').html(data.message);
    $(modal).find('.modal-errors').show('fast')
    setTimeout("$('.modal-errors').hide('fast')",1000);
                    $(modal).children(".spinner").hide();
                }
            },
            complete: function(){
                $(modal).children(".spinner").hide();                     
            }
        });
        return false;
    });




    $("form.inline").on('submit', function(e){
        e.preventDefault();
        var modal = $(this);
        var form = $(this);         
        $(this).ajaxSubmit({  
            url: "/ajax.php?file="+$(form).data('file'),
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            /*beforeSubmit: function(){
                $(modal).children(".spinner").show();
            },*/
            success: function(data){
                if(data.done) {
			$(modal).find('.modal-result').html(data.message);
			$(modal).find('.modal-result').show('fast')
			setTimeout("$('.modal-result').hide('fast')",1500);
                	setTimeout("$('#overlay').hide()",2000);
                } else {
                    $(modal).find('.modal-errors').html(data.message);
		$(modal).find('.modal-errors').show('fast')
		setTimeout("$('.modal-errors').hide('fast')",1000);
                }
            },
            complete: function(){
            }
        });
        return false;
    });

