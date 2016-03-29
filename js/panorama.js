$(function(){
  $(".bar").on('click', function() {
    if($(this).hasClass('close'))
    {
      $('.bar').removeClass('close');
      $('.bar').addClass('close');
      $(this).removeClass('close');
      $(this).addClass('open');
      $('.iconPlus').css('transform', 'rotate(0deg)');
    }
    else {
      $('.bar').addClass('close');
      $('.iconPlus').css('transform', 'rotate(-45deg)');
    }
  })



$(".bar").mouseenter(function(){

  $('.bar').removeClass('toColor');
  $(this).addClass('toColor');

}).mouseleave(function(){
    $(this).removeClass('toColor');
});

});
