function update()
{
	$("iframe").contents().find("html").html(
	"<html><head><style type='text/css'>"+$('#writecss').val()+"</style></head>"+
	"<body>"+$("#writehtml").val()+"</body></html>");
	document.getElementById('writeoutput').contentWindow.eval($('#writejs').val());
}
$(".press").hover(function()
	{
		$(this).addClass("high");
	},
	function()
	{
		$(this).removeClass("high");
	}
)
$(".press").click(function()
	{
		$(this).toggleClass("initial");
		$(this).removeClass("high");
		var x=$(this).attr("id");
		x='write'+x;
		$('#'+x).toggleClass('hide');
		var ishide = 4-$('.hide').length;
		$('.hey').width((($(window).width())/ishide)-10);
	}
)
$('#dabody').width(($(window).width()));
$('#dabody').height(($(window).height())-$('#top-panel').height()-10);
update();
$("textarea").on('change keyup paste',function()
	{
		update();
	}
);
