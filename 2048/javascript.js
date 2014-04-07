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
if ((name==="left")||(name==="up")) direction="negative";//(1,1) is at bottom left corner
else direction="positive";
//console.log("img/btn:"+name+" = "+orientation+" "+direction);
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

function getStart_traversal_id(direction,len,p_len)
{
        switch(direction){
        case 'positive' :     return len -p_len +1;//as will begun from end
                break;
        case 'negative'   :     return 1;
                break;
        default:
        }

}
function log_current(){
	for(i=1;i<=4;i++){
		col="";
		for(j=1;j<=4;j++){
			id="#"+i+""+j+"";
			col=col+" "+$(id).html();
		}
		console.log(i+" "+col);
	}
}

function move(orientation,direction)
{
		log_current();
		//get values in array
		moving_space=false;
		same_neighbour=false;
		sensible_move=false;
	
		empty_neighbour=false;
		read_h=[];
		for(i=1;i<=4;i++){
				arr=[];
				atleast_one=false;
			for(j=1;j<=4;j++)
			{
				id=getId_traversal(orientation,i,j);//difference of horizontal or vertical
				filled=($(id).hasClass("filled"));
				if(!filled){
					oe=oppositeEdge(direction,4); 
					//console.log("oe for "+id+" "+orientation+" "+direction+" "+ oe); 
					if( j != oe )/*i.e. non-empty and not oppside, hence moving space*/   
					{moving_space=true;}
					}
				else{
					if(direction==="positive"&&j!=4){
						 nextId=getId_traversal(orientation,i,j+1);
						 empty_neighbour=(empty_neighbour||(!($(nextId).hasClass("filled"))));
						 console.log(id+" "+ orientation+" "+direction +" "+empty_neighbour);
						}
					if(direction==="negative"&&j!=1){
                                                 nextId=getId_traversal(orientation,i,j-1);
                                                 empty_neighbour=(empty_neighbour||(!($(nextId).hasClass("filled")))); 
						 console.log(id+" "+ orientation+" "+direction +" "+empty_neighbour);
                                                }
	
					atleast_one=true;arr.push($(id).html());
					}
				
				
			}
			sensible_move=(sensible_move||moving_space&&atleast_one);
			
			//console.log(i+" moving_space"+moving_space+" atleast_one "+atleast_one+" sensible_move"+sensible_move);
			read_h.push(arr);
		}
		//console.log("read_h "+read_h);	
		
		//calculate values into array
		print_h=[];
		for(i=0;i<read_h.length;i++){
				arr=[];
			for(j=0;j<read_h[i].length;){
				if(j+1==read_h[i].length){arr.push(read_h[i][j]);j=j+1;}
				else if(read_h[i][j]!==read_h[i][j+1]){arr.push(read_h[i][j]);j=j+1;}
				else{arr.push(""+parseInt(read_h[i][j])*2);j=j+2;same_neighbour=true;}
			}
			print_h.push(arr);
		}
		//console.log("print_h "+print_h.length+ " "+print_h);

		if(!(same_neighbour||empty_neighbour)){return;}
		//change contents
		clear_t(); //clear the current table
		display_h=[];
		len = 4;
		for(i=0;i<print_h.length;i++)
		{
			si=i+1;
			p_len=print_h[i].length;//console.log("plen "+p_len);
			st=getStart_traversal_id(direction,len,p_len);//difference of positive and negative
			sj=st;
//			console.log(si+ " s: "+sj);
			for(j=0;j<p_len;j++)
			{
				
		                //console.log(si+ " s: "+sj);

				id=getId_traversal(orientation,si,sj);//difference of horizontal or vertical
				//console.log(" to change: "+id+" val: "+print_h[i][j]);
				set(id,print_h[i][j]);//console.log("print_h index: "+j+" filling_index: "+si+" id: "+id+" val: "+print_h[i][j]);
				sj++;
			}
		}
		if(!(isOver())){
		id=getEmptyId();
		set(id,"2");}
		else{alert("gameOver");}

		
}

function oppositeEdge(direction,len)
{
	switch(direction){
	case 'positive': return 1;
		break;
	case 'negative': return len;
		break;
	default:
	}
}

function isOver()
{
	allFilled=true;
	equalsGoal=false;
	goal="32";
	for(i=1;i<=4;i++)
	{
		for(j=1;j<=4;j++)
		{
			id="#"+i+""+j;
			equalsGoal=( $(id).html()===goal ); if(equalsGoal) {console.log("Reached Goal");}
			allFilled=(allFilled&&( ($(id).hasClass("filled"))  ));
			//console.log(id+" "+allFilled);
		}
	}
	if(allFilled){console.log("Sorry No valid move left");}
	return (allFilled || equalsGoal);
}
function clear_t(){
for(i=1;i<=4;i++){
	for(j=1;j<=4;j++){
		unset("#"+i+""+j);
	}
}
}

function start(){
id1=getEmptyId();set(id1,"2");
id2=getEmptyId();set(id2,"2");
/*for(i=1;i<=4;i++)
{
	for(j=1;j<=4;j++)
	{
		set("#"+i+""+j,10*i+j);
	}
}
unset("#44");set("#44","43");
unset("#33");set("#33","43");
unset("#12");set("#12","14");
unset("#13");*/
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
