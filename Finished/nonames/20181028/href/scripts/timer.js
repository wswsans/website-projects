hms=document.getElementsByClassName("timer_checks");
time_cn = document.getElementsByClassName("timer_analog"); hour_angle=30; minute_angle=6; second_angle=6; /* h=360/12, m=360/60, s=m/10*/
function time_set(){ time=new Date(); now_time = time.getHours()*60*60 +time.getMinutes()*60 +time.getSeconds() };
function abs(val) { return val < 0 ? -val : val; };
function divide(left, right) { d_reamaining=left; ct=0; while (d_reamaining>=right){ d_reamaining-=right; ct++; } return [ct, d_reamaining]; }
function sts(s, e){ return parseInt(str.slice( s, e )); }

function start_timer() {
	error=false; time_l=["hour", "minute", "second"]; time=0;

	for (var i = hms.length - 1; i >= 0; i--) {
		if (!hms[i].value){
			alert(hms[i].name+"が入力されてません");
			error=true;
			break;
		}else{ time_l[i]=abs(parseInt(hms[i].value)); }
	}

	if (!error){
		set_time=now_time; setted_time=time_l[0]*3600+time_l[1]*60+time_l[2];
		doc=document.getElementById("timer_set"); doc.innerHTML='<input type="text" class="timer" value="Er" readonly>';

		// --ストップ--/アナログ 追加

		var timer_set = function(){
			time_set(); reamaining=setted_time-(now_time-set_time); str=String(reamaining);

			/* s(s=1 m=60 h=3600) */
			h= String((str.length>=3 && sts(0, -2)>=36)? divide( sts(0, -2), 36 )[0]:0); ho=reamaining-h*3600; h=h.slice(-2);
			m= String((str.length>=2 && sts(-3, -1)>=6)? divide( ho, 60 )[0] :0); m=m.slice(-2);
			s= "0"+String(ho-m*60); s=s.slice(-2);

			/*アナログタイム*/
			sa = s*second_angle; ma = m*minute_angle; ha = h*hour_angle;
			time_cn[1].style.transform = "rotate("+ha+"deg)"; time_cn[2].style.transform = "rotate("+ma+"deg)"; time_cn[3].style.transform = "rotate("+sa+"deg)";

			h_str=(!parseInt(h))?"  　 ":h+"時間 "; ms_str=m+"分 " + s.slice(-2)+"秒"; timer_string=h_str+ms_str;
			doc.innerHTML='<input type="text" class="timer" readonly value="'+timer_string+'">';
			var timer_run = setTimeout(timer_set, 1000);
			if(reamaining<=0){　
				clearTimeout(timer_run); alert("終わりました"); 
				doc.innerHTML='Hour: <input type="number" name="hour" class="set timer_checks" value="'+time_l[0]+'" placeholder="0~"> Minute: <input type="number" name="minute" class="set timer_checks" value="'+time_l[1]+'" placeholder="0~59"> Second: <input type="number" name="second" class="set timer_checks" value="'+time_l[2]+'" placeholder="0~59">';
			}
		}
		timer_set();
	}
};


t=setInterval("time_set()", 100);