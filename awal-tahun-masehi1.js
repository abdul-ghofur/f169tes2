  // UNTUK TOMBOL HASIL
 const calculate1 = () => { 
  let tahun = document.querySelector("#tahun").value; 
  let totaltahun = parseFloat(tahun) 
  let tahunTam = totaltahun - 1;
  let a = tahunTam % 400;
  let b = tahunTam % 100;
  let c = tahunTam % 4; let dx = tahunTam /400;
  let d = Math.trunc(dx) *7; let ex = a /100;
  let e = Math.trunc(ex) *5; let fx = b /4;
  let f = Math.trunc(fx) *5;
  let g = c + 2;
  let h = d + e + f + g; 
  let i = h % 7;
  if (i == 0) {hmn = "Sabtu";} 
  else if (i == 1) {hmn = "Minggu";} 
  else if (i == 2) {hmn = "Senin";} 
  else if (i == 3) {hmn = "Selasa";} 
  else if (i == 4) {hmn = "Rabu";} 
  else if (i == 5) {hmn = "Kamis";} 
  else if (i == 6) {hmn = "Jumat";} 
  else if (i == 7) {hmn = "Sabtu";}
  let jx = tahunTam / 400; 
  let j = Math.trunc(jx) *2;
  let k = Math.trunc(ex) *4; let lx = b /4;
  let l = Math.trunc(lx);
  let m = c * 5;
  let n = j +k +l +m +2;
  let o = n % 5;
  if (o == 0) {hmp = "Kliwon";}
  else if (o == 1) {hmp = "Legi";}
  else if (o == 2) {hmp = "Pahing";}
  else if (o == 3) {hmp = "Pon";}
  else if (o == 4) {hmp = "Wage";}
  else if (o == 5) {hmp = "Kliwon";}
  let p = totaltahun % 400;
  let q = totaltahun % 100;
  let r = totaltahun % 4;
  if (p == 0) {btP = "(Bisa dibagi)";} 
  else {btP = "(Tidak bisa dibagi)";}
  if (q == 0) {btQ = "(Bisa dibagi)";} 
  else {btQ = "(Tidak bisa dibagi)";}
  if (r == 0) {btR = "(Bisa dibagi)";} 
  else {btR = "(Tidak bisa dibagi)";}
  if ((totaltahun %100!=0) && (totaltahun %4==0) || (totaltahun %400==0)){kabisahBasitoh = "Tahun Kabisah (Feb 29)";}
  else{kabisahBasitoh = "Tahun Basitoh (Feb 28)";}
  if ((totaltahun %100!=0) && (totaltahun %4==0) || (totaltahun %400==0)){kbbs = 29;}
  else{kbbs = 28;}
  // US HARI & US PASARAN BULAB FEBRUARI 
  let feb = (i + 3) %7;
  if (feb ==0) {usFeb = "Sabtu";}
  else if (feb ==1) {usFeb = "Minggu";}
  else if (feb ==2) {usFeb = "Senin";}
  else if (feb ==3) {usFeb = "Selasa";}
  else if (feb ==4) {usFeb = "Rabu";}
  else if (feb ==5) {usFeb = "Kamis";}
  else if (feb ==6) {usFeb = "Jumat";}
  else if (feb ==7) {usFeb = "Sabtu";}
  let feb2 = (o + 1) %5;
  if (feb2 ==0) {usFeb2 = "Kliwon";}
  else if (feb2 ==1) {usFeb2 = "Legi";}
  else if (feb2 ==2) {usFeb2 = "Pahing";}
  else if (feb2 ==3) {usFeb2 = "Pon";}
  else if (feb2 ==4) {usFeb2 = "Wage";}
  else if (feb2 ==5) {usFeb2 = "Kliwon";}
  // US BULAN & US PASARAN BULAN MARET
  if (kbbs == 29) {usMar = (i + 4) %7;}
  else {usMar = (i + 3) %7;}
  if (usMar ==0) {harMar = "Sabtu";}
  else if (usMar ==1) {harMar = "Minggu";}
  else if (usMar ==2) {harMar = "Senin";}
  else if (usMar ==3) {harMar = "Selasa";}
  else if (usMar ==4) {harMar = "Rabu";}
  else if (usMar ==5) {harMar = "Kamis";}
  else if (usMar ==6) {harMar = "Jumat";}
  else if (usMar ==7) {harMar = "Sabtu";}
  if (kbbs ==29) {usMar2 = (o + 0) %5;}
  else {usMar2 = (o + 4) %5;}
  if (usMar2 ==0) {pasMar = "Kliwon";}
  else if (usMar2 ==1) {pasMar = "Legi";}
  else if (usMar2 ==2) {pasMar = "Pahing";}
  else if (usMar2 ==3) {pasMar = "Pon";}
  else if (usMar2 ==4) {pasMar = "Wage";}
  else if (usMar2 ==5) {pasMar = "Kliwon";}
  // US BULAN & US PASARAN BULAN APRIL
  if (kbbs == 29) {usAp = (i + 0) %7;}
  else {usAp = (i + 6) %7;}
  if (usAp ==0) {harAp = "Sabtu";}
  else if (usAp ==1) {harAp = "Minggu";}
  else if (usAp ==2) {harAp = "Senin";}
  else if (usAp ==3) {harAp = "Selasa";}
  else if (usAp ==4) {harAp = "Rabu";}
  else if (usAp ==5) {harAp = "Kamis";}
  else if (usAp ==6) {harAp = "Jumat";}
  else if (usAp ==7) {harAp = "Sabtu";}
  if (kbbs == 29) {usAp2 = (o + 1) %5;}
  else {usAp2 = (o + 0) %5;}
  if (usAp2 ==0) {pasAp = "Kliwon";}
  else if (usAp2 ==1) {pasAp = "Legi";}
  else if (usAp2 ==2) {pasAp = "Pahing";}
  else if (usAp2 ==3) {pasAp = "Pon";}
  else if (usAp2 ==4) {pasAp = "Wage";}
  else if (usAp2 ==5) {pasAp = "Kliwon";}
  // US BULAN & US PASARAN BULAN MEI
  if (kbbs == 29) {usMei = (i + 2) %7;}
  else {usMei = (i + 1) %7;}
  if (usMei ==0) {harMei = "Sabtu";}
  else if (usMei ==1) {harMei = "Minggu";}
  else if (usMei ==2) {harMei = "Senin";}
  else if (usMei ==3) {harMei = "Selasa";}
  else if (usMei ==4) {harMei = "Rabu";}
  else if (usMei ==5) {harMei = "Kamis";}
  else if (usMei ==6) {harMei = "Jumat";}
  else if (usMei ==7) {harMei = "Sabtu";}
  // US BULAN & US PASRAN BULAN JUNI
  if (kbbs == 29) {usJun = (i + 5) %7;}
  else {usJun = (i + 4) %7;}
  if (usJun ==0) {harJun = "Sabtu";}
  else if (usJun ==1) {harJun = "Minggu";}
  else if (usJun ==2) {harJun = "Senin";}
  else if (usJun ==3) {harJun = "Selasa";}
  else if (usJun ==4) {harJun = "Rabu";}
  else if (usJun ==5) {harJun = "Kamis";}
  else if (usJun ==6) {harJun = "Jumat";}
  else if (usJun ==7) {harJun = "Sabtu";}
  if (kbbs == 29) {usJun2 = (o + 2) %5;}
  else {usJun2 = (o + 1) %5;}
  if (usJun2 ==0) {pasJun = "Kliwon";}
  else if (usJun2 ==1) {pasJun = "Legi";}
  else if (usJun2 ==2) {pasJun = "Pahing";}
  else if (usJun2 ==3) {pasJun = "Pon";}
  else if (usJun2 ==4) {pasJun = "Wage";}
  else if (usJun2 ==5) {pasJun = "Kliwon";}
  // US BULAN & US PASRAN BULAN JULI
  if (kbbs == 29) {usJul = (i + 0) %7;}
  else {usJul = (i + 6) %7;}
  if (usJul ==0) {harJul = "Sabtu";}
  else if (usJul ==1) {harJul = "Minggu";}
  else if (usJul ==2) {harJul = "Senin";}
  else if (usJul ==3) {harJul = "Selasa";}
  else if (usJul ==4) {harJul = "Rabu";}
  else if (usJul ==5) {harJul = "Kamis";}
  else if (usJul ==6) {harJul = "Jumat";}
  else if (usJul ==7) {harJul = "Sabtu";}
  // US BULAN & US PASRAN BULAN AGUSTUS
  if (kbbs == 29) {usGus = (i + 3) %7;}
  else {usGus = (i + 2) %7;}
  if (usGus ==0) {harGus = "Sabtu";}
  else if (usGus ==1) {harGus = "Minggu";}
  else if (usGus ==2) {harGus = "Senin";}
  else if (usGus ==3) {harGus = "Selasa";}
  else if (usGus ==4) {harGus = "Rabu";}
  else if (usGus ==5) {harGus = "Kamis";}
  else if (usGus ==6) {harGus = "Jumat";}
  else if (usGus ==7) {harGus = "Sabtu";}
  if (kbbs ==29) {usGus2 = (o + 3) %5;}
  else {usGus2 = (o + 2) %5;}
  if (usGus2 ==0) {pasGus = "Kliwon";}
  else if (usGus2 ==1) {pasGus = "Legi";}
  else if (usGus2 ==2) {pasGus = "Pahing";}
  else if (usGus2 ==3) {pasGus = "Pon";}
  else if (usGus2 ==4) {pasGus = "Wage";}
  else if (usGus2 ==5) {pasGus = "Kliwon";}
  // US BULAN & US PASRAN BULAN SEPTEMBER
  if (kbbs == 29) {usSep = (i + 6) %7;}
  else {usSep = (i + 5) %7;}
  if (usSep ==0) {harSep = "Sabtu";}
  else if (usSep ==1) {harSep = "Minggu";}
  else if (usSep ==2) {harSep = "Senin";}
  else if (usSep ==3) {harSep = "Selasa";}
  else if (usSep ==4) {harSep = "Rabu";}
  else if (usSep ==5) {harSep = "Kamis";}
  else if (usSep ==6) {harSep = "Jumat";}
  else if (usSep ==7) {harSep = "Sabtu";}
  if (kbbs ==29) {usSep2 = (o + 4) %5;}
  else {usSep2 = (o + 3) %5;}
  if (usSep2 ==0) {pasSep = "Kliwon";}
  else if (usSep2 ==1) {pasSep = "Legi";}
  else if (usSep2 ==2) {pasSep = "Pahing";}
  else if (usSep2 ==3) {pasSep = "Pon";}
  else if (usSep2 ==4) {pasSep = "Wage";}
  else if (usSep2 ==5) {pasSep = "Kliwon";}
  // US BULAN & US PASRAN BULAN OKTOBER
  if (kbbs == 29) {usOkt = (i + 1) %7;}
  else {usOkt = (i + 0) %7;}
  if (usOkt ==0) {harOkt = "Sabtu";}
  else if (usOkt ==1) {harOkt = "Minggu";}
  else if (usOkt ==2) {harOkt = "Senin";}
  else if (usOkt ==3) {harOkt = "Selasa";}
  else if (usOkt ==4) {harOkt = "Rabu";}
  else if (usOkt ==5) {harOkt = "Kamis";}
  else if (usOkt ==6) {harOkt = "Jumat";}
  else if (usOkt ==7) {harOkt = "Sabtu";}
  // US BULAN & US PASRAN BULAN NOVEMBER
  if (kbbs == 29) {usNov = (i + 4) %7;}
  else {usNov = (i + 3) %7;}
  if (usNov ==0) {harNov = "Sabtu";}
  else if (usNov ==1) {harNov = "Minggu";}
  else if (usNov ==2) {harNov = "Senin";}
  else if (usNov ==3) {harNov = "Selasa";}
  else if (usNov ==4) {harNov = "Rabu";}
  else if (usNov ==5) {harNov = "Kamis";}
  else if (usNov ==6) {harNov = "Jumat";}
  else if (usNov ==7) {harNov = "Sabtu";}
  if (kbbs ==29) {usNov2 = (o + 0) %5;}
  else {usNov2 = (o + 4) %5;}
  if (usNov2 ==0) {pasNov = "Kliwon";}
  else if (usNov2 ==1) {pasNov = "Legi";}
  else if (usNov2 ==2) {pasNov = "Pahing";}
  else if (usNov2 ==3) {pasNov = "Pon";}
  else if (usNov2 ==4) {pasNov = "Wage";}
  else if (usNov2 ==5) {pasNov = "Kliwon";}
  if (kbbs == 29) {usDes = (i + 6) %7;}
  else {usDes = (i + 5) %7;}
  if (usDes ==0) {harDes = "Sabtu";}
  else if (usDes ==1) {harDes = "Minggu";}
  else if (usDes ==2) {harDes = "Senin";}
  else if (usDes ==3) {harDes = "Selasa";}
  else if (usDes ==4) {harDes = "Rabu";}
  else if (usDes ==5) {harDes = "Kamis";}
  else if (usDes ==6) {harDes = "Jumat";}
  else if (usDes ==7) {harDes = "Sabtu";}
  
   // check apakah sudah memasukan inputan tahun atau belum?
   // jika belum, maka "Harap masukan tahun"
  if (tahun == "") { 
  	document.querySelector("#showdata").innerHTML 
 		= "Mohon maaf, harap masukan tahun !"; 
   } 
	// jika sudah, keluarkan hasil
  	 else { 
  	document.querySelector( 
  		"#showdata"
  	).innerHTML = 
 		` 
 		<div class="divtable">
 		<table>
 	  	<tr><th class="th">No</th>
 	      <th>Bulan</th>
 	        <th>H.NSL</th>
 	          <th>H.PSN</th>
 		           <th>U.Bln</th></tr>
 	    <tr><td>1</td>
 	      <td>Januari</td>
 	        <td><pre> ${hmn}</td>
 	          <td><pre> ${hmp}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>2</td>
 	      <td>Februari</td>
 	        <td><pre> ${usFeb}</td>
 	          <td><pre> ${usFeb2}</td>
 	            <td><pre> ${kbbs}</td></tr>
 	    <tr><td>3</td>
 	      <td>Maret</td>
 	        <td><pre> ${harMar}</td>
 	          <td><pre> ${pasMar}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>4</td>
 	      <td>April</td>
 	        <td><pre> ${harAp}</td>
 	          <td><pre> ${pasAp}</td>
 	            <td><pre> 30</td></tr>
 	    <tr><td>5</td>
 	      <td>Mei</td>
 	        <td><pre> ${harMei}</td>
 	          <td><pre> ${pasAp}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>6</td>
 	      <td>Juni</td>
 	        <td><pre> ${harJun}</td>
 	          <td><pre> ${pasJun}</td>
 	            <td><pre> 30</td></tr>
 	    <tr><td>7</td>
 	      <td>Juli</td>
 	        <td><pre> ${harJul}</td>
 	          <td><pre> ${pasJun}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>8</td>
 	      <td>Agustus</td>
 	        <td><pre> ${harGus}</td>
 	          <td><pre> ${pasGus}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>9</td>
 	      <td>September</td>
 	        <td><pre> ${harSep}</td>
 	          <td><pre> ${pasSep}</td>
 	            <td><pre> 30</td></tr>
 	    <tr><td>10</td>
 	      <td>Oktober</td>
 	        <td><pre> ${harOkt}</td>
 	          <td><pre> ${pasSep}</td>
 	            <td><pre> 31</td></tr>
 	    <tr><td>11</td>
 	      <td>November</td>
 	        <td><pre> ${harNov}</td>
 	          <td><pre> ${pasNov}</td>
 	            <td><pre> 30</td></tr>
 	    <tr><td>12</td>
 	      <td>Desember</td>
 	        <td><pre> ${harDes}</td>
 	          <td><pre> ${pasNov}</td>
 	            <td><pre> 31</td></tr>
 	 		</table>
 	 		</div>
	  `; 
 	} 
  }; 