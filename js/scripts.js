$(function(){
    $('.down').click(function(){
        var $parent = $(this).parents('section');
        $top = $parent.next().offset().top;
        $('body,html').animate({scrollTop: $top}, 1000);
    })

    $('.gallery a').attr('rel', 'gallery').fancybox({
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
    $('.price, .download, .advantage, .reason, .section-4 .wrapper>div, .section-4 figure, .section-3 .wrapper, .section-6 .wrapper, .section-5 .wrapper, .section-8 .wrapper, footer .form').addClass('move');
    setTimeout(function(){
    	$('.price, .download').addClass('animate');
    }, 1000);
    var height = $(window).height();
    $(window).scroll(function(){
    	$this = $(this);
        $('.move').each(function(i, item){
        	if( $this.scrollTop() + height >  $(item).offset().top + 100){
        		$(item).addClass('animate');	
        	}
        });
    })
})
