/* デジタルタイム */
t = 0; week = ["日", "月", "火", "水", "木", "金", "土"];
function TimeSet() { 
	time = new Date(); 
}

function GetData() { 
	hour = time.getHours(); minute = time.getMinutes(); second = time.getSeconds();
	year = time.getFullYear(); month = time.getMonth(); date = time.getDate(); day = time.getDay();

	year = time.getUTCFullYear(); month = time.getUTCMonth(); date = time.getUTCDate(); day = time.getUTCDay();
	hour_u = time.getUTCHours(); minute_u = time.getUTCMinutes(); second_u = time.getUTCSeconds();
}

function SetData() { 
	str = year+" "+month+"/"+date+" "+week[day]+"曜日 "+hour+":"+minute+":"+second;
	document.getElementById('obj').firstChild.nodeValue = str; 

	str = year+" "+month+"/"+date+" "+week[day]+"曜日 "+hour_u+":"+minute_u+":"+second_u;
	document.getElementById('utc_obj').firstChild.nodeValue = str;  
}



/* アナログタイム */
time_cn = document.getElementsByClassName("time");
hour_angle=30; minute_angle=6; second_angle=6; // h=360/12, m=360/60, s=m/10
function GetAnalogTime() {
	s_n=second*second_angle; s_u=second_u*second_angle; 
	m_n=minute*minute_angle; m_u=minute_u*minute_angle; 
	h_n=hour*hour_angle; h_u=hour_u*hour_angle; 
}
function SetAnalogTime() {
	time_cn[0].style.transform = "rotate("+h_n+"deg)"; time_cn[1].style.transform = "rotate("+m_n+"deg)"; time_cn[2].style.transform = "rotate("+s_n+"deg)";
	time_cn[3].style.transform = "rotate("+h_u+"deg)"; time_cn[4].style.transform = "rotate("+m_u+"deg)"; time_cn[5].style.transform = "rotate("+s_u+"deg)";
}

/* セット */
t = setInterval("TimeSet()", 1);
time=setInterval("GetData()", 1);  utc_time=setInterval("SetData()", 1);

analog_t=setInterval("GetAnalogTime()", 1); utc_analog_t=setInterval("SetAnalogTime()", 1);