  // UNTUK TOMBOL HITUNG
 const calculate2 = () => { 
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
 		<table>
 		<tr>
 		  <td>Tahun</td>
        <td><pre> :<pre></td>
          <td> ${totaltahun} </td>
 	         	</tr>
 		<tr>
 		  <td>Tahun Tam</td>
        <td><pre> :<pre></td>
          <td> ${tahunTam} </td>
 	         	</tr>
 		<tr>
 		  <td>A</td>
        <td><pre> :<pre></td>
          <td> ${a} </td>
 	         	</tr>
 		<tr>
 		  <td>B</td>
        <td><pre> :<pre></td>
          <td> ${b} </td>
 	         	</tr>
 		<tr>
 		  <td>C</td>
        <td><pre> :<pre></td>
          <td> ${c} </td>
 	         	</tr>
 		<tr>
 		  <td>D</td>
        <td><pre> :<pre></td>
          <td> ${d} </td>
 	         	</tr>
 		<tr>
 		  <td>E</td>
        <td><pre> :<pre></td>
          <td> ${e} </td>
 	         	</tr>
 		<tr>
 		  <td>F</td>
        <td><pre> :<pre></td>
          <td> ${f} </td>
 	         	</tr>
 		<tr>
 		  <td>G</td>
        <td><pre> :<pre></td>
          <td> ${g} </td>
 	         	</tr>
 		<tr>
 		  <td>H</td>
        <td><pre> :<pre></td>
          <td> ${h} </td>
 	         	</tr>
 		<tr>
 		  <td>I</td>
        <td><pre> :<pre></td>
          <td> ${i} </td>
 	         	</tr>
 		  <td>HMN</td>
        <td><pre> :<pre></td>
          <td> ${hmn} </td>
 	         	</tr>
 		  <td>J</td>
        <td><pre> :<pre></td>
          <td> ${j} </td>
 	         	</tr>
 		  <td>K</td>
        <td><pre> :<pre></td>
          <td> ${k} </td>
 	         	</tr>
 		  <td>L</td>
        <td><pre> :<pre></td>
          <td> ${l} </td>
 	         	</tr>
 		  <td>M</td>
        <td><pre> :<pre></td>
          <td> ${m} </td>
 	         	</tr>
 		  <td>N</td>
        <td><pre> :<pre></td>
          <td> ${n} </td>
 	         	</tr>
 		  <td>O</td>
        <td><pre> :<pre></td>
          <td> ${o} </td>
 	         	</tr>
 		  <td>HMP</td>
        <td><pre> :<pre></td>
          <td> ${hmp} </td>
 	         	</tr>
 		  <td>P /400</td>
        <td><pre> :<pre></td>
          <td> ${p} ${btP} </td>
 	         	</tr>
 		  <td>Q /100</td>
        <td><pre> :<pre></td>
          <td> ${q} ${btQ} </td>
 	         	</tr>
 		  <td>R /4</td>
        <td><pre> :<pre></td>
          <td> ${r} ${btR} </td>
 	         	</tr>
 		  <td>TKB</td>
        <td><pre> :<pre></td>
          <td> ${kabisahBasitoh} </td>
 	         	</tr>
 	 		</table>
	  `; 
 	} 
  }; 