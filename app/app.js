var firstMoveOn = document.querySelector(".firstMoveOn");
var secondMoveOn = document.querySelector(".secondMoveOn");
var secondMoveOnSE = document.querySelector(".secondMoveOnSE");
var secondMoveOnM = document.querySelector(".secondMoveOnM");
var thirdMoveOn = document.querySelector(".thirdMoveOn");
var thirdMoveOnSE = document.querySelector(".thirdMoveOnSE");
var thirdMoveOnM = document.querySelector(".thirdMoveOnM");
var fetchString = "";

var body1 = document.querySelector("#body1");
body1.style.display = "block";
var body2CS = document.querySelector("#body2CS");
body2CS.style.display = "none";
var body2SE = document.querySelector("#body2SE");
body2SE.style.display = "none";
var body3M = document.querySelector("#body2M");
body2M.style.display = "none";
var body3CS = document.querySelector("#body3CS");
body3CS.style.display = "none";
var body3SE = document.querySelector("#body3SE");
body3SE.style.display = "none";
var body3M = document.querySelector("#body3M");
body3M.style.display = "none";
var csSchedule = document.querySelector(".csSchedule");
csSchedule.style.display = "none";
var seSchedule = document.querySelector(".seSchedule");
seSchedule.style.display = "none";
var maSchedule = document.querySelector(".maSchedule");
maSchedule.style.display = "none";
var introHeader = document.querySelector("#introHeader");
introHeader.style.display = "block";
var header = document.querySelector("#header");
header.style.display = "none";

firstMoveOn.onclick = function() {
	var majorSelector = document.querySelector(".major");
	var major = majorSelector.value;
	if (major == "cs") {
		body1.style.display = "none";
		body2CS.style.display = "block";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display ="none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";

		major+=(" ");

		/*fetch("http://localhost:8080/grad", {
			method: "POST",
			body: major,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		})*/

	} else if (major == "se") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "block";
		body2M.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";

		major+=(" ");

		/*fetch("http://localhost:8080/grad", {
			method: "POST",
			body: major,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		})*/

	} else if (major == "ma") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "block";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";

		major+=(" ");

		/*fetch("http://localhost:8080/grad", {
			method: "POST",
			body: major,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		})*/
	}
fetchString += major;
}

secondMoveOn.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "block";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";

	var csClasses = "";

	var cs1400 = document.getElementById("cs1400");
	if (cs1400.value != 0) {
		csClasses+=("CS-1400|");
	}

	var cs1410 = document.getElementById("cs1410");
	if (cs1410.value != 0) {
		csClasses+=("CS-1410|");
	}

	var cs2420 = document.getElementById("cs2420");
	if (cs2420.value != 0) {
		csClasses+=("CS-2420|");
	}

	var cs2450 = document.getElementById("cs2450");
	if (cs2450.value != 0) {
		csClasses+=("CS-2450|");
	}

	var cs2810 = document.getElementById("cs2810");
	if (cs2810.value != 0) {
		csClasses+=("CS-2810|");
	}

	var cs3005 = document.getElementById("cs3005");
	if (cs3005.value != 0) {
		csClasses+=("CS-3005|");
	}

	var cs3010 = document.getElementById("cs3010");
	if (cs3010.value != 0) {
		csClasses+=("CS-3010|");
	}

	var cs3020 = document.getElementById("cs3020");
	if (cs3020.value != 0) {
		csClasses+=("CS-3020|");
	}

	var cs3150 = document.getElementById("cs3150");
	if (cs3150.value != 0) {
		csClasses+=("CS-3150|");
	}

	var cs3200 = document.getElementById("cs3200");
	if (cs3200.value != 0) {
		csClasses+=("CS-3200|");
	}

	var cs3310 = document.getElementById("cs3310");
	if (cs3310.value != 0) {
		csClasses+=("CS-3310|");
	}

	var cs3400 = document.getElementById("cs3400");
	if (cs3400.value != 0) {
		csClasses+=("CS-3400|");
	}

	var cs3410 = document.getElementById("cs3410");
	if (cs3410.value != 0) {
		csClasses+=("CS-3410|");
	}

	var cs3440 = document.getElementById("cs3440");
	if (cs3440.value != 0) {
		csClasses+=("CS-3440|");
	}

	var cs3500 = document.getElementById("cs3500");
	if (cs3500.value != 0) {
		csClasses+=("CS-3500|");
	}

	var cs3510 = document.getElementById("cs3510");
	if (cs3510.value != 0) {
		csClasses+=("CS-3510|");
	}

	var cs3520 = document.getElementById("cs3520");
	if (cs3520.value != 0) {
		csClasses+=("CS-3520|");
	}

	var cs3530 = document.getElementById("cs3530");
	if (cs3530.value != 0) {
		csClasses+=("CS-3530|");
	}

	var cs3600 = document.getElementById("cs3600");
	if (cs3600.value != 0) {
		csClasses+=("CS-3600|");
	}

	var cs4200 = document.getElementById("cs4200");
	if (cs4200.value != 0) {
		csClasses+=("CS-4200|");
	}

	var cs4300 = document.getElementById("cs4300");
	if (cs4300.value != 0) {
		csClasses+=("CS-4300|");
	}

	var cs4320 = document.getElementById("cs4320");
	if (cs4320.value != 0) {
		csClasses+=("CS-4320|");
	}

	var cs4307 = document.getElementById("cs4307");
	if (cs4307.value != 0) {
		csClasses+=("CS-4307|");
	}

	var cs4310 = document.getElementById("cs4310");
	if (cs4310.value != 0) {
		csClasses+=("CS-4310|");
	}

	var cs4550 = document.getElementById("cs4550");
	if (cs4550.value != 0) {
		csClasses+=("CS-4550|");
	}

	var cs4600 = document.getElementById("cs4600");
	if (cs4600.value != 0) {
		csClasses+=("CS-4600|");
	}

	var cs4920 = document.getElementById("cs4920");
	if (cs4920.value != 0) {
		csClasses+=("CS-4920|");
	}

	var cs4990 = document.getElementById("cs4990");
	if (cs4990.value != 0) {
		csClasses+=("CS-4990|");
	}

	var csMath3400 = document.getElementById("csMath3400");
	if (csMath3400.value != 0) {
		csClasses+=("MA-3400|");
	}

	var csMath2270 = document.getElementById("csMath2270");
	if (csMath2270.value != 0) {
		csClasses+=("MA-2270|");
	}

	var csMath2280 = document.getElementById("csMath2280");
	if (csMath2280.value != 0) {
		csClasses+=("MA-2280|");
	}

	var csMath2210 = document.getElementById("csMath2210");
	if (csMath2210.value != 0) {
		csClasses+=("MA-2210|");
	}

	var csMath2250 = document.getElementById("csMath2250");
	if (csMath2250.value != 0) {
		csClasses+=("MA-2250|");
	}

	var csMath1210 = document.getElementById("csMath1210");
	if (csMath1210.value != 0) {
		csClasses+=("MA-1210|");
	}

	var csMath1220 = document.getElementById("csMath1220");
	if (csMath1220.value != 0) {
		csClasses+=("MA-1220|");
	}

	var csBio1610 = document.getElementById("csBio1610");
	if (csBio1610.value != 0) {
		csClasses+=("BI-1610|");
	}

	var csPhys2210 = document.getElementById("csPhys2210");
	if (csPhys2210.value != 0) {
		console.log("csPhys2210");
		csClasses+=("PH-2210|");
	}

	csClasses+=(" ");

	/*fetch("http://localhost:8080/grad", {
			method: "POST",
			body: 'item='+csClasses,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})*/
	fetchString += csClasses;
}

secondMoveOnSE.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "block";
	body3M.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";

	var seClasses = "";

	var se1400 = document.getElementById("se1400");
	if (se1400.value != 0) {
		seClasses+=("SE-1400|");
	}

	var se2450 = document.getElementById("se2450");
	if (se2450.value != 0) {
		seClasses+=("SE-2450|");
	}

	var se3010 = document.getElementById("se3010");
	if (se3010.value != 0) {
		seClasses+=("SE-3010|");
	}

	var se3020 = document.getElementById("se3020");
	if (se3020.value != 0) {
		seClasses+=("SE-3020|");
	}

	var se3100 = document.getElementById("se3100");
	if (se3100.value != 0) {
		seClasses+=("SE-3100|");
	}

	var se3150 = document.getElementById("se3150");
	if (se3150.value != 0) {
		seClasses+=("SE-3150|");
	}

	var se3200 = document.getElementById("se3200");
	if (se3200.value != 0) {
		seClasses+=("SE-3200|");
	}

	var se3400 = document.getElementById("se3400");
	if (se3400.value != 0) {
		seClasses+=("SE-3400|");
	}

	var se3450 = document.getElementById("se3450");
	if (se3450.value != 0) {
		seClasses+=("SE-3450|");
	}

	var se3500 = document.getElementById("se3500");
	if (se3500.value != 0) {
		seClasses+=("SE-3500|");
	}

	var se3550 = document.getElementById("se3550");
	if (se3550.value != 0) {
		seClasses+=("SE-3550|");
	}

	var se3600 = document.getElementById("se3600");
	if (se3600.value != 0) {
		seClasses+=("SE-3600|");
	}

	var se4200 = document.getElementById("se4200");
	if (se4200.value != 0) {
		seClasses+=("SE-4200|");
	}

	var se4600 = document.getElementById("se4600");
	if (se4600.value != 0) {
		seClasses+=("SE-4600|");
	}

	var se4900 = document.getElementById("se4900");
	if (se4900.value != 0) {
		seClasses+=("SE-4900|");
	}

	var seCS1400 = document.getElementById("seCS1400");
	if (seCS1400.value != 0) {
		seClasses+=("CS-1400|");
	}

	var seCS1410 = document.getElementById("seCS1410");
	if (seCS1410.value != 0) {
		seClasses+=("CS-1410|");
	}

	var seCS2420 = document.getElementById("seCS2420");
	if (seCS2420.value != 0) {
		seClasses+=("CS-2420|");
	}

	var seCS2810 = document.getElementById("seCS2810");
	if (seCS2810.value != 0) {
		seClasses+=("CS-2810|");
	}
	var seCS3005 = document.getElementById("seCS3005");
	if (seCS3005.value != 0) {
		seClasses+=("CS-3005|");
	}

	var seCS3150 = document.getElementById("seCS3150");
	if (seCS3150.value != 0) {
		seClasses+=("CS-3150|");
	}

	var seCS3310 = document.getElementById("seCS3310");
	if (seCS3310.value != 0) {
		seClasses+=("CS-3310|");
	}

	var seCS3510 = document.getElementById("seCS3510");
	if (seCS3510.value != 0) {
		seClasses+=("CS-3510|");
	}

	var seCS4300 = document.getElementById("seCS4300");
	if (seCS4300.value != 0) {
		seClasses+=("CS-4300|");
	}

	var seCS4307 = document.getElementById("seCS4307");
	if (seCS4307.value != 0) {
		seClasses+=("CS-4307|");
	}

	var seCS4320 = document.getElementById("seCS4320");
	if (seCS4320.value != 0) {
		seClasses+=("CS-4320|");
	}

	var seMA1210 = document.getElementById("seMA1210");
	if (seMA1210.value != 0) {
		seClasses+=("MA-1210|");
	}

	var seMA2050 = document.getElementById("seMA2050");
	if (seMA2050.value != 0) {
		seClasses+=("MA-2050|");
	}

	var seIT1100 = document.getElementById("seIT1100");
	if (seIT1100.value != 0) {
		seClasses+=("IT-1100|");
	}

	var seIT3110 = document.getElementById("seIT3110");
	if (seIT3110.value != 0) {
		seClasses+=("IT-3110|");
	}

	var seIT3300 = document.getElementById("seIT3300");
	if (seIT3300.value != 0) {
		seClasses+=("IT-3300|");
	}

	var seIT4070 = document.getElementById("seIT4070");
	if (seIT4070.value != 0) {
		seClasses+=("IT-4070|");
	}

	var seIT4200 = document.getElementById("seIT4200");
	if (seIT4200.value != 0) {
		seClasses+=("IT-4200|");
	}

	var seEG2100 = document.getElementById("seEG2100");
	if (seEG2100.value != 0) {
		seClasses+=("EG-2100|");
	}

	var seMKTG = document.getElementById("seMKTG");
	if (seMKTG.value != 0) {
		seClasses+=("MK-4200|");
	}

	seClasses+=(" ");

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: seClasses,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})
}

secondMoveOnM.onclick = function () {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "block";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";

	var maClasses = "";

	var m1210 = document.getElementById("m1210");
	if (m1210.value != 0) {
		maClasses+=("MA-1210");
	}

	var m1220 = document.getElementById("m1220");
	if (m1220.value != 0) {
		maClasses+=("MA-1210");
	}

	var mPH2210 = document.getElementById("mPH2210");
	if (mPH2210.value != 0) {
		maClasses+=("PH-2210");
	}

	var mPH2215 = document.getElementById("mPH2215");
	if (mPH2215.value != 0) {
		maClasses+=("PH-2215");
	}

	var m2200 = document.getElementById("m2200");
	if (m2200.value != 0) {
		maClasses+=("MA-2200");
	}

	var m2210 = document.getElementById("m2210");
	if (m2210.value != 0) {
		maClasses+=("MA-2210");
	}

	var m2250 = document.getElementById("m2250");
	if (m2250.value != 0) {
		maClasses+=("MA-2250");
	}

	var m2270 = document.getElementById("m2270");
	if (m2270.value != 0) {
		maClasses+=("MA-2270");
	}

	var m2280 = document.getElementById("m2280");
	if (m2280.value != 0) {
		maClasses+=("MA-2280");
	}

	var m2285 = document.getElementById("m2285");
	if (m2285.value != 0) {
		maClasses+=("MA-2285");
	}

	var m2600 = document.getElementById("m2600");
	if (m2600.value != 0) {
		maClasses+=("MA-2600");
	}

	var m2905 = document.getElementById("m2905");
	if (m2600.value != 0) {
		maClasses+=("MA-2905");
	}

	var m3000 = document.getElementById("m3000");
	if (m3000.value != 0) {
		maClasses+=("MA-3000");
	}

	var m3050 = document.getElementById("m3050");
	if (m3050.value != 0) {
		maClasses+=("MA-3150");
	}

	var m3060 = document.getElementById("m3060");
	if (m3060.value != 0) {
		maClasses+=("MA-3060");
	}

	var m3100 = document.getElementById("m3100");
	if (m3100.value != 0) {
		maClasses+=("MA-3100");
	}

	var m3150 = document.getElementById("m3150");
	if (m3150.value != 0) {
		maClasses+=("MA-3150");
	}

	var m3200 = document.getElementById("m3200");
	if (m3200.value != 0) {
		maClasses+=("MA-3200");
	}

	var m3210 = document.getElementById("m3210");
	if (m3210.value != 0) {
		maClasses+=("MA-3210");
	}

	var m3400 = document.getElementById("m3400");
	if (m3400.value != 0) {
		maClasses+=("MA-3400");
	}

	var m3450 = document.getElementById("m3450");
	if (m3450.value != 0) {
		maClasses+=("MA-3450");
	}

	var m3500 = document.getElementById("m3500");
	if (m3500.value != 0) {
		maClasses+=("MA-3500");
	}

	var m3600 = document.getElementById("m3600");
	if (m3600.value != 0) {
		maClasses+=("MA-3600");
	}

	var m3700 = document.getElementById("m3700");
	if (m3700.value != 0) {
		maClasses+=("MA-3700");
	}

	var m3900 = document.getElementById("m3900");
	if (m3900.value != 0) {
		maClasses+=("MA-3900");
	}

	var m3905 = document.getElementById("m3905");
	if (m3905.value != 0) {
		maClasses+=("MA-3905");
	}

	var m4000 = document.getElementById("m4000");
	if (m4000.value != 0) {
		maClasses+=("MA-4000");
	}

	var m4005 = document.getElementById("m4005");
	if (m4005.value != 0) {
		maClasses+=("MA-4005");
	}

	var m4010 = document.getElementById("m4010");
	if (m4010.value != 0) {
		maClasses+=("MA-4010");
	}

	var m4100 = document.getElementById("m4100");
	if (m4100.value != 0) {
		maClasses+=("MA-4100");
	}

	var m4200 = document.getElementById("m4200");
	if (m4200.value != 0) {
		maClasses+=("MA-4200");
	}

	var m4250 = document.getElementById("m4250");
	if (m4250.value != 0) {
		maClasses+=("MA-4250");
	}

	var m4330 = document.getElementById("m4330");
	if (m4330.value != 0) {
		maClasses+=("MA-4330");
	}

	var m4550 = document.getElementById("m4550");
	if (m4550.value != 0) {
		maClasses+=("MA-4550");
	}

	var m4800 = document.getElementById("m4800");
	if (m4800.value != 0) {
		maClasses+=("MA-4800");
	}

	var m4900 = document.getElementById("m4900");
	if (m4900.value != 0) {
		maClasses+=("MA-4900");
	}

	maClasses+=(" ");

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: maClasses,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})
}


thirdMoveOn.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	csSchedule.style.display = "block";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";

	var interestCSData = "";

	var csInterestTheory = document.getElementById("theory");
	if (csInterestTheory.value != 0) {
		interestCSData+=("theory");
	}

	var csInterestDev = document.getElementById("dev");
	if (csInterestDev.value != 0) {
		interestCSData+=("dev");
	}
	
	interestCSData+=(" ");
	fetchString += interestCSData;

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: 'item='+fetchString,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})
}

thirdMoveOnSE.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "block";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";

	var seTrack = "";

	var seEnt = document.getElementById("ent");
	if (seEnt.value != 0) {
		seTrack+=("ent");
	}

	var seDevops = document.getElementById("devops");
	if (seDevops.value != 0) {
		seTrack+=("devops");
	}

	var seApp = document.getElementById("app");
	if (seApp.value != 0) {
		seTrack+=("app");
	}

	var seData = document.getElementById("data");
	if (seData.value != 0) {
		seTrack+=("data");
	}

	seTrack+=(" ");

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: seTrack,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})
}

thirdMoveOnM.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "block";
	introHeader.style.display = "none";
	header.style.display = "block";

	var maElectives = "";

	var m2600e = document.getElementById("m2600e");
	if (m2600e.value != 0) {
		maElectives+=("MA-2600");
	}

	var m3000e = document.getElementById("m3000e");
	if (m3000e.value != 0) {
		maElectives+=("MA-3000");
	}

	var m3100e = document.getElementById("m3100e");
	if (m3100e.value != 0) {
		maElectives+=("MA-3100");
	}

	var m3210e = document.getElementById("m3210e");
	if (m3210e.value != 0) {
		maElectives+=("MA-3210");
	}

	var m3450e = document.getElementById("m3450e");
	if (m3450e.value != 0) {
		maElectives+=("MA-3450");
	}

	var m3500e = document.getElementById("m3500e");
	if (m3500e.value != 0) {
		maElectives+=("MA-3500");
	}

	var m3700e = document.getElementById("m3700e");
	if (m3700e.value != 0) {
		maElectives+=("MA-3700");
	}

	var m4010e = document.getElementById("m4010e");
	if (m4010e.value != 0) {
		maElectives+=("MA-4010");
	}

	var m4100e = document.getElementById("m4100e");
	if (m4100e.value != 0) {
		maElectives+=("MA-4100");
	}

	var m4200e = document.getElementById("m4200e");
	if (m4200e.value != 0) {
		maElectives+=("MA-4200");
	}

	var m4250e = document.getElementById("m4250e");
	if (m4250e.value != 0) {
		maElectives+=("MA-4250");
	}

	var m4550e = document.getElementById("m4550e");
	if (m4550e.value != 0) {
		maElectives+=("MA-4550");
	}

	var m4800e = document.getElementById("m4800e");
	if (m4800e.value != 0) {
		maElectives+=("MA-4800");
	}

	var m4890e = document.getElementById("m4890e");
	if (m4890e.value != 0) {
		maElectives+=("MA-4890");
	}

	maElectives+=(" ");
	console.log(maElectives);

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: maElectives,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	})
}