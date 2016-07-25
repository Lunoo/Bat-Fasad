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

    setTimeout(function(){
    	$('.price, .download, .section-1 .section-title').addClass('animate');
    }, 1000);
    var height = $(window).height();
    $(window).scroll(function(){
    	$this = $(this);
        $('.advantage, .section-title, .reason, .section-4 .wrapper>div, .section-4 figure').each(function(i, item){
        	// console.log($this.scrollTop() + height);
        	// console.log($(item).offset().top)
        	if( $this.scrollTop() + height >  $(item).offset().top + 100){
        		$(item).addClass('animate');	
        	}
        });
    })
})
