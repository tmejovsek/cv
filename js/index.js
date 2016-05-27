$( document ).ready(function() {


  //gère le message d'avertissement du responsive
  $('#btnWarning').on('click', function() {
    $('#warning').fadeOut(500);
  })

  //permet d'ouvrir et de fermer le contenu
  $('#btnOpen').on('click', function() {
    if ( $('#contenu').hasClass('openContenu') ) {
      $('#contenu').css('width', '0%');
      $('#contentPres').css('width', '50%');
      $('#accueil').css('transform', 'skewX(-25deg)');
      $('#accueil').css('left', '-50%');
      $('#contenu').removeClass("openContenu");
      $('#content').css('opacity', '0');
      $('#cross').addClass('hide-cross');
    }
    else {
      $('#contenu').css('width', '64%');
      $('#accueil').css('transform', 'skewX(0deg)');
      $('#accueil').css('left', '-64%');
      $('#contentPres').css('width', '36%');
      $('#contenu').addClass("openContenu");
      $('#content').css('opacity', '1');
      $('#cross').removeClass('hide-cross');
    }
  })

  $('#cross').on('click', function() {
    $('#contenu').css('width', '0%');
    $('#contentPres').css('width', '50%');
    $('#accueil').css('transform', 'skewX(-25deg)');
    $('#accueil').css('left', '-50%');
    $('#contenu').removeClass("openContenu");
    $('#content').css('opacity', '0');
    $('#cross').addClass('hide-cross');
  })

  //compétences
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

  //menu
  //Gère le menu
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


  $(".bar").on('click', function() {
    if($(this).hasClass('close'))
    {
      $('.bar').removeClass('close');
      $('.bar').addClass('close');
      $(this).removeClass('close');
      $(this).addClass('open');
      $('.iconPlus').css('transform', 'rotate(-45deg)');
      $('.iconPlus', this).css('transform', 'rotate(0deg)');
    }
    else {
      $('.bar').addClass('close');
      $('.iconPlus').css('transform', 'rotate(-45deg)');
    }
  })


  //panorama
  $(".bar").mouseenter(function(){
    $('.bar').removeClass('toColor');
    $(this).addClass('toColor');
  }).mouseleave(function(){
    $(this).removeClass('toColor');
  });


});
