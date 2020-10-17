$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#977BBD");
	},function() {
		$(this).css("background-color", "#5b4a71");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#75CFFF");
	}, function() {
		$(this).css("background-color", "#fff");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
