$( document ).ready(function() {

  $('#btnWarning').on('click', function() {
    $('#warning').fadeOut(500);
  })

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
      // $('#contenu').toggle(true);
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

});
