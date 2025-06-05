$(document).ready(function () {
	// MagnificPopup
	var magnifPopup = function () {
		var groups = {};

		$('.image-popup').each(function () {
			var group = $(this).data('group'); // gallery1, gallery2 등
			if (!groups[group]) {
				groups[group] = [];
			}
			groups[group].push(this);
		});

		$.each(groups, function (_, groupItems) {
			$(groupItems).magnificPopup({
				type: 'image',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom',
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function (openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});
		});
	};


	var magnifVideo = function () {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};




	// Call the functions 
	magnifPopup();
	magnifVideo();

});