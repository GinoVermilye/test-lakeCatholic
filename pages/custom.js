// custom.js

/* add arrow to level 2 parent menu items */
$('.drop_level2_wrapper .drop1_haschildren').append('<span class="drop_nav_arrow"><svg width="18px" height="28px" viewBox="0 0 18 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.0871301,0,0,0.0871301,-2.15647,-8.30531)"><path d="M224.3,273L88.3,409C78.9,418.4 63.7,418.4 54.4,409L31.8,386.4C22.4,377 22.4,361.8 31.8,352.5L128.2,256.1L31.8,159.7C22.4,150.3 22.4,135.1 31.8,125.8L54.3,103C63.7,93.6 78.9,93.6 88.2,103L224.2,239C233.7,248.4 233.7,263.6 224.3,273Z" style="fill-rule:nonzero;"/></g></svg></span>');

/* toggle menu */
$('.togglemenu').click(function() {
	$('html').toggleClass('nav_open');
	$('#nav_panel').toggleClass('open');
});

/* mobile sub nav toggle */
$('.subnav_toggle_icon').click(function() {
	$(this).toggleClass('active');
	$(this).parent().next('.drop_level2_wrapper').slideToggle();
});

/* search icon toggle */
$('.search_icon').click(function(){
	$('.search_form_container').toggleClass('search_open');
	$(this).toggleClass('search_open');
});

/* inside page header padding */
$(window).on("load", function() {
	if ( $('header').hasClass('inside_page') ) {
		var headerheight = $('header').outerHeight();
		
		$('.banner').css('padding-top', headerheight);
	}
});

$(window).resize(function(){
	if ( $('header').hasClass('inside_page') ) {
		var headerheight = $('header').outerHeight();
		
		$('.banner').css('padding-top', headerheight);
	}
});

/* inside cta buttons top */
$(window).on("load", function() {
	if ( $('main').hasClass('inside_page') ) {
		if ( $('.banner').hasClass('.has_photo') ) {
			var bannerheight = $('.banner').outerHeight();
			$('.cta_button_container').css('top',bannerheight);
		}	else {
			var headerheight = $('header').outerHeight();
			$('.cta_button_container').addClass('no_banner');
			$('.cta_button_container').css('top',headerheight);
		}
	}
});

$(window).resize(function(){
	if ( $('main').hasClass('inside_page') ) {
		if ( $('.banner').hasClass('.has_photo') ) {
			var bannerheight = $('.banner').outerHeight();
			$('.cta_button_container').css('top',bannerheight);
		} else {
		var headerheight = $('header').outerHeight();
		$('.cta_button_container').addClass('no_banner');
		$('.cta_button_container').css('top',headerheight);
		}
	}
});
