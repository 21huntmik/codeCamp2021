//Load JSPDF

$.getScript("./jsPDFolder/jspdf.js", function() {
   alert("Script loaded but not necessarily executed.");
});

//Query Buttons

var storeMajorButton = document.querySelector(".firstMoveOn");
var storeGenEdsButton = document.querySelector(".geneds");
var storeTakenCSClassesButton = document.querySelector(".secondMoveOn");
var storeTakenSEClassesButton = document.querySelector(".secondMoveOnSE");
var storeTakenMAClassesButton = document.querySelector(".secondMoveOnM");
var storeTakenITClassesButton = document.querySelector(".secondMoveOnIT");
var storeCSElectivesButton = document.querySelector(".thirdMoveOn");
var storeSEElectivesButton = document.querySelector(".thirdMoveOnSE");
var storeMAElectivesButton = document.querySelector(".thirdMoveOnM");
var storeITElectivesButton = document.querySelector(".thirdMoveOnIT");

//Create Data Storage

var gFetchString = "";
var gMajor = "";
var gGradDate = "";
var gGenEds = "";
var gClasses = "";
var gElectives = "";

//Query DOM

var breadcrumbBox = document.querySelector("#breadcrumbBox");
breadcrumbBox.style.display = "none";
var breadcrumb = document.querySelector("#breadcrumb");
breadcrumb.style.display = "none";
var breadcrumb2 = document.querySelector("#breadcrumb2");
breadcrumb2.style.display = "none";
var breadcrumb3 = document.querySelector("#breadcrumb3");
breadcrumb3.style.display = "none";
var breadcrumb4 = document.querySelector("#breadcrumb4");
breadcrumb4.style.display = "none";
var breadcrumbSeparater = document.querySelector("#breadcrumbSeparater");
breadcrumbSeparater.style.display = "none";
var breadcrumbSeparater2 = document.querySelector("#breadcrumbSeparater2");
breadcrumbSeparater2.style.display = "none";
var breadcrumbSeparater3 = document.querySelector("#breadcrumbSeparater3");
breadcrumbSeparater3.style.display = "none";
var body1 = document.querySelector("#body1");
body1.style.display = "block";
var body1Generals = document.querySelector("#body1Generals");
body1Generals.style.display = "none";
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

//Store Major + Grad Date

storeMajorButton.onclick = function() {

	displayGenEds();

	var majorSelector = document.querySelector(".major");
	gMajor = majorSelector.value;
	gMajor+=(" ");

	var gradDateSelector = document.querySelector(".gradDate");
	gGradDate = gradDateSelector.value;
	gGradDate+=(" ");

	breadcrumb.onclick = function() {
		//Maybe implement an "Update all global variables" function to update any changes made by going back a page
		displayMajor();
	}
}

//Store Completed Generals

storeGenEdsButton.onclick = function() {
	displayTakenClasses();

	breadcrumb2.onclick = function() {
		displayGenEds();
	}

	saveCheckboxTF("engl1010");
	saveCheckboxTF("engl2010");
	saveCheckboxClass("genMA1030", "genMA");
	saveCheckboxClass("genMA1040", "genMA");
	saveCheckboxClass("genMA1050", "genMA");
	saveCheckboxClass("genMA1060", "genMA");
	saveCheckboxClass("genMA1080", "genMA");
	saveCheckboxClass("genMA1100", "genMA");
	saveCheckboxClass("genMA1210", "genMA");
	saveCheckboxClass("genMA1220", "genMA");
	saveCheckboxClass("genMA2210", "genMA");
	saveCheckboxTF("americanInst");
	saveCheckboxTF("lifeScience");
	saveCheckboxTF("physicalScience");
	saveCheckboxTF("fineArt");
	saveCheckboxTF("litHum");
	saveCheckboxTF("socialSci");
	saveCheckboxTF("expl");

	gGenEds+=(" ");
}

//Store Taken Classes

storeTakenCSClassesButton.onclick = function() {
	displayElectives();

	breadcrumb3.onclick = function() {
		displayTakenClasses();
	}

	saveCheckboxClass("cs1400", "takenClasses");
	saveCheckboxClass("cs1410", "takenClasses");
	saveCheckboxClass("cs2420", "takenClasses");
	saveCheckboxClass("cs2450", "takenClasses");
	saveCheckboxClass("cs2810", "takenClasses");
	saveCheckboxClass("cs3005", "takenClasses");
	saveCheckboxClass("cs3010", "takenClasses");
	saveCheckboxClass("cs3020", "takenClasses");
	saveCheckboxClass("cs3150", "takenClasses");
	saveCheckboxClass("cs3200", "takenClasses");
	saveCheckboxClass("cs3310", "takenClasses");
	saveCheckboxClass("cs3400", "takenClasses");
	saveCheckboxClass("cs3410", "takenClasses");
	saveCheckboxClass("cs3440", "takenClasses");
	saveCheckboxClass("cs3500", "takenClasses");
	saveCheckboxClass("cs3510", "takenClasses");
	saveCheckboxClass("cs3520", "takenClasses");
	saveCheckboxClass("cs3530", "takenClasses");
	saveCheckboxClass("cs3600", "takenClasses");
	saveCheckboxClass("cs4200", "takenClasses");
	saveCheckboxClass("cs4300", "takenClasses");
	saveCheckboxClass("cs4320", "takenClasses");
	saveCheckboxClass("cs4307", "takenClasses");
	saveCheckboxClass("cs4310", "takenClasses");
	saveCheckboxClass("cs4550", "takenClasses");
	saveCheckboxClass("cs4600", "takenClasses");
	saveCheckboxClass("cs4920", "takenClasses");
	saveCheckboxClass("cs4990", "takenClasses");
	saveCheckboxClass("csMath3400", "takenClasses");
	saveCheckboxClass("csMath2270", "takenClasses");
	saveCheckboxClass("csMath2280", "takenClasses");
	saveCheckboxClass("csMath2210", "takenClasses");
	saveCheckboxClass("csMath2250", "takenClasses");
	saveCheckboxClass("csMath1210", "takenClasses");
	saveCheckboxClass("csMath1220", "takenClasses");
	saveCheckboxClass("csBio1610", "takenClasses");
	saveCheckboxClass("csPhys2210", "takenClasses");
	saveCheckboxClass("csIt2700", "takenClasses");
	saveCheckboxClass("csIt3100", "takenClasses");
	saveCheckboxClass("csIt3110", "takenClasses");
	saveCheckboxClass("csIt4200", "takenClasses");
	saveCheckboxClass("csSe1400", "takenClasses");
	saveCheckboxClass("csSe3400", "takenClasses");

	gClasses+=(" ");
}

storeTakenSEClassesButton.onclick = function() {
	displayElectives();

	breadcrumb3.onclick = function() {
		displayTakenClasses();
	}

	saveCheckboxClass("se1400", "takenClasses");
	saveCheckboxClass("se2450", "takenClasses");
	saveCheckboxClass("se3010", "takenClasses");
	saveCheckboxClass("se3020", "takenClasses");
	saveCheckboxClass("se3100", "takenClasses");
	saveCheckboxClass("se3150", "takenClasses");
	saveCheckboxClass("se3200", "takenClasses");
	saveCheckboxClass("se3400", "takenClasses");
	saveCheckboxClass("se3450", "takenClasses");
	saveCheckboxClass("se3500", "takenClasses");
	saveCheckboxClass("se3550", "takenClasses");
	saveCheckboxClass("se3600", "takenClasses");
	saveCheckboxClass("se4200", "takenClasses");
	saveCheckboxClass("se4600", "takenClasses");
	saveCheckboxClass("se4900", "takenClasses");
	saveCheckboxClass("seCS1400", "takenClasses");
	saveCheckboxClass("seCS1410", "takenClasses");
	saveCheckboxClass("seCS2420", "takenClasses");
	saveCheckboxClass("seCS2810", "takenClasses");
	saveCheckboxClass("seCS3005", "takenClasses");
	saveCheckboxClass("seCS3150", "takenClasses");
	saveCheckboxClass("seCS3310", "takenClasses");
	saveCheckboxClass("seCS3510", "takenClasses");
	saveCheckboxClass("seCS4300", "takenClasses");
	saveCheckboxClass("seCS4307", "takenClasses");
	saveCheckboxClass("seCS4320", "takenClasses");
	saveCheckboxClass("seMA1210", "takenClasses");
	saveCheckboxClass("seMA2050", "takenClasses");
	saveCheckboxClass("seIT1100", "takenClasses");
	saveCheckboxClass("seIT3110", "takenClasses");
	saveCheckboxClass("seIT3300", "takenClasses");
	saveCheckboxClass("seIT4070", "takenClasses");
	saveCheckboxClass("seIT4200", "takenClasses");
	saveCheckboxClass("seEG2100", "takenClasses");
	saveCheckboxClass("seMKTG", "takenClasses");

	gClasses+=(" ");
}

storeTakenMAClassesButton.onclick = function() {
	displayElectives();

	breadcrumb3.onclick = function() {
		displayTakenClasses();
	}

	saveCheckboxClass("mCS1400", "takenClasses");
	saveCheckboxClass("m1210", "takenClasses");
	saveCheckboxClass("m1220", "takenClasses");
	saveCheckboxClass("mPH2210", "takenClasses");
	saveCheckboxClass("mPH2215", "takenClasses");
	saveCheckboxClass("m2200", "takenClasses");
	saveCheckboxClass("m2210", "takenClasses");
	saveCheckboxClass("m2250", "takenClasses");
	saveCheckboxClass("m2270", "takenClasses");
	saveCheckboxClass("m2280", "takenClasses");
	saveCheckboxClass("m2285", "takenClasses");
	saveCheckboxClass("m2600", "takenClasses");
	saveCheckboxClass("m2905", "takenClasses");
	saveCheckboxClass("m3000", "takenClasses");
	saveCheckboxClass("m3050", "takenClasses");
	saveCheckboxClass("m3060", "takenClasses");
	saveCheckboxClass("m3100", "takenClasses");
	saveCheckboxClass("m3150", "takenClasses");
	saveCheckboxClass("m3200", "takenClasses");
	saveCheckboxClass("m3210", "takenClasses");
	saveCheckboxClass("m3400", "takenClasses");
	saveCheckboxClass("m3450", "takenClasses");
	saveCheckboxClass("m3500", "takenClasses");
	saveCheckboxClass("m3600", "takenClasses");
	saveCheckboxClass("m3700", "takenClasses");
	saveCheckboxClass("m3900", "takenClasses");
	saveCheckboxClass("m3905", "takenClasses");
	saveCheckboxClass("m4000", "takenClasses");
	saveCheckboxClass("m4005", "takenClasses");
	saveCheckboxClass("m4010", "takenClasses");
	saveCheckboxClass("m4100", "takenClasses");
	saveCheckboxClass("m4200", "takenClasses");
	saveCheckboxClass("m4250", "takenClasses");
	saveCheckboxClass("m4330", "takenClasses");
	saveCheckboxClass("m4550", "takenClasses");
	saveCheckboxClass("m4800", "takenClasses");
	saveCheckboxClass("m4900", "takenClasses");

	gClasses+=(" ");
}

storeTakenITClassesButton.onclick = function() {
	displayElectives();

	breadcrumb3.onclick = function() {
		displayTakenClasses();
	}

	saveCheckboxClass("it1100", "takenClasses");
	saveCheckboxClass("it1200", "takenClasses");
	saveCheckboxClass("it2300", "takenClasses");
	saveCheckboxClass("it2400", "takenClasses");
	saveCheckboxClass("it2500", "takenClasses");
	saveCheckboxClass("it2700", "takenClasses");
	saveCheckboxClass("it3100", "takenClasses");
	saveCheckboxClass("it3110", "takenClasses");
	saveCheckboxClass("it3150", "takenClasses");
	saveCheckboxClass("it3300", "takenClasses");
	saveCheckboxClass("it3400", "takenClasses");
	saveCheckboxClass("it4060", "takenClasses");
	saveCheckboxClass("it4070", "takenClasses");
	saveCheckboxClass("it4100", "takenClasses");
	saveCheckboxClass("it4200", "takenClasses");
	saveCheckboxClass("it4310", "takenClasses");
	saveCheckboxClass("it4400", "takenClasses");
	saveCheckboxClass("it4510", "takenClasses");
	saveCheckboxClass("it4600", "takenClasses");
	saveCheckboxClass("it4920", "takenClasses");
	saveCheckboxClass("it4990", "takenClasses");
	saveCheckboxClass("itcs1400", "takenClasses");
	saveCheckboxClass("itcs1410", "takenClasses");
	saveCheckboxClass("itcs3005", "takenClasses");
	saveCheckboxClass("itse3200", "takenClasses");
	saveCheckboxClass("itse3400", "takenClasses");
	saveCheckboxClass("itse4200", "takenClasses");
	saveCheckboxClass("itis2050", "takenClasses");
	saveCheckboxClass("iten3010", "takenClasses");
	saveCheckboxClass("itma1040", "takenClasses");
	saveCheckboxClass("itma1050", "takenClasses");

	gClasses+=(" ");
}

//Store Electives

storeCSElectivesButton.onclick = function() {
	displaySchedules();

	breadcrumb4.onclick = function() {
		displayElectives();
	}

	saveCheckboxClass("cs3200e", "electives");
	saveCheckboxClass("cs3400e", "electives");
	saveCheckboxClass("cs3410e", "electives");
	saveCheckboxClass("cs3520e", "electives");
	saveCheckboxClass("cs3600e", "electives");
	saveCheckboxClass("cs4300e", "electives");
	saveCheckboxClass("cs4307e", "electives");
	saveCheckboxClass("cs4320e", "electives");
	saveCheckboxClass("cs4550e", "electives");
	saveCheckboxClass("csma3400e", "electives");
	saveCheckboxClass("csma2270e", "electives");
	saveCheckboxClass("csma2210e", "electives");
	saveCheckboxClass("csma2280e", "electives");
	saveCheckboxClass("csma2250e", "electives");
	saveCheckboxClass("cs3010e2", "electives");
	saveCheckboxClass("cs3020e2", "electives");
	saveCheckboxClass("cs3150e2", "electives");
	saveCheckboxClass("cs3200e2", "electives");
	saveCheckboxClass("cs3400e2", "electives");
	saveCheckboxClass("cs3410e2", "electives");
	saveCheckboxClass("cs3440e2", "electives");
	saveCheckboxClass("cs3500e2", "electives");
	saveCheckboxClass("cs3520e2", "electives");
	saveCheckboxClass("cs3600e2", "electives");
	saveCheckboxClass("cs4200e2", "electives");
	saveCheckboxClass("cs4300e2", "electives");
	saveCheckboxClass("cs4307e2", "electives");
	saveCheckboxClass("cs4320e2", "electives");
	saveCheckboxClass("cs4550e2", "electives");
	saveCheckboxClass("cs4920e2", "electives");
	saveCheckboxClass("cs4990e2", "electives");
	saveCheckboxClass("cs4991e2", "electives");
	saveCheckboxClass("csit2700e2", "electives");
	saveCheckboxClass("csit3100e2", "electives");
	saveCheckboxClass("csit3110e2", "electives");
	saveCheckboxClass("csit4200e2", "electives");
	saveCheckboxClass("csse1400e2", "electives");
	saveCheckboxClass("csse3400e2", "electives");

	gElectives+=(" ");

	completeFetch();
}

storeSEElectivesButton.onclick = function() {
	displaySchedules();

	breadcrumb4.onclick = function() {
		displayElectives();
	}

	saveCheckboxClass("ent", "electives");
	saveCheckboxClass("devops", "electives");
	saveCheckboxClass("app", "electives");
	saveCheckboxClass("data", "electives");

	gElectives+=(" ");

	completeFetch();
}

storeMAElectivesButton.onclick = function() {
	displaySchedules();

	breadcrumb4.onclick = function() {
		displayElectives();
	}

	saveCheckboxClass("m2600e", "electives");
	saveCheckboxClass("m3000e", "electives");
	saveCheckboxClass("m3100e", "electives");
	saveCheckboxClass("m3210e", "electives");
	saveCheckboxClass("m3450e", "electives");
	saveCheckboxClass("m3500e", "electives");
	saveCheckboxClass("m3700e", "electives");
	saveCheckboxClass("m4010e", "electives");
	saveCheckboxClass("m4100e", "electives");
	saveCheckboxClass("m4200e", "electives");
	saveCheckboxClass("m4250e", "electives");
	saveCheckboxClass("m4550e", "electives");
	saveCheckboxClass("m4800e", "electives");
	saveCheckboxClass("m4890e", "electives");

	gElectives+=(" ");

	completeFetch();
}

storeITElectivesButton.onclick = function() {
	displaySchedules();

	breadcrumb4.onclick = function() {
		displayElectives();
	}

	saveCheckboxClass("it3110e", "electives");
	saveCheckboxClass("it3300e", "electives");
	saveCheckboxClass("it4100e", "electives");
	saveCheckboxClass("it4200e", "electives");
	saveCheckboxClass("it4310e", "electives");
	saveCheckboxClass("it4400e", "electives");
	saveCheckboxClass("it4510e", "electives");
	saveCheckboxClass("it4920e", "electives");
	saveCheckboxClass("it4990e", "electives");
	saveCheckboxClass("itma1040e", "electives");
	saveCheckboxClass("itma1050e", "electives");
	saveCheckboxClass("itcs3005e2", "electives");
	saveCheckboxClass("itis2050e2", "electives");
	saveCheckboxClass("it4060e2", "electives");
	saveCheckboxClass("it4070e2", "electives");
	saveCheckboxClass("itse3200e2", "electives");
	saveCheckboxClass("itse3400e2", "electives");
	saveCheckboxClass("itse4200e2", "electives");

	gElectives+=(" ");

	completeFetch();
}


//Save Checkbox Data to a String

function saveCheckboxTF(id) {
	var classTF = document.getElementById(id);
	if (classTF.checked) {
		gGenEds+=("TRUE|");
	} else {
		gGenEds+=("FALSE|");
	}
}

function saveCheckboxClass(id, dataName) {
	var classID = document.getElementById(id);
	if(dataName == "takenClasses") {
		if (classID.checked) {
			console.log(classID.value);
			gClasses+=(classID.value + "|");
		}
	} else if(dataName == "electives") {
		if (classID.checked) {
			console.log(classID.value);
			gElectives+=(classID.value + "|");
		}
	} else if(dataName == "genMA") {
		if (classID.checked) {
			console.log(classID.value);
			gGenEds+=(classID.value + "|");
		}
	}
}

//Display Different "Pages"

function displayMajor() {
	body1.style.display = "block";
	body1Generals.style.display = "none";
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
	breadcrumb4.style.display = "none";
	breadcrumbSeparater.style.display = "none";
	breadcrumbSeparater2.style.display = "none";
	breadcrumbSeparater3.style.display = "none";
}

function displayGenEds()  {
	body1.style.display = "none";
	body1Generals.style.display = "block";
	body2CS.style.display = "none";
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
}

function displayTakenClasses() {
	if (gMajor == "cs ") {
		body1.style.display = "none";
		body2CS.style.display = "block";
		body2SE.style.display = "none";
		body1Generals.style.display = "none";
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
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "se ") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "block";
		body1Generals.style.display = "none";
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
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "ma ") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body1Generals.style.display = "none";
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
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "it ") {
		body1.style.display = "none";
		body2CS.style.display = "none";
		body2SE.style.display = "none";
		body1Generals.style.display = "none";
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
		breadcrumb2.style.display = "block";
		breadcrumb3.style.display = "none";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "none";
		breadcrumbSeparater3.style.display = "none";
	}
}

function displayElectives() {
	if (gMajor == "cs ") {
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
		breadcrumb3.style.display = "block";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "se ") {
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
		breadcrumb3.style.display = "block";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "ma ") {
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
		breadcrumb3.style.display = "block";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "none";
	} else if (gMajor == "it ") {
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
		breadcrumb3.style.display = "block";
		breadcrumb4.style.display = "none";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "none";
	}
}

function displaySchedules() {
	if (gMajor == "cs ") {
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
		breadcrumb4.style.display = "block";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "block";
	} else if (gMajor == "se ") {
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
		breadcrumb4.style.display = "block";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "block";
	} else if (gMajor == "ma ") {
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
		breadcrumb4.style.display = "block";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "block";
	} else if (gMajor == "it ") {
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
		breadcrumb4.style.display = "block";
		breadcrumbSeparater.style.display = "block";
		breadcrumbSeparater2.style.display = "block";
		breadcrumbSeparater3.style.display = "block";
	}
}

//Complete The Fetch Request

function completeFetch() {
	gFetchString = gMajor + gGradDate + gGenEds + gClasses + gElectives;

	console.log(gFetchString);

	fetch("http://localhost:8080/grad", {
			method: "POST",
			body: gFetchString,
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

			let schedule1Start = JSON.parse(JSON.stringify(schedule1Main));

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

				let schedule1 = JSON.parse(JSON.stringify(schedule1Main));

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

				let schedule2 = JSON.parse(JSON.stringify(schedule2Main));

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

				let schedule3 = JSON.parse(JSON.stringify(schedule3Main));

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