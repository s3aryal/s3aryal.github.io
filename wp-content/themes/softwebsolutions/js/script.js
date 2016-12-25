/* 
	author: istockphp.com
*/
jQuery(function($) {
	
	$("a.topopup").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup 
			}, 500); // .5 second
	return false;
	});
	
	/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);
	
	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});
	
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}  	
	});
	
	$("div#backgroundPopup").click(function() {
		disablePopup();  // function close pop up
	});
	
	$('a.livebox').click(function() {
		alert('Hello World!');
	return false;
	});
	

	 /************** start: functions. **************/
	function loading() {
		$("div.loader").show();  
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');  
	}
	
	var popupStatus = 0; // set value
	
	function loadPopup() { 
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup").fadeIn(0500); // fadein popup div
			$("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup").fadeIn(0001); 
			popupStatus = 1; // and set value to 1
		}	
	}
		
	function disablePopup() {
		
		if(popupStatus == 1) { // if value is 1, close popup
			// Added by Softweb
			var iframe = document.getElementById('viewvideo');
			if(iframe != null){
				iframe.src = iframe.src;
			}
			// End
			$("#toPopup").fadeOut("normal");  
			$("#backgroundPopup").fadeOut("normal");  
			popupStatus = 0;  // and set value to 0
		}
	}
	$("a[href='#contactform']").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
    return false;
});
	
	/************** end: functions. **************/
}); // jQuery End

/******************owl singal slider**********************/

jQuery("#singal-slider").owlCarousel({
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true

	// "singleItem:true" is a shortcut for:
	// items : 1, 
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false

});  
 
jQuery("#testimonials-slider").owlCarousel({
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true
	// "singleItem:true" is a shortcut for:
	// items : 1, 
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false

});



 jQuery(document).ready(function() {
	 	
	jQuery( ".morelink1" ).click(function() {
	  jQuery(".color1").toggleClass("displaycontent") 
	});
	
	jQuery( ".morelink2" ).click(function() {
	  jQuery(".color2").toggleClass("displaycontent") 
	});
	
	jQuery( ".morelink3" ).click(function() {
	  jQuery(".color3").toggleClass("displaycontent") 
	});
	
	jQuery( ".morelink4" ).click(function() {
	  jQuery(".color4").toggleClass("displaycontent") 
	});
	
	jQuery( ".morelink5" ).click(function() {
	  jQuery(".color5").toggleClass("displaycontent") 
	});
	
	jQuery( ".morelink6" ).click(function() {
	  jQuery(".color6").toggleClass("displaycontent") 
	});			

  });
  
  jQuery("#clientSlider").owlCarousel({
 		navigation : false,
		pagination: true,
      	autoPlay: false, //Set AutoPlay to 3 seconds
      	singleItem:true
	});


/*******************page scroll**********************/
jQuery(window).scroll(function() {

    if (jQuery(document).scrollTop() > 470) {

        jQuery('.header-new').addClass('stickynav');

    }

    else {

        jQuery('.header-new').removeClass('stickynav');

    }

});
/*******************page scroll**********************/



/*******************Company page map function**********************/
jQuery(function(){
    jQuery('.contact-add').css({'height':((jQuery('.map-section').height())-0)+'px'});

    jQuery('.map-section').resize(function(){
    jQuery('.contact-add').css({'height':((jQuery('.map-section').height())-0)+'px'});
    });
});

/*********************************************/
jQuery(document).ready(function() {
	jQuery("a.imagefnbox").each(function( index ) {
		jQuery(this).fancybox({
			'titleShow'     : false
		});	  
	});
});


/*****************top scroll ************/
jQuery('a[href^="#contact-form"]').click(function(e) {
    jQuery('html,body').animate({
        scrollTop: jQuery(this.hash).offset().top 
    }, 1000);
    return false;
    e.preventDefault();
});

jQuery('a[href^="#form-contact"]').click(function(e) {
    jQuery('html,body').animate({
        scrollTop: jQuery(this.hash).offset().top 
    }, 1000);
    return false;
    e.preventDefault();
});



/*******************Fancybox**********************/  
jQuery('.submitbtn-quick').click(function() {
	
	var strNameMessage = '';
	var strEmailMessage = '';
	
	if(jQuery('#first_name').val() == '')
	{	
		strNameMessage = 'Please enter your name.';
	}
	
	if(jQuery('#email').val() == '')
	{	
		strEmailMessage = 'Please enter valid email address.';
	}
	else
	{
		var stremail = jQuery('#email').val();
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(stremail))
		{
			strEmailMessage = 'Please enter valid email address.';
		}
	}
	
	if(strNameMessage != '' || strEmailMessage != '')
	{
		jQuery('#err-name-msg').html(strNameMessage);
		jQuery('#err-email-msg').html(strEmailMessage);
		return false;	
	}

});

jQuery('.sub_submitbtn').click(function() {

	if(jQuery('.sub-email').val() == '')
	{	
		jQuery('#display-msg').html('Please enter valid email address.');
		return false;
	}
	else
	{
		var email = jQuery('.sub-email').val();
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email))
		{
			jQuery('#display-msg').html('Please enter valid email address.');
			return false;
		}
	}

});

jQuery('a[href^="#careers"]').click(function(e) {
    jQuery('html,body').animate({
        scrollTop: jQuery(this.hash).offset().top - 150
    }, 1000);
    return false;
    e.preventDefault();
});


jQuery(function() {
    jQuery( "#careers-tab" ).tabs();
 });