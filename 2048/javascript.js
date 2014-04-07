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
id1=randomId();
id2=randomId();
while(id1===id2){id2=randomId();}
set(id1,"2");
set(id2,"2");
}

function set(id,val){
cell_id="#"+id;
$(cell_id).html(val);
$(cell_id).addClass("d"+val);
}

function randomId(){
row= Math.floor((Math.random()*4)+1); 
column= Math.floor((Math.random()*4)+1); 
id=row+""+column;
return id;
}
