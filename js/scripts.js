$(function(){
    $('.down').click(function(){
        var $parent = $(this).parents('section');
        $top = $parent.next().offset().top;
        $('body,html').animate({scrollTop: $top}, 1000);
    })
})
