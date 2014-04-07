
$(document).ready(function(){
	$("td").html("&nbsp;");
//	$("#11").html("<div class='d8'>abc</div>");
	$("body").append("<div class='d8'>abc</div>");


	$(document).on("click",".btn",function(){
		clicked($(this).attr("id"));
//		alert($(this).attr("id"));
	});
});

function clicked(name){
alert(name);
}
