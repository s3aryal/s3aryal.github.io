var currentPage = location.pathname;

function selectMainNav()
{
	if (currentPage.match(/^\/(application-platform-as-a-service|solutions|for-your-industry|integrate)\//)) {
		$("a#exploreBtn").addClass("mainNavSelected");
	} else if (currentPage.match(/^\/customers\//)) {
		$("a#customersBtn").addClass("mainNavSelected");
	} else if (currentPage.match(/^\/company\//)) {
		$("a#aboutBtn").addClass("mainNavSelected");
	} else if (currentPage.match(/^\/(blogs|community|category|partners)\//)) {
		$("a#communityBtn").addClass("mainNavSelected");
	}
}

jQuery(document).ready(function ($) {
	selectMainNav();
});