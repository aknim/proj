$(document).ready(function(){
	$(".cell").html("&nbsp;");
	$("body").append("<div class='d8'>abc</div>");
	start();

	$(document).on("click",".btn",function(){
		clicked($(this).attr("id"));
	});
});

function clicked(name){
orientation="empty";direction="empty";
if ((name==="left")||(name==="right")) orientation="horizontal";
else orientation="vertical";
if ((name==="left")||(name==="down")) direction="negative";
else direction="positive";
console.log("img/btn:"+name+" = "+orientation+" "+direction);
move(orientation,direction);
}

function move(orientation,direction)
{
	switch(orientation){
	case 'horizontal' :
		arr_h=[];
		//get values in array
		for(i=1;i<=4;i++){
				arr=[];
			for(j=1;j<=4;j++)
			{
				id="#"+i+""+j;//difference of horizontal or vertical
				filled=($(id).hasClass("filled"));
				if(!filled){}
				else{arr.push($(id).html());}
				
			}
			//console.log(arr);
			arr_h.push(arr);
		}
		console.log(arr_h);	
		break;
	case 'vertical' :
		break;

	}
}


function start(){
id1=getEmptyId();set(id1,"2");
id2=getEmptyId();set(id2,"2");
for(i=1;i<=4;i++)
{
	for(j=1;j<=4;j++)
	{
		set("#"+i+""+j,10*i+j);
	}
}
unset("#44");
unset("#33");
unset("#12");unset("#13");
}

function unset(id){
$(id).removeClass(); //removeall
$(id).addClass("cell");
$(id).html("&nbsp;");
}
function set(id,val){
$(id).html(val);
$(id).addClass("d"+val);
$(id).addClass("filled");
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
