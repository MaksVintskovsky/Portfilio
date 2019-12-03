$(document).ready(function(){

    var navButton = $('#navigation_button');
    var navBlock = $('.navigation__desctop');

	navButton.on('click', function(e){
        e.preventDefault();
        navBlock.toggleClass('navigation__desctop-open');
        if (navButton.hasClass("active")) {
            navButton.removeClass("active");
        } else{
            navButton.addClass("active");
        }
        navButton.addClass('navigation__mobile-fixed');
    })
    
    $('.navigation__desctop a').on('click', function(){
        navBlock.removeClass('navigation__desctop-open');
        navButton.removeClass("active");
    })
    
    
    
    
    
// mixItUp

    $('#portfolio-projects').mixItUp({
    });

 // FancyBox - galery
    $(".fancybox").fancybox({
            // Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
    
// jQuery Validate JS
    
    $(".form_contact").validate({
        rules: {
            name:{ required: true},
            email:{required: true, email: true},
            message:{required: true}
        },
        messages:{
            name:"Пожалуйста, введите свое имя",
            email:{
                required:"Пожалуйста, введите свой email",
                email:"Введите корректный email"
            },
            message: "Пожалуйста, введите текст сообщения"
        }
    })


	$("header a, nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"header a",
	});
});