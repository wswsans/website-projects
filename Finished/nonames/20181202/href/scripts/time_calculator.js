console.log("Time_Calculator Script Connected!")
function abs(val) { return val < 0 ? -val : val; };
function divide(left, right) { d_reamaining=left; ct=0; while (d_reamaining>=right){ d_reamaining-=right; ct++; } return [ct, d_reamaining]; }
function sts(s, e){ return parseInt(str.slice( s, e )); }

lef = document.getElementsByClassName('left'); rig = document.getElementsByClassName('right');
left_v = [0, 1, 2]; right_v = [0, 1, 2];

function Calculator() {
	for (var i = rig.length - 1; i >= 0; i--) { right_v[i] = Number(rig[i].value); left_v[i] = Number(lef[i].value); }
	left = left_v[0]*60*60 + left_v[1]*60 + left_v[2]; right = right_v[0]*60*60 + right_v[1]*60 + right_v[2];
	if (document.getElementById("calc").value=="plus"){ res=left+right; }else{ res=left-right; }
	str=String(res);

	h= String((str.length>=3 && sts(0, -2)>=36)? divide( sts(0, -2), 36 )[0]:0); ho=res-h*3600; h=h.slice(-2);
	m= String((str.length>=2 && sts(-3, -1)>=6)? divide( ho, 60 )[0] :0); m=m.slice(-2);
	s= "0"+String(ho-m*60); s=s.slice(-2);

	// console.log("Res: "+res, "left: "+left, "right: "+right, "lef: ",lef, "rig: ",rig);
	// document.getElementById("answer").innerHTML = '<span class="time_input" id="answer">Answer: '+h+" : "+m+" "+s+"</span>";
	document.getElementById("answer").firstChild.nodeValue="Answer: "+h+":"+m+" "+s;
	// console.log("Outputted!");
}