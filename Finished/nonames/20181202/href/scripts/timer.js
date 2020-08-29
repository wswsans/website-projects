console.log("Timer Scripts Connected!");

function abs(val) { return val < 0 ? -val : val; };
function divide(left, right) { d_reamaining=left; ct=0; while (d_reamaining>=right){ d_reamaining-=right; ct++; } return [ct, d_reamaining]; }
function sts(s, e){ return parseInt(str.slice( s, e )); }

// input=document.getElementsByClassName("in"); output=document.getElementsByClassName("out");
input=document.getElementsByClassName("ins"); inputs=["h", "m", "s"];
output=document.getElementsByClassName("outs"); start_btn=document.getElementsByClassName("start");
in_parent=document.getElementsByClassName("in"); out_parent=document.getElementsByClassName("out");
st=false; id_var=1;

var before_start = function(){
	// document.getElementById("hide").id="show"; document.getElementById("show").id="hide";
	if (id_var){
		in_parent.show.id="hide"; out_parent.hide.id="show"; id_var=0;
	}else {
		in_parent.hide.id="show"; out_parent.show.id="hide"; id_var=1;
	}
	if (st){ 
		/*ストップした*/
		st=false; num=0; 
		start_btn[0].firstChild.nodeValue="Start"; 
	}else{ 
		/*スタートした*/
		check(); st=true; 
		start_btn[0].firstChild.nodeValue="Stop"; 
	}
}

var check = function(){
	for (var i = input.length - 1; i >= 0; i--) { inputs[i]=parseInt(input[i].value); };
	num=inputs[0]*60*60 + inputs[1]*60 + inputs[2] +1;
	start();
}

var start = function(){
	var timer_run=setTimeout(start, 1000);
	num--; str=String(num);
	h= String((str.length>=3 && sts(0, -2)>=36)? divide( sts(0, -2), 36 )[0]:0); ho=num-h*3600; h=h.slice(-2);
	m= String((str.length>=2 && sts(-3, -1)>=6)? divide( ho, 60 )[0] :0); m=m.slice(-2);
	s= "0"+String(ho-m*60); s=s.slice(-2);
	output[0].firstChild.nodeValue=h; output[1].firstChild.nodeValue=m; output[2].firstChild.nodeValue=s; 
	if(num<=0){ 
		if (st){ alert("終わりました"); st=true;before_start();}
		clearTimeout(timer_run); 
	}
}