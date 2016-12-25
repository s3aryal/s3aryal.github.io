//ONLOAD CSS ADJUSTMENTS
jQuery(document).ready(function ($) {
	
	$('.howItWorksPage .navWrapper #theNav').localScroll({offset:-74});
	$('#resourcesNav').localScroll({offset:-74});
	$('#nLNav').localScroll({offset:-74});
	$('#careersHeader').localScroll({offset:-74}); 
	$('#rapidWrapper').localScroll({offset:-74});
		
	if (currentPage.match(/^\/(blog|tech-blog|think-tank)\/.*/)) {
		$(".widget_yarpp_widget").css({'display': 'block'});
	}
	
	$("#rapidWrapper, #landingPageForm").waypoint(function() {
		$(".headerWrapper").toggleClass("activateTop");
	}, {
  		offset: "96px;"
	});
	
	if (isMac == true)
	{
		$(".howItWorksPage .navWrapper").waypoint(function() {
			$(".headerWrapper").toggleClass("deactivateHeader");
		}, {
			offset: "96px;"
		});
		$(".howItWorksPage .navWrapper").waypoint(function() {
			$(".howItWorksPage").toggleClass("activateProductNav");
		}, {
				offset: "96px;"
		});
	} else {
		$(".howItWorksPage .navWrapper").waypoint(function() {
			$(".headerWrapper").toggleClass("deactivateHeader");
		}, {
			offset: "34px;"
		});
		$(".howItWorksPage .navWrapper").waypoint(function() {
			$(".howItWorksPage").toggleClass("activateProductNav");
		}, {
				offset: "3px;"
		});
	}
	
	$("#goUpArrows").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
	setTimeout('chatButtonLoad()', 2000);

});

var isMac;
if (navigator.userAgent.indexOf("Mac") != -1) {
	isMac = true;
}

bLHNOnline = 0; // default variable to 0 or else it will occasionally be undefined when referenced
function chatButtonLoad()
{
	if (bLHNOnline != 0)
	{
		jQuery("#questionsBtn").css({visibility: 'visible'});
	}
}

function showRSSMenu(theMenu)
{
	jQuery("#" + theMenu).css({display: 'block'});
}
function closeBlogRSSMenu(theMenu)
{
	jQuery(theMenu).css({display: 'none'});
}

/* used on Try Now page */
function trackSubmit()
{
	if(document.getElementById("theEmailField").value == (""||"Enter your company email")) {
		alert("Please enter your company email address before submitting the form.");
		return false;
	} else {
		dataLayer.push({'event': 'TryNowSubmit'});
		// quick delay to let call to Google go through
		return true;
		//setTimeout('return true;', 100);
	}
}

function focusAreaExpansion(theLink)
{
	if (theLink.innerHTML == "more")
	{
		$(theLink.parentNode.parentNode.getElementsByTagName("li")).css("display","block");
		$(theLink).css("background-position","100% -37px");
		$(theLink).text("less");
	} else {
		$(theLink.parentNode.parentNode.getElementsByTagName("li")).css("display","none");
		$(theLink.parentNode.parentNode.getElementsByTagName("li")[0]).css("display","block");
		$(theLink).css("background-position","100% 4px");
		$(theLink).text("more");
		$(theLink.parentNode).css("display","block");
	}
}

function swapResources(theSet, theResource, theLink)
{
	// stop any ongoing animations (to avoid 2 assets appearing simultaneously)
	$("*").stop( true, true );
	// hide all assets except if we're trying to show the one which is already visible
	$("#assetSet" + theSet + " .singleAsset:not(" + "#assetSet" + theSet + theResource  + ")").css("display","none");
	$("#assetSet" + theSet + theResource).fadeIn(1300).delay(100);
	$("#resourceSet" + theSet + " ul li a").attr("class","unselected");
	$(theLink).attr("class","selected");
}

function checkPasswordField(thePassword)
{
	var matchLowercase = /[a-z]/.test(thePassword);
	var matchUppercase = /[A-Z]/.test(thePassword);
	var matchNumber = /[0-9]/.test(thePassword);
	var matchSpecialCharacter = /\W|_/.test(thePassword);
	if (matchLowercase && matchUppercase && matchNumber && matchSpecialCharacter) {
		return true;
	} else {
		return false;
	}
}