$(document).ready(function(){
	$("td").addClass("changeable");
	arr=['0','X'];
	i=0;
	$(document).on('click',".changeable",function(){
				$(this).html(arr[i]);
				$(this).removeClass("changeable");
				i=(i+1)%2;
				////console.log(i); //console.log($(this).text());
				td1=( $("#1").text()  ); console.log(">"+td1+"<");
				td2=( $("#2").text()  ); //console.log(td2);
				td3=( $("#3").text()  ); //console.log(td3);
                                td4=( $("#4").text()  ); //console.log(td4);
                                td5=( $("#5").text()  ); //console.log(td5);
                                td6=( $("#6").text()  ); //console.log(td6);
                                td7=( $("#7").text()  ); //console.log(td7);
                                td8=( $("#8").text()  ); //console.log(td8);
                                td9=( $("#9").text()  ); //console.log(td9);

				console.log(td1!==".");
				tr=((td1===td2)&&(td2===td3)&&((td1==="X")||(td1==="0"))); //console.log(tr);
				mr=((td4===td5)&&(td5===td6)&&((td4==="X")||(td4==="0"))); //console.log(mr);
				br=((td7===td8)&&(td8===td9)&&((td7==="X")||(td7==="0"))); //console.log(br);
				tc=((td1===td4)&&(td4===td7)&&((td1==="X")||(td1==="0"))); //console.log(tc);
				mc=((td2===td5)&&(td5===td8)&&((td2==="X")||(td2==="0"))); //console.log(mc);
				bc=((td3===td6)&&(td6===td9)&&((td3==="X")||(td3==="0"))); //console.log(bc);
				td=((td1===td5)&&(td5===td9)&&((td1==="X")||(td1==="0"))); //console.log(td);
				bd=((td3===td5)&&(td5===td7)&&((td3==="X")||(td3==="0"))); //console.log(bd);

				if(tr||mr||br||tc||mc||bc||td||bd)
				{$("td").removeClass("changeable"); alert(arr[(i-1)%2] +"wins");}
	});
});
