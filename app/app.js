$.getScript("./jsPDFolder/jspdf.js", function() {
   alert("Script loaded but not necessarily executed.");
});

var firstMoveOn = document.querySelector(".firstMoveOn");
var secondMoveOn = document.querySelector(".secondMoveOn");
var secondMoveOnSE = document.querySelector(".secondMoveOnSE");
var secondMoveOnM = document.querySelector(".secondMoveOnM");
var secondMoveOnIT = document.querySelector(".secondMoveOnIT");
var thirdMoveOn = document.querySelector(".thirdMoveOn");
var thirdMoveOnSE = document.querySelector(".thirdMoveOnSE");
var thirdMoveOnM = document.querySelector(".thirdMoveOnM");
var thirdMoveOnIT = document.querySelector(".thirdMoveOnIT");
var fetchString = "";

var breadcrumbBox = document.querySelector("#breadcrumbBox");
breadcrumbBox.style.display = "none";
var breadcrumb = document.querySelector("#breadcrumb");
breadcrumb.style.display = "none";
var breadcrumb2 = document.querySelector("#breadcrumb2");
breadcrumb2.style.display = "none";
var breadcrumb3 = document.querySelector("#breadcrumb3");
breadcrumb3.style.display = "none";
var breadcrumbSeparater = document.querySelector("#breadcrumbSeparater");
breadcrumbSeparater.style.display = "none";
var breadcrumbSeparater2 = document.querySelector("#breadcrumbSeparater2");
breadcrumbSeparater2.style.display = "none";
var body1 = document.querySelector("#body1");
body1.style.display = "block";
var body2CS = document.querySelector("#body2CS");
body2CS.style.display = "none";
var body2SE = document.querySelector("#body2SE");
body2SE.style.display = "none";
var body2M = document.querySelector("#body2M");
body2M.style.display = "none";
var body2IT = document.querySelector("#body2IT");
body2IT.style.display = "none";
var body3CS = document.querySelector("#body3CS");
body3CS.style.display = "none";
var body3SE = document.querySelector("#body3SE");
body3SE.style.display = "none";
var body3M = document.querySelector("#body3M");
body3M.style.display = "none";
var body3IT = document.querySelector("#body3IT");
body3IT.style.display = "none";
var csSchedule = document.querySelector("#csSchedule");
csSchedule.style.display = "none";
var seSchedule = document.querySelector("#seSchedule");
seSchedule.style.display = "none";
var maSchedule = document.querySelector("#maSchedule");
maSchedule.style.display = "none";
var itSchedule = document.querySelector("#itSchedule");
itSchedule.style.display = "none";
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
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display ="none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";

		major+=(" ");

	} else if (major == "se") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "block";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";

		major+=(" ");

	} else if (major == "ma") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "block";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";

		major+=(" ");

	} else if (major == "it") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "block";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";

		major+=(" ");

	}

	breadcrumb.onclick = function() {
		body1.style.display = "block";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "block";
		header.style.display = "none";
		breadcrumbBox.style.display = "none";
		breadcrumb.style.display = "none";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";
		fetchString = "";
	}

	fetchString += major;
}

secondMoveOn.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "block";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "none";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "none";

	breadcrumb2.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "block";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";
	}

	var csClasses = "";

	var cs1400 = document.getElementById("cs1400");
	if (cs1400.checked) {
		csClasses+=("CS-1400|");
	}

	var cs1410 = document.getElementById("cs1410");
	if (cs1410.checked) {
		csClasses+=("CS-1410|");
	}

	var cs2420 = document.getElementById("cs2420");
	if (cs2420.checked) {
		csClasses+=("CS-2420|");
	}

	var cs2450 = document.getElementById("cs2450");
	if (cs2450.checked) {
		csClasses+=("CS-2450|");
	}

	var cs2810 = document.getElementById("cs2810");
	if (cs2810.checked) {
		csClasses+=("CS-2810|");
	}

	var cs3005 = document.getElementById("cs3005");
	if (cs3005.checked) {
		csClasses+=("CS-3005|");
	}

	var cs3010 = document.getElementById("cs3010");
	if (cs3010.checked) {
		csClasses+=("CS-3010|");
	}

	var cs3020 = document.getElementById("cs3020");
	if (cs3020.checked) {
		csClasses+=("CS-3020|");
	}

	var cs3150 = document.getElementById("cs3150");
	if (cs3150.checked) {
		csClasses+=("CS-3150|");
	}

	var cs3200 = document.getElementById("cs3200");
	if (cs3200.checked) {
		csClasses+=("CS-3200|");
	}

	var cs3310 = document.getElementById("cs3310");
	if (cs3310.checked) {
		csClasses+=("CS-3310|");
	}

	var cs3400 = document.getElementById("cs3400");
	if (cs3400.checked) {
		csClasses+=("CS-3400|");
	}

	var cs3410 = document.getElementById("cs3410");
	if (cs3410.checked) {
		csClasses+=("CS-3410|");
	}

	var cs3440 = document.getElementById("cs3440");
	if (cs3440.checked) {
		csClasses+=("CS-3440|");
	}

	var cs3500 = document.getElementById("cs3500");
	if (cs3500.checked) {
		csClasses+=("CS-3500|");
	}

	var cs3510 = document.getElementById("cs3510");
	if (cs3510.checked) {
		csClasses+=("CS-3510|");
	}

	var cs3520 = document.getElementById("cs3520");
	if (cs3520.checked) {
		csClasses+=("CS-3520|");
	}

	var cs3530 = document.getElementById("cs3530");
	if (cs3530.checked) {
		csClasses+=("CS-3530|");
	}

	var cs3600 = document.getElementById("cs3600");
	if (cs3600.checked) {
		csClasses+=("CS-3600|");
	}

	var cs4200 = document.getElementById("cs4200");
	if (cs4200.checked) {
		csClasses+=("CS-4200|");
	}

	var cs4300 = document.getElementById("cs4300");
	if (cs4300.checked) {
		csClasses+=("CS-4300|");
	}

	var cs4320 = document.getElementById("cs4320");
	if (cs4320.checked) {
		csClasses+=("CS-4320|");
	}

	var cs4307 = document.getElementById("cs4307");
	if (cs4307.checked) {
		csClasses+=("CS-4307|");
	}

	var cs4310 = document.getElementById("cs4310");
	if (cs4310.checked) {
		csClasses+=("CS-4310|");
	}

	var cs4550 = document.getElementById("cs4550");
	if (cs4550.checked) {
		csClasses+=("CS-4550|");
	}

	var cs4600 = document.getElementById("cs4600");
	if (cs4600.checked) {
		csClasses+=("CS-4600|");
	}

	var cs4920 = document.getElementById("cs4920");
	if (cs4920.checked) {
		csClasses+=("CS-4920|");
	}

	var cs4990 = document.getElementById("cs4990");
	if (cs4990.checked) {
		csClasses+=("CS-4990|");
	}

	var csMath3400 = document.getElementById("csMath3400");
	if (csMath3400.checked) {
		csClasses+=("MA-3400|");
	}

	var csMath2270 = document.getElementById("csMath2270");
	if (csMath2270.checked) {
		csClasses+=("MA-2270|");
	}

	var csMath2280 = document.getElementById("csMath2280");
	if (csMath2280.checked) {
		csClasses+=("MA-2280|");
	}

	var csMath2210 = document.getElementById("csMath2210");
	if (csMath2210.checked) {
		csClasses+=("MA-2210|");
	}

	var csMath2250 = document.getElementById("csMath2250");
	if (csMath2250.checked) {
		csClasses+=("MA-2250|");
	}

	var csMath1210 = document.getElementById("csMath1210");
	if (csMath1210.checked) {
		csClasses+=("MA-1210|");
	}

	var csMath1220 = document.getElementById("csMath1220");
	if (csMath1220.checked) {
		csClasses+=("MA-1220|");
	}

	var csBio1610 = document.getElementById("csBio1610");
	if (csBio1610.checked) {
		csClasses+=("BI-1610|");
	}

	var csPhys2210 = document.getElementById("csPhys2210");
	if (csPhys2210.checked) {
		console.log("csPhys2210");
		csClasses+=("PH-2210|");
	}

	var csIt2700 = document.getElementById("csIt2700");
	if (csIt2700.checked) {
		csClasses+=("IT-2700|");
	}

	var csIt3100 = document.getElementById("csIt3100");
	if (csIt3100.checked) {
		csClasses+=("IT-3100|");
	}


	var csIt3110 = document.getElementById("csIt3110");
	if (csIt3110.checked) {
		csClasses+=("IT-3110|");
	}


	var csIt4200 = document.getElementById("csIt4200");
	if (csIt4200.checked) {
		csClasses+=("IT-4200|");
	}


	var csSe1400 = document.getElementById("csSe1400");
	if (csSe1400.checked) {
		csClasses+=("SE-1400|");
	}


	var csSe3400 = document.getElementById("csSe3400");
	if (csSe3400.checked) {
		csClasses+=("SE-3400|");
	}

	csClasses+=(" ");
	fetchString += csClasses;
}

secondMoveOnSE.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "block";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "none";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "none";
	
	breadcrumb2.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "block";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";
	}

	var seClasses = "";

	var se1400 = document.getElementById("se1400");
	if (se1400.checked) {
		seClasses+=("SE-1400|");
	}

	var se2450 = document.getElementById("se2450");
	if (se2450.checked) {
		seClasses+=("SE-2450|");
	}

	var se3010 = document.getElementById("se3010");
	if (se3010.checked) {
		seClasses+=("SE-3010|");
	}

	var se3020 = document.getElementById("se3020");
	if (se3020.checked) {
		seClasses+=("SE-3020|");
	}

	var se3100 = document.getElementById("se3100");
	if (se3100.checked) {
		seClasses+=("SE-3100|");
	}

	var se3150 = document.getElementById("se3150");
	if (se3150.checked) {
		seClasses+=("SE-3150|");
	}

	var se3200 = document.getElementById("se3200");
	if (se3200.checked) {
		seClasses+=("SE-3200|");
	}

	var se3400 = document.getElementById("se3400");
	if (se3400.checked) {
		seClasses+=("SE-3400|");
	}

	var se3450 = document.getElementById("se3450");
	if (se3450.checked) {
		seClasses+=("SE-3450|");
	}

	var se3500 = document.getElementById("se3500");
	if (se3500.checked) {
		seClasses+=("SE-3500|");
	}

	var se3550 = document.getElementById("se3550");
	if (se3550.checked) {
		seClasses+=("SE-3550|");
	}

	var se3600 = document.getElementById("se3600");
	if (se3600.checked) {
		seClasses+=("SE-3600|");
	}

	var se4200 = document.getElementById("se4200");
	if (se4200.checked) {
		seClasses+=("SE-4200|");
	}

	var se4600 = document.getElementById("se4600");
	if (se4600.checked) {
		seClasses+=("SE-4600|");
	}

	var se4900 = document.getElementById("se4900");
	if (se4900.checked) {
		seClasses+=("SE-4900|");
	}

	var seCS1400 = document.getElementById("seCS1400");
	if (seCS1400.checked) {
		seClasses+=("CS-1400|");
	}

	var seCS1410 = document.getElementById("seCS1410");
	if (seCS1410.checked) {
		seClasses+=("CS-1410|");
	}

	var seCS2420 = document.getElementById("seCS2420");
	if (seCS2420.checked) {
		seClasses+=("CS-2420|");
	}

	var seCS2810 = document.getElementById("seCS2810");
	if (seCS2810.checked) {
		seClasses+=("CS-2810|");
	}
	var seCS3005 = document.getElementById("seCS3005");
	if (seCS3005.checked) {
		seClasses+=("CS-3005|");
	}

	var seCS3150 = document.getElementById("seCS3150");
	if (seCS3150.checked) {
		seClasses+=("CS-3150|");
	}

	var seCS3310 = document.getElementById("seCS3310");
	if (seCS3310.checked) {
		seClasses+=("CS-3310|");
	}

	var seCS3510 = document.getElementById("seCS3510");
	if (seCS3510.checked) {
		seClasses+=("CS-3510|");
	}

	var seCS4300 = document.getElementById("seCS4300");
	if (seCS4300.checked) {
		seClasses+=("CS-4300|");
	}

	var seCS4307 = document.getElementById("seCS4307");
	if (seCS4307.checked) {
		seClasses+=("CS-4307|");
	}

	var seCS4320 = document.getElementById("seCS4320");
	if (seCS4320.checked) {
		seClasses+=("CS-4320|");
	}

	var seMA1210 = document.getElementById("seMA1210");
	if (seMA1210.checked) {
		seClasses+=("MA-1210|");
	}

	var seMA2050 = document.getElementById("seMA2050");
	if (seMA2050.checked) {
		seClasses+=("MA-2050|");
	}

	var seIT1100 = document.getElementById("seIT1100");
	if (seIT1100.checked) {
		seClasses+=("IT-1100|");
	}

	var seIT3110 = document.getElementById("seIT3110");
	if (seIT3110.checked) {
		seClasses+=("IT-3110|");
	}

	var seIT3300 = document.getElementById("seIT3300");
	if (seIT3300.checked) {
		seClasses+=("IT-3300|");
	}

	var seIT4070 = document.getElementById("seIT4070");
	if (seIT4070.checked) {
		seClasses+=("IT-4070|");
	}

	var seIT4200 = document.getElementById("seIT4200");
	if (seIT4200.checked) {
		seClasses+=("IT-4200|");
	}

	var seEG2100 = document.getElementById("seEG2100");
	if (seEG2100.checked) {
		seClasses+=("EG-2100|");
	}

	var seMKTG = document.getElementById("seMKTG");
	if (seMKTG.checked) {
		seClasses+=("MK-4200|");
	}

	seClasses+=(" ");

	fetchString += seClasses;
}

secondMoveOnM.onclick = function () {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "block";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "none";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "none";
	
	breadcrumb2.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "block";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";
	}

	var maClasses = "";

	var mCS1400 = document.getElementById("mCS1400");
	if (mCS1400.checked) {
		maClasses+=("CS-1400");
	}

	var m1210 = document.getElementById("m1210");
	if (m1210.checked) {
		maClasses+=("MA-1210|");
	}

	var m1220 = document.getElementById("m1220");
	if (m1220.checked) {
		maClasses+=("MA-1220|");
	}

	var mPH2210 = document.getElementById("mPH2210");
	if (mPH2210.checked) {
		maClasses+=("PH-2210|");
	}

	var mPH2215 = document.getElementById("mPH2215");
	if (mPH2215.checked) {
		maClasses+=("PH-2220|");
	}

	var m2200 = document.getElementById("m2200");
	if (m2200.checked) {
		maClasses+=("MA-2200|");
	}

	var m2210 = document.getElementById("m2210");
	if (m2210.checked) {
		maClasses+=("MA-2210|");
	}

	var m2250 = document.getElementById("m2250");
	if (m2250.checked) {
		maClasses+=("MA-2250|");
	}

	var m2270 = document.getElementById("m2270");
	if (m2270.checked) {
		maClasses+=("MA-2270|");
	}

	var m2280 = document.getElementById("m2280");
	if (m2280.checked) {
		maClasses+=("MA-2280|");
	}

	var m2285 = document.getElementById("m2285");
	if (m2285.checked) {
		maClasses+=("MA-2285|");
	}

	var m2600 = document.getElementById("m2600");
	if (m2600.checked) {
		maClasses+=("MA-2600|");
	}

	var m2905 = document.getElementById("m2905");
	if (m2600.checked) {
		maClasses+=("MA-2905|");
	}

	var m3000 = document.getElementById("m3000");
	if (m3000.checked) {
		maClasses+=("MA-3000|");
	}

	var m3050 = document.getElementById("m3050");
	if (m3050.checked) {
		maClasses+=("MA-3150|");
	}

	var m3060 = document.getElementById("m3060");
	if (m3060.checked) {
		maClasses+=("MA-3060|");
	}

	var m3100 = document.getElementById("m3100");
	if (m3100.checked) {
		maClasses+=("MA-3100|");
	}

	var m3150 = document.getElementById("m3150");
	if (m3150.checked) {
		maClasses+=("MA-3150|");
	}

	var m3200 = document.getElementById("m3200");
	if (m3200.checked) {
		maClasses+=("MA-3200|");
	}

	var m3210 = document.getElementById("m3210");
	if (m3210.checked) {
		maClasses+=("MA-3210|");
	}

	var m3400 = document.getElementById("m3400");
	if (m3400.checked) {
		maClasses+=("MA-3400|");
	}

	var m3450 = document.getElementById("m3450");
	if (m3450.checked) {
		maClasses+=("MA-3450|");
	}

	var m3500 = document.getElementById("m3500");
	if (m3500.checked) {
		maClasses+=("MA-3500|");
	}

	var m3600 = document.getElementById("m3600");
	if (m3600.checked) {
		maClasses+=("MA-3600|");
	}

	var m3700 = document.getElementById("m3700");
	if (m3700.checked) {
		maClasses+=("MA-3700|");
	}

	var m3900 = document.getElementById("m3900");
	if (m3900.checked) {
		maClasses+=("MA-3900|");
	}

	var m3905 = document.getElementById("m3905");
	if (m3905.checked) {
		maClasses+=("MA-3905|");
	}

	var m4000 = document.getElementById("m4000");
	if (m4000.checked) {
		maClasses+=("MA-4000|");
	}

	var m4005 = document.getElementById("m4005");
	if (m4005.checked) {
		maClasses+=("MA-4005|");
	}

	var m4010 = document.getElementById("m4010");
	if (m4010.checked) {
		maClasses+=("MA-4010|");
	}

	var m4100 = document.getElementById("m4100");
	if (m4100.checked) {
		maClasses+=("MA-4100|");
	}

	var m4200 = document.getElementById("m4200");
	if (m4200.checked) {
		maClasses+=("MA-4200|");
	}

	var m4250 = document.getElementById("m4250");
	if (m4250.checked) {
		maClasses+=("MA-4250|");
	}

	var m4330 = document.getElementById("m4330");
	if (m4330.checked) {
		maClasses+=("MA-4330|");
	}

	var m4550 = document.getElementById("m4550");
	if (m4550.checked) {
		maClasses+=("MA-4550|");
	}

	var m4800 = document.getElementById("m4800");
	if (m4800.checked) {
		maClasses+=("MA-4800|");
	}

	var m4900 = document.getElementById("m4900");
	if (m4900.checked) {
		maClasses+=("MA-4900|");
	}

	maClasses+=(" ");
	fetchString += maClasses;
}

secondMoveOnIT.onclick = function () {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "block";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "none";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "none";
	
	breadcrumb2.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "block";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "none";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "none";
		breadcrumbSeparater2.style.display = "none";
	}

	var itClasses = "";

	var it1100 = document.getElementById("it1100");
	if (it1100.checked) {
		itClasses+=("IT-1100|");
	}

	var it1200 = document.getElementById("it1200");
	if (it1200.checked) {
		itClasses+=("IT-1200|");
	}

	var it2300 = document.getElementById("it2300");
	if (it2300.checked) {
		itClasses+=("IT-2300|");
	}

	var it2400 = document.getElementById("it2400");
	if (it2400.checked) {
		itClasses+=("IT-2400|");
	}

	var it2500 = document.getElementById("it2500");
	if (it2500.checked) {
		itClasses+=("IT-2500|");
	}

	var it2700 = document.getElementById("it2700");
	if (it2700.checked) {
		itClasses+=("IT-2700|");
	}

	var it3100 = document.getElementById("it3100");
	if (it3100.checked) {
		itClasses+=("IT-3100|");
	}

	var it3110 = document.getElementById("it3110");
	if (it3110.checked) {
		itClasses+=("IT-3110|");
	}

	var it3150 = document.getElementById("it3150");
	if (it3150.checked) {
		itClasses+=("IT-3150|");
	}

	var it3300 = document.getElementById("it3300");
	if (it3300.checked) {
		itClasses+=("IT-3300|");
	}

	var it3400 = document.getElementById("it3400");
	if (it3400.checked) {
		itClasses+=("IT-3400|");
	}

	var it4060 = document.getElementById("it4060");
	if (it4060.checked) {
		itClasses+=("IT-4060|");
	}

	var it4070 = document.getElementById("it4070");
	if (it4070.checked) {
		itClasses+=("IT-4070|");
	}

	var it4100 = document.getElementById("it4100");
	if (it4100.checked) {
		itClasses+=("IT-4100|");
	}

	var it4200 = document.getElementById("it4200");
	if (it4200.checked) {
		itClasses+=("IT-4200|");
	}

	var it4310 = document.getElementById("it4310");
	if (it4310.checked) {
		itClasses+=("IT-4310|");
	}

	var it4400 = document.getElementById("it4400");
	if (it4400.checked) {
		itClasses+=("IT-4400|");
	}

	var it4510 = document.getElementById("it4510");
	if (it4510.checked) {
		itClasses+=("IT-4510|");
	}

	var it4600 = document.getElementById("it4600");
	if (it4600.checked) {
		itClasses+=("IT-4600|");
	}

	var it4920 = document.getElementById("it4920");
	if (it4920.checked) {
		itClasses+=("IT-4920|");
	}

	var it4990 = document.getElementById("it4990");
	if (it4990.checked) {
		itClasses+=("IT-4990|");
	}

	var itcs1400 = document.getElementById("itcs1400");
	if (itcs1400.checked) {
		itClasses+=("CS-1400|");
	}

	var itcs1410 = document.getElementById("itcs1410");
	if (itcs1410.checked) {
		itClasses+=("CS-1410|");
	}

	var itcs3005 = document.getElementById("itcs3005");
	if (itcs3005.checked) {
		itClasses+=("CS-3005|");
	}

	var itse3200 = document.getElementById("itse3200");
	if (itse3200.checked) {
		itClasses+=("SE-3200|");
	}

	var itse3400 = document.getElementById("itse3400");
	if (itse3400.checked) {
		itClasses+=("SE-3400|");
	}

	var itse4200 = document.getElementById("itse4200");
	if (itse4200.checked) {
		itClasses+=("SE-4200|");
	}

	var itis2050 = document.getElementById("itis2050");
	if (itis2050.checked) {
		itClasses+=("ISA-2050|");
	}

	var iten3010 = document.getElementById("iten3010");
	if (iten3010.checked) {
		itClasses+=("ENGL-3010|");
	}

	var itma1040 = document.getElementById("itma1040");
	if (itma1040.checked) {
		itClasses+=("MA-1040|");
	}

	var itma1050 = document.getElementById("itma1050");
	if (itma1050.checked) {
		itClasses+=("MA-1050|");
	}

	itClasses+=(" ");
	fetchString += itClasses;

}


thirdMoveOn.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "block";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "block";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "block";
	
	breadcrumb3.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "block";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
	}

	var interestCSData = "";

	var cs3200e = document.getElementById("cs3200e");
	if (cs3200e.checked) {
		interestCSData+=("CS-3200|");
	}

	var cs3400e = document.getElementById("cs3400e");
	if (cs3400e.checked) {
		interestCSData+=("CS-3400|");
	}

	var cs3410e = document.getElementById("cs3410e");
	if (cs3410e.checked) {
		interestCSData+=("CS-3410|");
	}

	var cs3520e = document.getElementById("cs3520e");
	if (cs3520e.checked) {
		interestCSData+=("CS-3520|");
	}

	var cs3600e = document.getElementById("cs3600e");
	if (cs3600e.checked) {
		interestCSData+=("CS-3600|");
	}

	var cs4300e = document.getElementById("cs4300e");
	if (cs4300e.checked) {
		interestCSData+=("CS-4300|");
	}

	var cs4307e = document.getElementById("cs4307e");
	if (cs4307e.checked) {
		interestCSData+=("CS-4307|");
	}

	var cs4320e = document.getElementById("cs4320e");
	if (cs4320e.checked) {
		interestCSData+=("CS-4320|");
	}

	var cs4550e = document.getElementById("cs4550e");
	if (cs4550e.checked) {
		interestCSData+=("CS-4550|");
	}

	var csma3400e = document.getElementById("csma3400e");
	if (csma3400e.checked) {
		interestCSData+=("MA-3400|");
	}

	var csma2270e = document.getElementById("csma2270e");
	if (csma2270e.checked) {
		interestCSData+=("MA-2270|");
	}

	var csma2210e = document.getElementById("csma2210e");
	if (csma2210e.checked) {
		interestCSData+=("MA-2210|");
	}

	var csma2280e = document.getElementById("csma2280e");
	if (csma2280e.checked) {
		interestCSData+=("MA-2280|");
	}

	var csma2250e = document.getElementById("csma2250e");
	if (csma2250e.checked) {
		interestCSData+=("MA-2250|");
	}


	var cs3010e2 = document.getElementById("cs3010e2");
	if (cs3010e2.checked) {
		interestCSData+=("CS-3010|");
	}

	var cs3020e2 = document.getElementById("cs3020e2");
	if (cs3020e2.checked) {
		interestCSData+=("CS-3010|");
	}

	var cs3150e2 = document.getElementById("cs3150e2");
	if (cs3150e2.checked) {
		interestCSData+=("CS-3150|");
	}

	var cs3200e2 = document.getElementById("cs3200e2");
	if (cs3200e2.checked) {
		interestCSData+=("CS-3200|");
	}

	var cs3400e2 = document.getElementById("cs3400e2");
	if (cs3400e2.checked) {
		interestCSData+=("CS-3400|");
	}

	var cs3410e2 = document.getElementById("cs3410e2");
	if (cs3410e2.checked) {
		interestCSData+=("CS-3410|");
	}

	var cs3440e2 = document.getElementById("cs3440e2");
	if (cs3440e2.checked) {
		interestCSData+=("CS-3440|");
	}

	var cs3500e2 = document.getElementById("cs3500e2");
	if (cs3500e2.checked) {
		interestCSData+=("CS-3500|");
	}

	var cs3520e2 = document.getElementById("cs3520e2");
	if (cs3520e2.checked) {
		interestCSData+=("CS-3520|");
	}

	var cs3600e2 = document.getElementById("cs3600e2");
	if (cs3600e2.checked) {
		interestCSData+=("CS-3600|");
	}

	var cs4200e2 = document.getElementById("cs4200e2");
	if (cs4200e2.checked) {
		interestCSData+=("CS-4200|");
	}

	var cs4300e2 = document.getElementById("cs4300e2");
	if (cs4300e2.checked) {
		interestCSData+=("CS-4300|");
	}

	var cs4307e2 = document.getElementById("cs4307e2");
	if (cs4307e2.checked) {
		interestCSData+=("CS-4307|");
	}

	var cs4320e2 = document.getElementById("cs4320e2");
	if (cs4320e2.checked) {
		interestCSData+=("CS-4320|");
	}

	var cs4550e2 = document.getElementById("cs4550e2");
	if (cs4550e2.checked) {
		interestCSData+=("CS-4550|");
	}

	var cs4920e2 = document.getElementById("cs4920e2");
	if (cs4920e2.checked) {
		interestCSData+=("CS-4920|");
	}

	var cs4990e2 = document.getElementById("cs4990e2");
	if (cs4990e2.checked) {
		interestCSData+=("CS-4990|");
	}

	var cs4991e2 = document.getElementById("cs4991e2");
	if (cs4991e2.checked) {
		interestCSData+=("CS-4991|");
	}

	var csit2700e2 = document.getElementById("csit2700e2");
	if (csit2700e2.checked) {
		interestCSData+=("IT-2700|");
	}

	var csit3100e2 = document.getElementById("csit3100e2");
	if (csit3100e2.checked) {
		interestCSData+=("IT-3100|");
	}

	var csit3110e2 = document.getElementById("csit3110e2");
	if (csit3110e2.checked) {
		interestCSData+=("IT-3110|");
	}

	var cs3010e2 = document.getElementById("cs3010e2");
	if (cs3010e2.checked) {
		interestCSData+=("CS-3010|");
	}

	var csit4200e2 = document.getElementById("csit4200e2");
	if (csit4200e2.checked) {
		interestCSData+=("IT-4200|");
	}

	var csse1400e2 = document.getElementById("csse1400e2");
	if (csse1400e2.checked) {
		interestCSData+=("SE-1400|");
	}

	var csse3400e2 = document.getElementById("csse3400e2");
	if (csse3400e2.checked) {
		interestCSData+=("SE-3400|");
	}
	
	interestCSData+=(" ");
	fetchString += interestCSData;

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: fetchString,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	}).then(function (response) {
		response.json().then(function (data) {
			//format here
			//3 x 3 grid
			var schedules = data;
			console.log("THIS IS FROM THE JAVASCRIPT");
			console.log(schedules);

			var schedule1Main = schedules[0];
			var schedule2Main = schedules[1];
			var schedule3Main = schedules[2];

			//to access data from the server... use the following functions
				//indexing values (0 & -1)
				//pop to remove the last item (credits)
				//shift to remove the first item (semester)

			//schedules is a list of lists
			var semesterCount = 0;

			console.log(semesterCount);

			//loop over each list in schedules, index, pop, shift and store
			var semester1HeaderContent = "";
			var semester1Classes = "";
			var semester1CreditCount = "";

			var semester2HeaderContent = "";
			var semester2Classes = "";
			var semester2CreditCount = "";

			var semester3HeaderContent = "";
			var semester3Classes = "";
			var semester3CreditCount = "";

			var semester4HeaderContent = "";
			var semester4Classes = "";
			var semester4CreditCount = "";

			var semester5HeaderContent = "";
			var semester5Classes = "";
			var semester5CreditCount = "";

			var semester6HeaderContent = "";
			var semester6Classes = "";
			var semester6CreditCount = "";

			var semester7HeaderContent = "";
			var semester7Classes = "";
			var semester7CreditCount = "";

			var semester8HeaderContent = "";
			var semester8Classes = "";
			var semester8CreditCount = "";

			var wrapper = document.querySelector("#fileBody");
			var schedule1button = document.querySelector("#fileLabel1");
			var schedule2button = document.querySelector("#fileLabel2");
			var schedule3button = document.querySelector("#fileLabel3");

			let schedule1Start = $.extend(true, [], schedule1Main);

			for (var x of schedule1Start) {
				console.log("In the for loop");
				console.log(x);
				semesterCount = 0;
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
			}

			console.log(data);

			var pdf = document.createElement("div");
			pdf.style.width = "30%";
			pdf.style.height = "30%";
			pdf.style.margin = "5px";
			pdf.style.float = "left";
			var pdfButton = document.createElement("button");
			pdfButton.style.backgroundColor = "#BA1C21";
			pdfButton.style.border = "none";
			pdfButton.style.color = "white";
			pdfButton.style.textAlign = "center";
			pdfButton.style.paddingRight = "15px";
			pdfButton.style.paddingLeft = "15px";
			pdfButton.style.textDecoration = "none";
			pdfButton.style.marginRight = "auto";
			pdfButton.style.marginLeft = "auto";
			pdfButton.innerHTML = "Export PDF";
			pdf.appendChild(pdfButton);
			wrapper.appendChild(pdf);

			pdfButton.onclick = function() {
				var doc = new jsPDF();
				if (semester1HeaderContent.length > 0) {
				    doc.text(20, 20, semester1HeaderContent);
				    doc.text(40, 20, semester1Classes);
				}
				if (semester2HeaderContent.length > 0) {
					doc.text(80, 20, semester2HeaderContent);
					doc.text(100, 20, semester2Classes);
				}
			    if (semester3HeaderContent.length > 0) {
			    	doc.text(140, 20, semester3HeaderContent);
			    	doc.text(160, 20, semester3Classes);
			    }
			    if (semester4HeaderContent.length > 0) {
			    	doc.text(20, 60, semester4HeaderContent);
			    	doc.text(40, 60, semester4Classes);
			    }
			    if (semester5HeaderContent.length > 0) {
			    	doc.text(80, 60, semester5HeaderContent);
			    	doc.text(100, 60, semester5Classes);
			    }
			    if (semester6HeaderContent.length > 0) {
			    	doc.text(140, 60, semester6HeaderContent);
			    	doc.text(160, 60, semester6Classes);
			    }
			    if (semester7HeaderContent.length > 0) {
			    	doc.text(20, 100, semester7HeaderContent);
			    	doc.text(40, 100, semester7Classes);
			    }
			    if (semester8HeaderContent.length > 0) {
			    	doc.text(80, 100, semester8HeaderContent);
			    	doc.text(100, 100, semester8Classes);
			    }
			    doc.output("dataurlnewwindow");
			}
			

			schedule1button.onclick = function() {
				schedule1button.style.backgroundColor = "#ebebeb";
				schedule2button.style.backgroundColor = "#f1f1f1";
				schedule3button.style.backgroundColor = "#f1f1f1";
				wrapper.innerHTML = "";

				console.log("LOOPING");
				console.log(schedule1Main);

				semesterCount = 0;

				let schedule1 = $.extend(true, [], schedule1Main);

				for (var x of schedule1) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
				}

				console.log(data);

				var pdf = document.createElement("div");
				pdf.style.width = "30%";
				pdf.style.height = "30%";
				pdf.style.margin = "5px";
				pdf.style.float = "left";
				var pdfButton = document.createElement("button");
				pdfButton.style.backgroundColor = "#BA1C21";
				pdfButton.style.border = "none";
				pdfButton.style.color = "white";
				pdfButton.style.textAlign = "center";
				pdfButton.style.paddingRight = "15px";
				pdfButton.style.paddingLeft = "15px";
				pdfButton.style.textDecoration = "none";
				pdfButton.style.marginRight = "auto";
				pdfButton.style.marginLeft = "auto";
				pdfButton.innerHTML = "Export PDF";
				pdf.appendChild(pdfButton);
				wrapper.appendChild(pdf);

				pdfButton.onclick = function() {
					var doc = new jsPDF();
					if (semester1HeaderContent.length > 0) {
					    doc.text(20, 20, semester1HeaderContent);
					    doc.text(40, 20, semester1Classes);
					}
					if (semester2HeaderContent.length > 0) {
						doc.text(80, 20, semester2HeaderContent);
						doc.text(100, 20, semester2Classes);
					}
				    if (semester3HeaderContent.length > 0) {
				    	doc.text(140, 20, semester3HeaderContent);
				    	doc.text(160, 20, semester3Classes);
				    }
				    if (semester4HeaderContent.length > 0) {
				    	doc.text(20, 60, semester4HeaderContent);
				    	doc.text(40, 60, semester4Classes);
				    }
				    if (semester5HeaderContent.length > 0) {
				    	doc.text(80, 60, semester5HeaderContent);
				    	doc.text(100, 60, semester5Classes);
				    }
				    if (semester6HeaderContent.length > 0) {
				    	doc.text(140, 60, semester6HeaderContent);
				    	doc.text(160, 60, semester6Classes);
				    }
				    if (semester7HeaderContent.length > 0) {
				    	doc.text(20, 100, semester7HeaderContent);
				    	doc.text(40, 100, semester7Classes);
				    }
				    if (semester8HeaderContent.length > 0) {
				    	doc.text(80, 100, semester8HeaderContent);
				    	doc.text(100, 100, semester8Classes);
				    }
				    doc.output("dataurlnewwindow");
				}
			}

			schedule2button.onclick = function() {
				schedule1button.style.backgroundColor = "#f1f1f1";
				schedule2button.style.backgroundColor = "#ebebeb";
				schedule3button.style.backgroundColor = "#f1f1f1";
				wrapper.innerHTML = "";

				console.log("LOOPING");
				console.log(schedule2Main);

				semesterCount = 0;

				let schedule2 = $.extend(true, [], schedule2Main);

				for (var x of schedule2) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
				}

				console.log(data);

				var pdf = document.createElement("div");
				pdf.style.width = "30%";
				pdf.style.height = "30%";
				pdf.style.margin = "5px";
				pdf.style.float = "left";
				var pdfButton = document.createElement("button");
				pdfButton.style.backgroundColor = "#BA1C21";
				pdfButton.style.border = "none";
				pdfButton.style.color = "white";
				pdfButton.style.textAlign = "center";
				pdfButton.style.paddingRight = "15px";
				pdfButton.style.paddingLeft = "15px";
				pdfButton.style.textDecoration = "none";
				pdfButton.style.marginRight = "auto";
				pdfButton.style.marginLeft = "auto";
				pdfButton.innerHTML = "Export PDF";
				pdf.appendChild(pdfButton);
				wrapper.appendChild(pdf);

				pdfButton.onclick = function() {
					var doc = new jsPDF();
					if (semester1HeaderContent.length > 0) {
					    doc.text(20, 20, semester1HeaderContent);
					    doc.text(40, 20, semester1Classes);
					}
					if (semester2HeaderContent.length > 0) {
						doc.text(80, 20, semester2HeaderContent);
						doc.text(100, 20, semester2Classes);
					}
				    if (semester3HeaderContent.length > 0) {
				    	doc.text(140, 20, semester3HeaderContent);
				    	doc.text(160, 20, semester3Classes);
				    }
				    if (semester4HeaderContent.length > 0) {
				    	doc.text(20, 60, semester4HeaderContent);
				    	doc.text(40, 60, semester4Classes);
				    }
				    if (semester5HeaderContent.length > 0) {
				    	doc.text(80, 60, semester5HeaderContent);
				    	doc.text(100, 60, semester5Classes);
				    }
				    if (semester6HeaderContent.length > 0) {
				    	doc.text(140, 60, semester6HeaderContent);
				    	doc.text(160, 60, semester6Classes);
				    }
				    if (semester7HeaderContent.length > 0) {
				    	doc.text(20, 100, semester7HeaderContent);
				    	doc.text(40, 100, semester7Classes);
				    }
				    if (semester8HeaderContent.length > 0) {
				    	doc.text(80, 100, semester8HeaderContent);
				    	doc.text(100, 100, semester8Classes);
				    }
				    doc.output("dataurlnewwindow");
				}
			}

			schedule3button.onclick = function() {
				schedule1button.style.backgroundColor = "#f1f1f1";
				schedule2button.style.backgroundColor = "#f1f1f1";
				schedule3button.style.backgroundColor = "#ebebeb";
				wrapper.innerHTML = "";

				console.log("LOOPING");
				console.log("schedule3Main");

				semesterCount = 0;

				let schedule3 = $.extend(true, [], schedule3Main);

				for (var x of schedule3) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
				}

				console.log(data);

				var pdf = document.createElement("div");
				pdf.style.width = "30%";
				pdf.style.height = "30%";
				pdf.style.margin = "5px";
				pdf.style.float = "left";
				var pdfButton = document.createElement("button");
				pdfButton.style.backgroundColor = "#BA1C21";
				pdfButton.style.border = "none";
				pdfButton.style.color = "white";
				pdfButton.style.textAlign = "center";
				pdfButton.style.paddingRight = "15px";
				pdfButton.style.paddingLeft = "15px";
				pdfButton.style.textDecoration = "none";
				pdfButton.style.marginRight = "auto";
				pdfButton.style.marginLeft = "auto";
				pdfButton.innerHTML = "Export PDF";
				pdf.appendChild(pdfButton);
				wrapper.appendChild(pdf);

				pdfButton.onclick = function() {
					var doc = new jsPDF();
					if (semester1HeaderContent.length > 0) {
					    doc.text(20, 20, semester1HeaderContent);
					    doc.text(40, 20, semester1Classes);
					}
					if (semester2HeaderContent.length > 0) {
						doc.text(80, 20, semester2HeaderContent);
						doc.text(100, 20, semester2Classes);
					}
				    if (semester3HeaderContent.length > 0) {
				    	doc.text(140, 20, semester3HeaderContent);
				    	doc.text(160, 20, semester3Classes);
				    }
				    if (semester4HeaderContent.length > 0) {
				    	doc.text(20, 60, semester4HeaderContent);
				    	doc.text(40, 60, semester4Classes);
				    }
				    if (semester5HeaderContent.length > 0) {
				    	doc.text(80, 60, semester5HeaderContent);
				    	doc.text(100, 60, semester5Classes);
				    }
				    if (semester6HeaderContent.length > 0) {
				    	doc.text(140, 60, semester6HeaderContent);
				    	doc.text(160, 60, semester6Classes);
				    }
				    if (semester7HeaderContent.length > 0) {
				    	doc.text(20, 100, semester7HeaderContent);
				    	doc.text(40, 100, semester7Classes);
				    }
				    if (semester8HeaderContent.length > 0) {
				    	doc.text(80, 100, semester8HeaderContent);
				    	doc.text(100, 100, semester8Classes);
				    }
				    doc.output("dataurlnewwindow");
				}
			}
		})
	});
}

thirdMoveOnSE.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "block";
	maSchedule.style.display = "none";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "block";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "block";
	
	breadcrumb3.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "block";
		body3M.style.display = "none";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
	}

	var seTrack = "";

	var seEnt = document.getElementById("ent");
	if (seEnt.checked) {
		seTrack+=("ent");
	}

	var seDevops = document.getElementById("devops");
	if (seDevops.checked) {
		seTrack+=("devops");
	}

	var seApp = document.getElementById("app");
	if (seApp.checked) {
		seTrack+=("app");
	}

	var seData = document.getElementById("data");
	if (seData.checked) {
		seTrack+=("data");
	}

	seTrack+=(" ");
	fetchString += seTrack;

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: fetchString,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	}).then(function (response) {
		response.json().then(function (data) {
			//format here
			//3 x 3 grid
			var schedule = data;
			console.log("THIS IS FROM THE JAVASCRIPT");
			console.log(schedule);

			//to access data from the server... use the following functions
				//indexing values (0 & -1)
				//pop to remove the last item (credits)
				//shift to remove the first item (semester)

			//schedules is a list of lists
			var semesterCount = 0;

			console.log(semesterCount);

			//loop over each list in schedules, index, pop, shift and store
			var semester1HeaderContent = "";
			var semester1Classes = "";
			var semester1CreditCount = "";

			var semester2HeaderContent = "";
			var semester2Classes = "";
			var semester2CreditCount = "";

			var semester3HeaderContent = "";
			var semester3Classes = "";
			var semester3CreditCount = "";

			var semester4HeaderContent = "";
			var semester4Classes = "";
			var semester4CreditCount = "";

			var semester5HeaderContent = "";
			var semester5Classes = "";
			var semester5CreditCount = "";

			var semester6HeaderContent = "";
			var semester6Classes = "";
			var semester6CreditCount = "";

			var semester7HeaderContent = "";
			var semester7Classes = "";
			var semester7CreditCount = "";

			var semester8HeaderContent = "";
			var semester8Classes = "";
			var semester8CreditCount = "";

			var wrapper = document.querySelector("#seSchedule");
			wrapper.style.marginBottom = "2%";
			wrapper.style.marginTop = "2%";

			for (var x of schedule) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits);
					wrapper.appendChild(semester8);
				}

			}

			console.log(data);

			var pdf = document.createElement("div");
			pdf.style.width = "30%";
			pdf.style.height = "30%";
			pdf.style.margin = "5px";
			pdf.style.float = "left";
			var pdfButton = document.createElement("button");
			pdfButton.style.backgroundColor = "#BA1C21";
			pdfButton.style.border = "none";
			pdfButton.style.color = "white";
			pdfButton.style.textAlign = "center";
			pdfButton.style.paddingRight = "15px";
			pdfButton.style.paddingLeft = "15px";
			pdfButton.style.textDecoration = "none";
			pdfButton.style.marginRight = "auto";
			pdfButton.style.marginLeft = "auto";
			pdfButton.innerHTML = "Export PDF";
			pdf.appendChild(pdfButton);
			wrapper.appendChild(pdf);

			pdfButton.onclick = function() {
				var doc = new jsPDF();
				if (semester1HeaderContent.length > 0) {
				    doc.text(20, 20, semester1HeaderContent);
				    doc.text(40, 20, semester1Classes);
				}
				if (semester2HeaderContent.length > 0) {
					doc.text(80, 20, semester2HeaderContent);
					doc.text(100, 20, semester2Classes);
				}
			    if (semester3HeaderContent.length > 0) {
			    	doc.text(140, 20, semester3HeaderContent);
			    	doc.text(160, 20, semester3Classes);
			    }
			    if (semester4HeaderContent.length > 0) {
			    	doc.text(20, 60, semester4HeaderContent);
			    	doc.text(40, 60, semester4Classes);
			    }
			    if (semester5HeaderContent.length > 0) {
			    	doc.text(80, 60, semester5HeaderContent);
			    	doc.text(100, 60, semester5Classes);
			    }
			    if (semester6HeaderContent.length > 0) {
			    	doc.text(140, 60, semester6HeaderContent);
			    	doc.text(160, 60, semester6Classes);
			    }
			    if (semester7HeaderContent.length > 0) {
			    	doc.text(20, 100, semester7HeaderContent);
			    	doc.text(40, 100, semester7Classes);
			    }
			    if (semester8HeaderContent.length > 0) {
			    	doc.text(80, 100, semester8HeaderContent);
			    	doc.text(100, 100, semester8Classes);
			    }
			    doc.output("dataurlnewwindow");
			}

		})
	});
}

thirdMoveOnM.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "block";
	itSchedule.style.display = "none";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "block";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "block";
	
	breadcrumb3.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "block";
		body3IT.style.display = "none";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
	}

	var maElectives = "";

	var m2600e = document.getElementById("m2600e");
	if (m2600e.checked) {
		maElectives+=("MA-2600|");
	}

	var m3000e = document.getElementById("m3000e");
	if (m3000e.checked) {
		maElectives+=("MA-3000|");
	}

	var m3100e = document.getElementById("m3100e");
	if (m3100e.checked) {
		maElectives+=("MA-3100|");
	}

	var m3210e = document.getElementById("m3210e");
	if (m3210e.checked) {
		maElectives+=("MA-3210|");
	}

	var m3450e = document.getElementById("m3450e");
	if (m3450e.checked) {
		maElectives+=("MA-3450|");
	}

	var m3500e = document.getElementById("m3500e");
	if (m3500e.checked) {
		maElectives+=("MA-3500|");
	}

	var m3700e = document.getElementById("m3700e");
	if (m3700e.checked) {
		maElectives+=("MA-3700|");
	}

	var m4010e = document.getElementById("m4010e");
	if (m4010e.checked) {
		maElectives+=("MA-4010|");
	}

	var m4100e = document.getElementById("m4100e");
	if (m4100e.checked) {
		maElectives+=("MA-4100|");
	}

	var m4200e = document.getElementById("m4200e");
	if (m4200e.checked) {
		maElectives+=("MA-4200|");
	}

	var m4250e = document.getElementById("m4250e");
	if (m4250e.checked) {
		maElectives+=("MA-4250|");
	}

	var m4550e = document.getElementById("m4550e");
	if (m4550e.checked) {
		maElectives+=("MA-4550|");
	}

	var m4800e = document.getElementById("m4800e");
	if (m4800e.checked) {
		maElectives+=("MA-4800|");
	}

	var m4890e = document.getElementById("m4890e");
	if (m4890e.checked) {
		maElectives+=("MA-4890|");
	}

	maElectives+=(" ");
	console.log(maElectives);

	fetchString += maElectives;

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: fetchString,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	}).then(function (response) {
		response.json().then(function (data) {
			//format here
			//3 x 3 grid
			var schedule = data;
			console.log("THIS IS FROM THE JAVASCRIPT");
			console.log(schedule);

			//to access data from the server... use the following functions
				//indexing values (0 & -1)
				//pop to remove the last item (credits)
				//shift to remove the first item (semester)

			//schedules is a list of lists
			var semesterCount = 0;

			console.log(semesterCount);

			//loop over each list in schedules, index, pop, shift and store
			var semester1HeaderContent = "";
			var semester1Classes = "";
			var semester1CreditCount = "";

			var semester2HeaderContent = "";
			var semester2Classes = "";
			var semester2CreditCount = "";

			var semester3HeaderContent = "";
			var semester3Classes = "";
			var semester3CreditCount = "";

			var semester4HeaderContent = "";
			var semester4Classes = "";
			var semester4CreditCount = "";

			var semester5HeaderContent = "";
			var semester5Classes = "";
			var semester5CreditCount = "";

			var semester6HeaderContent = "";
			var semester6Classes = "";
			var semester6CreditCount = "";

			var semester7HeaderContent = "";
			var semester7Classes = "";
			var semester7CreditCount = "";

			var semester8HeaderContent = "";
			var semester8Classes = "";
			var semester8CreditCount = "";

			var wrapper = document.querySelector("#maSchedule");
			wrapper.style.marginBottom = "2%";
			wrapper.style.marginTop = "2%";

			for (var x of schedule) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
			}

			var pdf = document.createElement("div");
			pdf.style.width = "30%";
			pdf.style.height = "30%";
			pdf.style.margin = "5px";
			pdf.style.float = "left";
			var pdfButton = document.createElement("button");
			pdfButton.style.backgroundColor = "#BA1C21";
			pdfButton.style.border = "none";
			pdfButton.style.color = "white";
			pdfButton.style.textAlign = "center";
			pdfButton.style.paddingRight = "15px";
			pdfButton.style.paddingLeft = "15px";
			pdfButton.style.textDecoration = "none";
			pdfButton.style.marginRight = "auto";
			pdfButton.style.marginLeft = "auto";
			pdfButton.innerHTML = "Export PDF";
			pdf.appendChild(pdfButton);
			wrapper.appendChild(pdf);

			pdfButton.onclick = function() {
				var doc = new jsPDF();
				if (semester1HeaderContent.length > 0) {
				    doc.text(20, 20, semester1HeaderContent);
				    doc.text(40, 20, semester1Classes);
				}
				if (semester2HeaderContent.length > 0) {
					doc.text(80, 20, semester2HeaderContent);
					doc.text(100, 20, semester2Classes);
				}
			    if (semester3HeaderContent.length > 0) {
			    	doc.text(140, 20, semester3HeaderContent);
			    	doc.text(160, 20, semester3Classes);
			    }
			    if (semester4HeaderContent.length > 0) {
			    	doc.text(20, 60, semester4HeaderContent);
			    	doc.text(40, 60, semester4Classes);
			    }
			    if (semester5HeaderContent.length > 0) {
			    	doc.text(80, 60, semester5HeaderContent);
			    	doc.text(100, 60, semester5Classes);
			    }
			    if (semester6HeaderContent.length > 0) {
			    	doc.text(140, 60, semester6HeaderContent);
			    	doc.text(160, 60, semester6Classes);
			    }
			    if (semester7HeaderContent.length > 0) {
			    	doc.text(20, 100, semester7HeaderContent);
			    	doc.text(40, 100, semester7Classes);
			    }
			    if (semester8HeaderContent.length > 0) {
			    	doc.text(80, 100, semester8HeaderContent);
			    	doc.text(100, 100, semester8Classes);
			    }
			    doc.output("dataurlnewwindow");
			}
		})
	});
}

thirdMoveOnIT.onclick = function() {
	body1.style.display = "none";
	body2CS.style.display = "none";
	body2SE.style.display = "none";
	body2M.style.display = "none";
	body2IT.style.display = "none";
	body3CS.style.display = "none";
	body3SE.style.display = "none";
	body3M.style.display = "none";
	body3IT.style.display = "none";
	csSchedule.style.display = "none";
	seSchedule.style.display = "none";
	maSchedule.style.display = "none";
	itSchedule.style.display = "block";
	introHeader.style.display = "none";
	header.style.display = "block";
	breadcrumbBox.style.display = "block";
	breadcrumb.style.display = "block";
	breadcrumb2.style.display = "block";
	breadcrumb3.style.display = "block";
	breadcrumbSeparater.style.display = "block";
	breadcrumbSeparater2.style.display = "block";
	
	breadcrumb3.onclick = function() {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body2M.style.display = "none";
		body2IT.style.display = "none";
		body3CS.style.display = "none";
		body3SE.style.display = "none";
		body3M.style.display = "none";
		body3IT.style.display = "block";
		csSchedule.style.display = "none";
		seSchedule.style.display = "none";
		maSchedule.style.display = "none";
		itSchedule.style.display = "none";
		introHeader.style.display = "none";
		header.style.display = "block";
		breadcrumbBox.style.display = "block";
		breadcrumb.style.display = "block";
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
	}

	var itElectives = "";

	var it3110e = document.getElementById("it3110e");
	if (it3110e.checked) {
		itElectives+=("IT-3110|");
	}

	var it3300e = document.getElementById("it3300e");
	if (it3300e.checked) {
		itElectives+=("IT-3300|");
	}

	var it4100e = document.getElementById("it4100e");
	if (it4100e.checked) {
		itElectives+=("IT-4100|");
	}

	var it4200e = document.getElementById("it4200e");
	if (it4200e.checked) {
		itElectives+=("IT-4200|");
	}

	var it4310e = document.getElementById("it4310e");
	if (it4310e.checked) {
		itElectives+=("IT-4310|");
	}

	var it4400e = document.getElementById("it4400e");
	if (it4400e.checked) {
		itElectives+=("IT-4400|");
	}

	var it4510e = document.getElementById("it4510e");
	if (it4510e.checked) {
		itElectives+=("IT-4510|");
	}

	var it4920e = document.getElementById("it4920e");
	if (it4920e.checked) {
		itElectives+=("IT-4920|");
	}

	var it4990e = document.getElementById("it4990e");
	if (it4990e.checked) {
		itElectives+=("IT-4990|");
	}

	var itma1040e = document.getElementById("itma1040e");
	if (itma1040e.checked) {
		itElectives+=("MA-1040|");
	}

	var itma1050e = document.getElementById("itma1050e");
	if (itma1050e.checked) {
		itElectives+=("MA-1050|");
	}


	var itcs3005e2 = document.getElementById("itcs3005e2");
	if (itcs3005e2.checked) {
		itElectives+=("CS-3005|");
	}

	var itis2050e2 = document.getElementById("itis2050e2");
	if (itis2050e2.checked) {
		itElectives+=("ISA-2050|");
	}

	var it4060e2 = document.getElementById("it4060e2");
	if (it4060e2.checked) {
		itElectives+=("IT-4060|");
	}

	var it4070e2 = document.getElementById("it4070e2");
	if (it4070e2.checked) {
		itElectives+=("IT-4070|");
	}

	var itse3200e2 = document.getElementById("itse3200e2");
	if (itse3200e2.checked) {
		itElectives+=("SE-3200|");
	}

	var itse3400e2 = document.getElementById("itse3400e2");
	if (itse3400e2.checked) {
		itElectives+=("SE-3400|");
	}

	var itse4200e2 = document.getElementById("itse4200e2");
	if (itse4200e2.checked) {
		itElectives+=("SE-4200|");
	}

	itElectives+=(" ");
	console.log(itElectives);

	fetchString += itElectives;

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: fetchString,
			credentials: 'include',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
	}).then(function (response) {
		response.json().then(function (data) {
			//format here
			//3 x 3 grid
			var schedule = data;
			console.log("THIS IS FROM THE JAVASCRIPT");
			console.log(schedule);

			//to access data from the server... use the following functions
				//indexing values (0 & -1)
				//pop to remove the last item (credits)
				//shift to remove the first item (semester)

			//schedules is a list of lists
			var semesterCount = 0;

			console.log(semesterCount);

			//loop over each list in schedules, index, pop, shift and store
			var semester1HeaderContent = "";
			var semester1Classes = "";
			var semester1CreditCount = "";

			var semester2HeaderContent = "";
			var semester2Classes = "";
			var semester2CreditCount = "";

			var semester3HeaderContent = "";
			var semester3Classes = "";
			var semester3CreditCount = "";

			var semester4HeaderContent = "";
			var semester4Classes = "";
			var semester4CreditCount = "";

			var semester5HeaderContent = "";
			var semester5Classes = "";
			var semester5CreditCount = "";

			var semester6HeaderContent = "";
			var semester6Classes = "";
			var semester6CreditCount = "";

			var semester7HeaderContent = "";
			var semester7Classes = "";
			var semester7CreditCount = "";

			var semester8HeaderContent = "";
			var semester8Classes = "";
			var semester8CreditCount = "";

			var wrapper = document.querySelector("#itSchedule");
			wrapper.style.marginBottom = "2%";
			wrapper.style.marginTop = "2%";

			for (var x of schedule) {
				console.log("In the for loop");
				console.log(x);
				semesterCount += 1;
				console.log(semesterCount);
				var loopSemester = x;
				//loopSemester is the list with the current semester info
				//index to store, pop and shift to remove and leave everything else for class list
				if (semesterCount == 1) {
					semester1HeaderContent = loopSemester[0];
					console.log(semester1HeaderContent);
					var length = loopSemester.length;
					semester1CreditCount = loopSemester[length - 1];
					console.log(semester1CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester1Classes = loopSemester;
					console.log(semester1Classes);
					var semester1 = document.createElement("div");
					semester1.style.width = "30%";
					semester1.style.height = "30%";
					semester1.style.margin = "5px";
					semester1.style.border = "thin solid #e3e3e3";
					semester1.style.float = "left";
					var semester1Header = document.createElement("h2");
					semester1Header.innerHTML = semester1HeaderContent;
					semester1Header.style.marginBottom = "0px";
					semester1Header.style.marginTop = "2%";
					semester1Header.style.textAlign = "center";
					var semester1p = document.createElement("p");
					semester1p.innerHTML = semester1Classes;
					semester1p.style.marginRight = "15px";
					semester1p.style.marginLeft = "15px";
					var semester1Credits = document.createElement("h4");
					semester1Credits.innerHTML = semester1CreditCount;
					semester1Credits.style.textAlign = "center";
					semester1.appendChild(semester1Header);
					semester1.appendChild(semester1p);
					semester1.appendChild(semester1Credits);
					wrapper.appendChild(semester1);
				} else if (semesterCount == 2) {
					semester2HeaderContent = loopSemester[0];
					console.log(semester2HeaderContent);
					var length = loopSemester.length;
					semester2CreditCount = loopSemester[length - 1];
					console.log(semester2CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester2Classes = loopSemester;
					console.log(semester2Classes);
					var semester2 = document.createElement("div");
					semester2.style.width = "30%";
					semester2.style.height = "30%";
					semester2.style.margin = "5px";
					semester2.style.border = "thin solid #e3e3e3";
					semester2.style.float = "left";
					var semester2Header = document.createElement("h2");
					semester2Header.innerHTML = semester2HeaderContent;
					semester2Header.style.marginBottom = "0px";
					semester2Header.style.marginTop = "2%";
					semester2Header.style.textAlign = "center";
					var semester2p = document.createElement("p");
					semester2p.innerHTML = semester2Classes;
					semester2p.style.marginRight = "15px";
					semester2p.style.marginLeft = "15px";
					var semester2Credits = document.createElement("h4");
					semester2Credits.innerHTML = semester2CreditCount;
					semester2Credits.style.textAlign = "center";
					semester2.appendChild(semester2Header);
					semester2.appendChild(semester2p);
					semester2.appendChild(semester2Credits);
					wrapper.appendChild(semester2);
				} else if (semesterCount == 3) {
					semester3HeaderContent = loopSemester[0];
					console.log(semester3HeaderContent);
					var length = loopSemester.length;
					semester3CreditCount = loopSemester[length - 1];
					console.log(semester3CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester3Classes = loopSemester;
					console.log(semester3Classes);
					var semester3 = document.createElement("div");
					semester3.style.width = "30%";
					semester3.style.height = "30%";
					semester3.style.margin = "5px";
					semester3.style.border = "thin solid #e3e3e3";
					semester3.style.float = "left";
					var semester3Header = document.createElement("h2");
					semester3Header.innerHTML = semester3HeaderContent;
					semester3Header.style.marginBottom = "0px";
					semester3Header.style.marginTop = "2%";
					semester3Header.style.textAlign = "center";
					var semester3p = document.createElement("p");
					semester3p.innerHTML = semester3Classes;
					semester3p.style.marginRight = "15px";
					semester3p.style.marginLeft = "15px";
					var semester3Credits = document.createElement("h4");
					semester3Credits.innerHTML = semester3CreditCount;
					semester3Credits.style.textAlign = "center";
					semester3.appendChild(semester3Header);
					semester3.appendChild(semester3p);
					semester3.appendChild(semester3Credits);
					wrapper.appendChild(semester3);
				} else if (semesterCount == 4) {
					semester4HeaderContent = loopSemester[0];
					console.log(semester4HeaderContent);
					var length = loopSemester.length;
					semester4CreditCount = loopSemester[length - 1];
					console.log(semester4CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester4Classes = loopSemester;
					console.log(semester4Classes);
					var semester4 = document.createElement("div");
					semester4.style.width = "30%";
					semester4.style.height = "30%";
					semester4.style.margin = "5px";
					semester4.style.border = "thin solid #e3e3e3";
					semester4.style.float = "left";
					var semester4Header = document.createElement("h2");
					semester4Header.innerHTML = semester4HeaderContent;
					semester4Header.style.marginBottom = "0px";
					semester4Header.style.marginTop = "2%";
					semester4Header.style.textAlign = "center";
					var semester4p = document.createElement("p");
					semester4p.innerHTML = semester4Classes;
					semester4p.style.marginRight = "15px";
					semester4p.style.marginLeft = "15px";
					var semester4Credits = document.createElement("h4");
					semester4Credits.innerHTML = semester4CreditCount;
					semester4Credits.style.textAlign = "center";
					semester4.appendChild(semester4Header);
					semester4.appendChild(semester4p);
					semester4.appendChild(semester4Credits);
					wrapper.appendChild(semester4);
				} else if (semesterCount == 5) {
					semester5HeaderContent = loopSemester[0];
					console.log(semester5HeaderContent);
					var length = loopSemester.length;
					semester5CreditCount = loopSemester[length - 1];
					console.log(semester5CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester5Classes = loopSemester;
					console.log(semester5Classes);
					var semester5 = document.createElement("div");
					semester5.style.width = "30%";
					semester5.style.height = "30%";
					semester5.style.margin = "5px";
					semester5.style.border = "thin solid #e3e3e3";
					semester5.style.float = "left";
					var semester5Header = document.createElement("h2");
					semester5Header.innerHTML = semester5HeaderContent;
					semester5Header.style.marginBottom = "0px";
					semester5Header.style.marginTop = "2%";
					semester5Header.style.textAlign = "center";
					var semester5p = document.createElement("p");
					semester5p.innerHTML = semester5Classes;
					semester5p.style.marginRight = "15px";
					semester5p.style.marginLeft = "15px";
					var semester5Credits = document.createElement("h4");
					semester5Credits.innerHTML = semester5CreditCount;
					semester5Credits.style.textAlign = "center";
					semester5.appendChild(semester5Header);
					semester5.appendChild(semester5p);
					semester5.appendChild(semester5Credits);
					wrapper.appendChild(semester5);
				} else if (semesterCount == 6) {
					semester6HeaderContent = loopSemester[0];
					console.log(semester6HeaderContent);
					var length = loopSemester.length;
					semester6CreditCount = loopSemester[length - 1];
					console.log(semester6CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester6Classes = loopSemester;
					console.log(semester6Classes);
					var semester6 = document.createElement("div");
					semester6.style.width = "30%";
					semester6.style.height = "30%";
					semester6.style.margin = "5px";
					semester6.style.border = "thin solid #e3e3e3";
					semester6.style.float = "left";
					var semester6Header = document.createElement("h2");
					semester6Header.innerHTML = semester6HeaderContent;
					semester6Header.style.marginBottom = "0px";
					semester6Header.style.marginTop = "2%";
					semester6Header.style.textAlign = "center";
					var semester6p = document.createElement("p");
					semester6p.innerHTML = semester6Classes;
					semester6p.style.marginRight = "15px";
					semester6p.style.marginLeft = "15px";
					var semester6Credits = document.createElement("h4");
					semester6Credits.innerHTML = semester6CreditCount;
					semester6Credits.style.textAlign = "center";
					semester6.appendChild(semester6Header);
					semester6.appendChild(semester6p);
					semester6.appendChild(semester6Credits);
					wrapper.appendChild(semester6);
				} else if (semesterCount == 7) {
					semester7HeaderContent = loopSemester[0];
					console.log(semester7HeaderContent);
					var length = loopSemester.length;
					semester7CreditCount = loopSemester[length - 1];
					console.log(semester7CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester7Classes = loopSemester;
					console.log(semester7Classes);
					var semester7 = document.createElement("div");
					semester7.style.width = "30%";
					semester7.style.height = "30%";
					semester7.style.margin = "5px";
					semester7.style.border = "thin solid #e3e3e3";
					semester7.style.float = "left";
					var semester7Header = document.createElement("h2");
					semester7Header.innerHTML = semester7HeaderContent;
					semester7Header.style.marginBottom = "0px";
					semester7Header.style.marginTop = "2%";
					semester7Header.style.textAlign = "center";
					var semester7p = document.createElement("p");
					semester7p.innerHTML = semester7Classes;
					semester7p.style.marginRight = "15px";
					semester7p.style.marginLeft = "15px";
					var semester7Credits = document.createElement("h4");
					semester7Credits.innerHTML = semester7CreditCount;
					semester7Credits.style.textAlign = "center";
					semester7.appendChild(semester7Header);
					semester7.appendChild(semester7p);
					semester7.appendChild(semester7Credits);
					wrapper.appendChild(semester7);
				} else if (semesterCount == 8) {
					semester8HeaderContent = loopSemester[0];
					console.log(semester8HeaderContent);
					var length = loopSemester.length;
					semester8CreditCount = loopSemester[length - 1];
					console.log(semester8CreditCount);
					loopSemester.pop();
					loopSemester.shift();
					semester8Classes = loopSemester;
					console.log(semester8Classes);
					var semester8 = document.createElement("div");
					semester8.style.width = "30%";
					semester8.style.height = "30%";
					semester8.style.margin = "5px";
					semester8.style.border = "thin solid #e3e3e3";
					semester8.style.float = "left";
					var semester8Header = document.createElement("h2");
					semester8Header.innerHTML = semester8HeaderContent;
					semester8Header.style.marginBottom = "0px";
					semester8Header.style.marginTop = "2%";
					semester8Header.style.textAlign = "center";
					var semester8p = document.createElement("p");
					semester8p.innerHTML = semester8Classes;
					semester8p.style.marginRight = "15px";
					semester8p.style.marginLeft = "15px";
					var semester8Credits = document.createElement("h4");
					semester8Credits.innerHTML = semester8CreditCount;
					semester8Credits.style.textAlign = "center";
					semester8.appendChild(semester8Header);
					semester8.appendChild(semester8p);
					semester8.appendChild(semester8Credits)
					wrapper.appendChild(semester8);
				}
			}

			var pdf = document.createElement("div");
			pdf.style.width = "30%";
			pdf.style.height = "30%";
			pdf.style.margin = "5px";
			pdf.style.float = "left";
			var pdfButton = document.createElement("button");
			pdfButton.style.backgroundColor = "#BA1C21";
			pdfButton.style.border = "none";
			pdfButton.style.color = "white";
			pdfButton.style.textAlign = "center";
			pdfButton.style.paddingRight = "15px";
			pdfButton.style.paddingLeft = "15px";
			pdfButton.style.textDecoration = "none";
			pdfButton.style.marginRight = "auto";
			pdfButton.style.marginLeft = "auto";
			pdfButton.innerHTML = "Export PDF";
			pdf.appendChild(pdfButton);
			wrapper.appendChild(pdf);

			pdfButton.onclick = function() {
				var doc = new jsPDF();
				if (semester1HeaderContent.length > 0) {
				    doc.text(20, 20, semester1HeaderContent);
				    doc.text(40, 20, semester1Classes);
				}
				if (semester2HeaderContent.length > 0) {
					doc.text(80, 20, semester2HeaderContent);
					doc.text(100, 20, semester2Classes);
				}
			    if (semester3HeaderContent.length > 0) {
			    	doc.text(140, 20, semester3HeaderContent);
			    	doc.text(160, 20, semester3Classes);
			    }
			    if (semester4HeaderContent.length > 0) {
			    	doc.text(20, 60, semester4HeaderContent);
			    	doc.text(40, 60, semester4Classes);
			    }
			    if (semester5HeaderContent.length > 0) {
			    	doc.text(80, 60, semester5HeaderContent);
			    	doc.text(100, 60, semester5Classes);
			    }
			    if (semester6HeaderContent.length > 0) {
			    	doc.text(140, 60, semester6HeaderContent);
			    	doc.text(160, 60, semester6Classes);
			    }
			    if (semester7HeaderContent.length > 0) {
			    	doc.text(20, 100, semester7HeaderContent);
			    	doc.text(40, 100, semester7Classes);
			    }
			    if (semester8HeaderContent.length > 0) {
			    	doc.text(80, 100, semester8HeaderContent);
			    	doc.text(100, 100, semester8Classes);
			    }
			    doc.output("dataurlnewwindow");
			}
		})
	});
}