 document.getElementById('date_obj').firstChild.nodeValue = time; 
 <!-- <th>現地時間(英語)</th> -->
 <!-- <td><span id="date_obj"> Week Month Day Year Hour:Minute:Secont GMT+0900 (日本標準時) </span></td> --> 
 /


 shuto_sl=parseInt(document.getElementById("shuto_select").value);

 year = time.getUTCFullYear(); month = time.getUTCMonth(); date = time.getUTCDate(); day = time.getUTCDay();
 hour_s = time.getUTCHours()+9+Math.floor(shuto_sl); minute_s = time.getUTCMinutes()+(Math.floor(shuto_sl)-shuto_sl)*6; second_s = time.getUTCSeconds();

 str = year+" "+month+"/"+date+" "+week[day]+"曜日 "+hour_s+":"+minute_s+":"+second_s;
 document.getElementById('shuto_obj').firstChild.nodeValue = str; 

 s_s=second_s*second_angle;
 m_s=minute_s*minute_angle;
 h_s=hour_s*hour_angle;
 time_cn[6].style.transform = "rotate("+h_s+"deg)"; time_cn[7].style.transform = "rotate("+m_s+"deg)"; time_cn[8].style.transform = "rotate("+s_s+"deg)";

 <!-- <select name="shuto_sl" id="shuto_select">
	<option label="選択してください" value="0" disabled selected>選択してください</option>
	<option label="ニューヨーク" value="13">ニューヨーク</option>
	<option label="ロンドン" value="8">ロンドン</option>
	<option label="モスクワ" value="6">モスクワ</option>
	<option label="上海" value="1">上海</option>
	<option label="ロサンゼルス" value="16">ロサンゼルス</option>
	<option label="パリ" value="7">パリ</option>
	<option label="ヨハネスブルグ" value="7">ヨハネスブルグ</option>
	<option label="ソウル" value="0">ソウル</option>
	<option label="モントリオール" value="13">モントリオール</option>
	<option label="ベルリン" value="7">ベルリン</option>
	<option label="シドニー" value="2">シドニー</option>
	<option label="ニューデリー" value="3.5">ニューデリー</option>
	<option label="メキシコシティ" value="14">メキシコシティ</option>
	<option label="ローマ" value="7">ローマ</option>
	<option label="サンパウロ" value="12">サンパウロ</option>
	<option label="ジャカルタ" value="2">ジャカルタ</option>
	<option label="マドリード" value="7">マドリード</option>
	<option label="イスタンブール" value="6">イスタンブール</option>
	<option label="ブエノスアイレス" value="12">ブエノスアイレス</option>
	<option label="リヤド" value="6">リヤド</option>
	<option label="日本" value="0">日本</option>
	</select> -->
<!-- <th>首都時間</th> -->
<!-- <td class="time_analog">
	<img src="href/image/time_html.jpg" class="time_img">
	<div class="time hour" id="s_h">|</div>
	<div class="time minute" id="s_m">|</div>
	<div class="time second" id="s_s">|</div>
</td> -->
<!-- <th>首都時間</th> -->
<!-- <td><span id="shuto_obj"> Year Month/Day Week Hour:Minute:Second </span></td> -->

for (var i = hms.length - 1; i >= 0; i--) {
		if (0>=hms[i].value>=60){
			alert("範囲は0~60以内です");
			error=true
			break;
		}
	}