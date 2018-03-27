
$('.btn-enregistrer').click(function() {
  $('.connexion').addClass('remove-section');
	$('.enregistrer').removeClass('active-section');
  $('.btn-enregistrer').removeClass('active');
  $('.btn-connexion').addClass('active');
});

$('.btn-connexion').click(function() {
  $('.connexion').removeClass('remove-section');
	$('.enregistrer').addClass('active-section');
  $('.btn-enregistrer').addClass('active');
  $('.btn-connexion').removeClass('active');
});
