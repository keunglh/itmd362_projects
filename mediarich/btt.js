$('body').prepend('<a href="#" class="btt"></a>');

$(window).scroll(function(){
  if($(window).scrollTop()>300){
    $('a.btt').fadeIn('slow');
  }
  else{
    $('a.btt').fadeOut('fast');
  }
})

$('a.btt').click(function() {
    $('html,body').animate({
      scrollTop:0
    }, 'fast');

    return false;
})
