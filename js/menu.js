$(function(){
  $('#presentation').fadeIn();
  $('#btnMe').addClass('clicked');
  $('.nav').on('click', function() {
    href=$(this).attr('href');
    id = this.id;
    $('.nav').removeClass('clicked');
    $('#'+id).addClass('clicked');
    $('.volet').fadeOut(300);
    $("#"+href).fadeIn(700);
  })
});
