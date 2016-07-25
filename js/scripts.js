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
})
