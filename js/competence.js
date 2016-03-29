// competence
// partie droite
$(".compDroit").mouseenter(function(){
  var id = this.id;
  $('.compImages').removeClass('toColor');
  $('#'+id+'.comp').addClass('toColor');
  $('#'+id+' .compImages').css('left', '200px');
  $('#'+id+' .compImages').css('width', '80px');

}).mouseleave(function(){
    $('.comp').removeClass('toColor');
    $('.compDroit .compImages').css('left', '50px');
    $('.compDroit .compImages').css('width', '200px');
});

//partie gauche
$(".compGauche").mouseenter(function(){
  var id = this.id;
  $('.compImages').removeClass('toColor');
  $('#'+id+'.comp').addClass('toColor');
  $('#'+id+' .compImages').css('right', '200px');
  $('#'+id+' .compImages').css('width', '50px');

}).mouseleave(function(){
    $('.compGauche .compImages').removeClass('toColor');
    $('.compGauche .compImages').css('right', '50px');
    $('.compGauche .compImages').css('width', '200px');
});
