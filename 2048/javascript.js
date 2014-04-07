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

function getId_traversal(orientation,i,j)
{
	switch(orientation){
	case 'horizontal' :	return "#"+i+""+j;
		break;
	case 'vertical'   :	return "#"+j+""+i;
		break;
	default:
	}
}

function move(orientation,direction)
{
//	switch(orientation){
//	case 'horizontal' :
		read_h=[];
		//get values in array
		for(i=1;i<=4;i++){
				arr=[];
			for(j=1;j<=4;j++)
			{
				id=getId_traversal(orientation,i,j);//difference of horizontal or vertical
				filled=($(id).hasClass("filled"));
				if(!filled){}
				else{arr.push($(id).html());}
				
			}
			//console.log(arr);
			read_h.push(arr);
		}
		console.log(read_h);	

		print_h=[];
		for(i=0;i<read_h.length;i++){
				arr=[];
			for(j=0;j<read_h[i].length;){
				if(j+1==read_h[i].length){arr.push(read_h[i][j]);j=j+1;}
				else if(read_h[i][j]!==read_h[i][j+1]){arr.push(read_h[i][j]);j=j+1;}
				else{arr.push(""+parseInt(read_h[i][j])*2);j=j+2;}
			}
			print_h.push(arr);
		}
		console.log(print_h);
//		break;
//	case 'vertical' :
//		break;

//	}
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
unset("#44");set("#44","43");
unset("#33");set("#33","43");
unset("#12");set("#12","14");
unset("#13");
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
