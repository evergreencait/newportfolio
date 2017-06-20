
$(document).ready(function(){
    $("#accordianmenu p").click(function(){
		$("#accordianmenu ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});
});
