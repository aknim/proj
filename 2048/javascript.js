$(document).ready(function(){
	$(".cell").html("&nbsp;");
	$("body").append("<div class='d8'>abc</div>");
	start();

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
console.log("img/btn:"+name+" = "+chng+" "+dxn);
}

function start(){
id1=getEmptyId();set(id1,"2");
id2=getEmptyId();set(id2,"2");
}

function set(id,val){
$(id).html(val);
$(id).addClass("d"+val);$(id).addClass("filled");
//$(id).addClass("filled");
}

function getEmptyId(){
id = randomId();
while($(id).hasClass("filled")){id=randomId();}
return id;
}
function randomId(){
row= Math.floor((Math.random()*4)+1); 
column= Math.floor((Math.random()*4)+1); 
id="#"+row+""+column;
return id;
}
