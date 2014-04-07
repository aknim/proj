
$(document).ready(function(){
	$(".cell").html("&nbsp;");
//	$("#11").html("<div class='d8'>abc</div>");
	$("body").append("<div class='d8'>abc</div>");


	$(document).on("click",".btn",function(){
		clicked($(this).attr("id"));
	});
});

function clicked(name){
chng="empty";dxn="empty";
if ((name==="left")||(name==="right")) dxn="horizontal";
else dxn="vertical";
if ((name==="left")||(name==="down")) chng="negative";
else chng="positive";
console.log("img/btn:"name+" = "+chng+" "+dxn);
}
