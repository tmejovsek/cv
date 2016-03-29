$( document ).ready(function() {


  $('#btnOpen').on('click', function() {
    if ( $('#contenu').hasClass('openContenu') ) {
      $('#contenu').css('width', '0%');
      $('#accueil').css('transform', 'skewX(-25deg)');
      $('#contenu').removeClass("openContenu");
      $('#content').css('opacity', '0');
      $('#cross').addClass('hide-cross');
    }
    else {
      // $('#contenu').toggle(true);
      $('#contenu').css('width', '50%');
      $('#accueil').css('transform', 'skewX(0deg)');
      $('#contenu').addClass("openContenu");
      $('#content').css('opacity', '1');
      $('#cross').removeClass('hide-cross');
    }
  })

  $('#cross').on('click', function() {
    $('#contenu').css('width', '0%');
    $('#accueil').css('transform', 'skewX(-25deg)');
    $('#contenu').removeClass("openContenu");
    $('#content').css('opacity', '0');
    $('#cross').addClass('hide-cross');
})

});
