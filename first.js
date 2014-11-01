//0 for lb 1 for kg
var lbkg = ["lb", "kg"];
//[male/female][lb/kg]
var allWeightClasses = [[[114,123,132,148,165,181,198,220,242,275,319,"320+"], [52,56,60,67,75,82,90,100,110,125,145,"146+"]],[[97,105,114,123,132,148,165,181,198,"199+"],[44,48,52,56,60,67,75,82,90,"91+"]]];
var globalPlates = [[45,35,25,10,5,2.5] ,[20,15,10,5,2.5,1]];
//[lb/kg][bar weight, max weight, lightest plate]
var slider = [[45,500,5],[20,250,2.5]];
//tag
var eName = ["Squat", "Bench", "Deadlift", "OHP", "Row", "PC"];
//writing to html
var exercises = ["Squat", "Bench Press", "Deadlift", "Overhead Press", "Pendlay Row", "Power Clean"];
var standard = ["Untrained", "Novice", "Intermediate", "Advanced", "Elite"];
//[WorkoutA/B/Other][Exercises]
var defaultWorkout = [[0,1,2],[5],[0,3,4]];
//[% of max rep/#of reps/#of sets]
var defaultWarmup = [[0,40,60,80,100],[5,5,3,2,5],[2,1,1,1,3]];
//[gender][lb/kg][weight class][which strength standard]
var OHPStandards = [[[[55,75,90,110,130],[60,80,100,115,140],[65,85,105,125,150],[70,95,120,140,170],[75,100,130,155,190],[80,110,140,165,220], [85,115,145,175,235],[90,120,155,185,255],[95,125,160,190,265],[95,130,165,195,275],[100,135,170,200,280],[100,140,175,205,285]],[[22.5,32.5,40.0,50.0,60.0],[25.0,35.0,45.0,52.5,65.0],[27.5,37.5,47.5,57.5,70.0],[30.0,42.5,55.0,62.5,77.5],[32.5,45.0,57.5,70.0,85.0],[35.0,50.0,62.5,75.0,100.0],[37.5,52.5,65.0,77.5,105.0],[40.0,55.0,70.0,82.5,115.0],[42.5,57.5,72.5,85.0,120.0],[42.5,60.0,75.0,87.5,122.5],[45.0,60.0,75.0,90.0,125.0],[45.0,62.5,77.5,92.5,130.0]]],[[[30,40,50,65,85],[35,45,55,70,90],[35,50,60,75,100],[40,50,60,80,105],[40,55,65,85,110],[45,60,70,95,120],[50,65,75,105,135],[50,70,80,110,140],[55,75,85,115,150],[60,80,95,125,160]],[[15.0,17.5,22.5,30.0,40.0],[15.0,20.0,25.0,32.5,42.5],[17.5,22.5,27.5,35.0,45.0],[17.5,22.5,27.5,37.5,47.5],[17.5,25.0,30.0,40.0,50.0],[20.0,27.5,32.5,42.5,55.0],[22.5,30.0,35.0,47.5,62.5],[22.5,32.5,37.5,50.0,65.0],[25.0,35.0,40.0,52.5,67.5],[27.5,37.5,42.5,57.5,72.5]]]];
var SquatStandards = [[[[80,145,175,240,320],[85,155,190,260,345],[90,170,205,280,370], [100,190,230,315,410],[110,205,250,340,445],[120,220,270,370,480],[125,230,285,390,505], [130,245,300,410,530],[135,255,310,425,550],[140,260,320,435,570],[145,270,325,445,580], [150,275,330,455,595]],[[35.0,65.0,80.0,107.5,145.0],[37.5,70.0,87.5,117.5,157.5],[40.0,77.5,92.5,127.5,167.5],[45.0,85.0,105.0,142.5,185.0],[50.0,92.5,112.5,155.0,202.5],[55.0,100.0,122.5,167.5,217.5],[57.5,105.0,130.0,177.5,230.0],[60.0,110.0,135.0,185.0,240.0],[62.5,115.0,140.0,192.5,250.0],[65.0,117.5,145.0,197.5,257.5],[67.5,122.5,147.5,202.5,262.5],[70.0,125.0,150.0,207.5,270.0]]],[[[45,85,100,130,165],[50,90,105,140,175],[55,100,115,150,190],[55,105,120,160,200],[60,110,130,170,210],[65,120,140,185,230],[70,130,150,200,255],[75,140,165,215,270],[80,150,175,230,290],[85,160,185,240,305]],[[20.0,37.5,45.0,60.0,75.0],[22.5,40.0,47.5,65.0,80.0],[25.0,45.0,53.5,67.5,87.5],[25.0,47.5,55.0,72.5,90.0],[27.5,50.0,60.0,77.5,95.0],[30.0,55.0,62.5,85.0,105.0],[32.5,57.5,67.5,90.0,115.0],[35.0,62.5,75.0,97.5,122.5],[37.5,67.5,80.0,105.0,132.5],[40.0,72.5,85.0,110.0,137.5]]]];
var DeadliftStandards = [[[[95,180,205,300,385],[105,195,220,320,415],[115,210,240,340,440],[125,235,270,380,480],[135,255,295,410,520],[150,275,315,440,550], [155,290,335,460,565],[165,305,350,480,585],[170,320,365,490,595],[175,325,375,500,600], [180,335,380,505,610], [185,340,390,510,615]],[[42.5,82.5,92.5,135.0,175.0],[47.5,87.5,100.0,145.0,187.5],[50.0,95.0,110.0,155.0,200.0],[57.5,107.5,122.5,172.5,217.5],[62.5,115.0,135.0,185.0,235.0 ],[67.5,125.0,142.5,200.0,250.0],[70.0,132.5,152.5,207.5,257.5],[75.0,137.5,160.0,217.5,265.0],[77.5,145.0,165.0,222.5,270.0],[80.0,147.5,170.0,227.5,272.5],[82.5,152.5,172.5,230.0,277.5],[85.0,155.0,177.5,232.5,280.0]]],
[[[55,105,120,175,230,],[60,115,130,190,240],[65,120,140,200,255],[70,130,150,210,265],[75,135,160,220,275],[80,150,175,240,295],[90,160,190,260,320],[95,175,205,275,330],[100,185,215,285,350],[110,195,230,300,365]],[[25.0,47.5,50.0,80.0,105.0],[27.5,52.5,60.0,85.0,110.0],[30.0,55.0,62.5,90.0,115.0],[32.5,60.0,67.5,95.0,120.0],[35.0,62.5,72.5,100.0,125.0],[37.5,67.5,80.0,110.0,135.0],[40.0,72.5,85.0,117.5,145.0],[42.5,80.0,92.5,125.0,150.0],[45.0,87.5,97.5,130.0,1.0],[50.0,90.0,105.0,137.5,165.0]]]];
var BenchStandards=[[[[85,110,130,180,220], [90,115,140,195,240],[100,125,155,210,260],[110,140,170,235,290],[120,150,185,255,320],[130,165,200,275,345],[135,175,215,290,360],[140,185,225,305,380],[145,190,230,315,395],[150,195,240,325,405], [155,200,245,335,415],[160,205,250,340,425]],[[37.5,50.0,60.0,82.5,100.0],[40.0,52.5,62.5,90.0,110.0],[45.0,57.5,70.0,95.0,117.5],[50.0,65.0,77.5,107.5,132.5],[55.0,70.0,85.0,115.0,145.0],[60.0,75.0,90.0,125.0,157.5],[62.5,80.0,97.5,132.5,162.5],[62.5,82.5,102.5,137.5,172.5],[65.0,85.0,105.0,142.5,180.0],[67.5,87.5,107.5,147.5,185.0],[70.0,90.0,112.5,152.5,190.0],[72.5,92.5,115.0,155.0,192.5]]],[[[50,65,75,95,115],[55,70,80,100,125],[60,75,85,110,135],[65,80,90,115,140],[70,85,95,125,150],[75,90,115,135,165],[80,95,115,145,185],[85,110,120,160,195],[90,115,130,165,205],[95,120,140,175,220]],[[22.5,30.0,35.0,42.5,52.5],[25.0,32.5,37.5,45.0,57.5],[27.5,35.0,37.5,50.0,62.5],[30.0,37.5,40.0,52.5,65.0],[32.5,40.0,42.5,57.5,67.5],[35.0,40.0,47.5,62.5,75.0],[37.5,42.5,52.5,65.0,85.0],[37.5,50.0,55.0,72.5,90.0],[40.0,52.5,60.0,75.0,95.0],[42.5,55.0,62.5,80.0,100.0]]]];
 //no row standards, using bench
var RowStandards =[[[[85,110,130,180,220], [90,115,140,195,240],[100,125,155,210,260],[110,140,170,235,290],[120,150,185,255,320],[130,165,200,275,345],[135,175,215,290,360],[140,185,225,305,380],[145,190,230,315,395],[150,195,240,325,405], [155,200,245,335,415],[160,205,250,340,425]],[[37.5,50.0,60.0,82.5,100.0],[40.0,52.5,62.5,90.0,110.0],[45.0,57.5,70.0,95.0,117.5],[50.0,65.0,77.5,107.5,132.5],[55.0,70.0,85.0,115.0,145.0],[60.0,75.0,90.0,125.0,157.5],[62.5,80.0,97.5,132.5,162.5],[62.5,82.5,102.5,137.5,172.5],[65.0,85.0,105.0,142.5,180.0],[67.5,87.5,107.5,147.5,185.0],[70.0,90.0,112.5,152.5,190.0],[72.5,92.5,115.0,155.0,192.5]]],[[[50,65,75,95,115],[55,70,80,100,125],[60,75,85,110,135],[65,80,90,115,140],[70,85,95,125,150],[75,90,115,135,165],[80,95,115,145,185],[85,110,120,160,195],[90,115,130,165,205],[95,120,140,175,220]],[[22.5,30.0,35.0,42.5,52.5],[25.0,32.5,37.5,45.0,57.5],[27.5,35.0,37.5,50.0,62.5],[30.0,37.5,40.0,52.5,65.0],[32.5,40.0,42.5,57.5,67.5],[35.0,40.0,47.5,62.5,75.0],[37.5,42.5,52.5,65.0,85.0],[37.5,50.0,55.0,72.5,90.0],[40.0,52.5,60.0,75.0,95.0],[42.5,55.0,62.5,80.0,100.0]]]];
var PowerCleanStandards= [[[[55,105,125,175,205],[60,110,135,185,225],[65,120,150,200,240],[75,135,165,225,265],[80,145,180,245,290],[85,160,195,265,310],[90,165,205,280,325],[95,175,215,295,345],[100,185,225,305,355],[105,190,230,315,365],[110,195,235,320,375],[115,200,240,330,385]],[[25.0,47.5,57.5,80.0,92.5],[27.5,50.0,62.5,85.0,102.5],[30.0,55.0,67.5,90.0,110.0],[35.0,60.0,75.0,102.5,120.0],[37.5,65.0,82.5,112.5,132.5],[37.5,72.5,87.5,120.0,140.0],[40.0,75.0,92.5,127.5,147.5],[42.5,80.0,97.5,135.0,155.0],[45.0,82.5,102.5,140.0,160.0],[47.5,85.0,105.0,142.5,165.0],[50.0,87.5,107.5,145.0,170.0],[52.5,90.0,110.0,150.0,175.0]]],[[[30,60,70,95,115],[35,65,75,100,125],[40,70,80,110,135],[40,75,85,115,145],[45,80,90,120,150],[50,90,100,135,165],[50,95,110,145,185],[55,100,120,155,195],[60,110,125,165,205],[65,115,135,175,220]],[[12.5,27.5,32.5,42.5,52.5],[15.0,30.0,35.0,45.0,57.5],[17.5,32.5,35.0,50.0,60.0],[17.5,35.0,37.5,52.5,65.0],[20.0,37.5,40.0,55.0,67.5],[22.5,40.0,45.0,60.0,75.0],[22.5,42.5,50.0,65.0,85.0],[25.0,45.0,55.0,70.0,90.0],[27.5,50.0,57.5,75.0,95.0],[30.0,52.5,62.5,80.0,100.0]]]];

$(function() {
    $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable",
      delay: 300
    }).disableSelection();  
     $( "#sortable1 div, #sortable2 div, #sortable3 div" ).disableSelection();
});

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
	Calculates and displays each warmup set and one rep max as well as globalPlates to add, for given exericse and working weight.
	Saves working weight by storing as a cookie.

	[[0,40,60,80,100],[5,5,3,2,5],[2,1,1,1,3]]
	warmupData[0] = % of working weight array
	warmupData[1] = # of reps array
	warmupData[2] = # of sets array
*/
function calculateWarmups(exerciseName, workingWeight){
	var barWeight = globalPlates[getCookie('lbkg')][0];
	$('.bar').html(barWeight+"x5x2 (Bar)");
	var allSets = [];
	var oneRepMax;
	var warmupData = getCookie('warmups');
	if (warmupData == ""){
		setCookie('warmups', JSON.stringify(defaultWarmup) ,30);
	}

	var warmupData = $.parseJSON(getCookie('warmups'));

	for (j=0; j<warmupData[0].length; j++) {
		//if currentSetWeight is less than bar, set it to bar 
		var currentSetWeight = (warmupData[0][j]/100).toFixed(2) * workingWeight; 
		if (currentSetWeight < barWeight) {
			currentSetWeight = barWeight;
		}
		//get number close to what can be added with 2 lowest plates
		var lowestPlate = globalPlates[getCookie('lbkg')][globalPlates[0].length-1];
		currentSetWeight = Math.floor(currentSetWeight/(2*lowestPlate)) * (2*lowestPlate);

		//create current set string in format "WEIGHTxREPSxSETS (PLATES_TO_ADD)"  sets is only added if > 1.  
		allSets[j] = currentSetWeight;
		allSets[j] += "x"+warmupData[1][j];	
		if (warmupData[2][j] > 1) {
			allSets[j] += "x"+warmupData[2][j];
		}
		allSets[j] += " " + numToPlate(currentSetWeight);
		
		//display on page
		if (j == 0) {
			$('.bar').html(allSets[j]);
		}
		if (j > 0){
			$('.'+exerciseName+'warmup'+[j]).html(allSets[j]);
		}
	}//end for

	setCookie(exerciseName, workingWeight, 30);
	oneRepMax = getOneRepMax(workingWeight);
	$('.'+exerciseName+'max').html("Your 1 Rep Max is " + oneRepMax + " " + numToPlate(oneRepMax));
	$('#'+exerciseName+'Standard').html("You are in the category " + standard[getUserStrengthStandard(exerciseName, getWeightClass(getCookie('bodyweight')), oneRepMax)]);
}

function getOneRepMax(workingWeight) {
	return Math.round(workingWeight / (1.0278 - (.0278 * 5)));
}

/*
	Sets the plateArray based on what plates user has so numToPlates calculates with the plates the user has available.
	Saves this data as a cookie.
*/
function setPlates() {
	var plateArray = [];
	var count = 0;
	$('#plates input:checked').each(function () {
		var plateID = $(this).attr('id')
		var plateArrayIndex = plateID.length-1
		if (globalPlates[getCookie('lbkg')][parseFloat(plateID[plateArrayIndex])] != null) {
			plateArray[count] = globalPlates[getCookie('lbkg')][parseFloat(plateID[plateArrayIndex])];
		}
		else {
			plateArray[count] = parseFloat($('label[for="plate'+(parseFloat(plateID[plateArrayIndex]))+'"]').text());
		}
		count += 1;
	});
	plateArray.sort(function (a,b){return b-a});
	setCookie('toggledPlates', JSON.stringify(plateArray), 30);
}

/*
	Remove extra plates set by user
*/
function removePlates() {
	for (i=6; i<$('#plates input').length+1; i++) {
		var plateWeight = parseFloat($('label[for="plate'+i+'"]').text());
		if (!isNaN(plateWeight)) {
			$('#plate'+i+'').remove();
			$('label[for="plate'+i+'"]').remove();
			var toggledPlates = $.parseJSON(getCookie('toggledPlates'));
			var allPlates = $.parseJSON(getCookie('allPlates'));
			console.log(array,array2)
			var ind = toggledPlates.indexOf(plateWeight);
			var ind2 = allPlates.indexOf(plateWeight);
			toggledPlates.splice(ind, 1);
			allPlates.splice(ind2, 1);
			setCookie('toggledPlates', JSON.stringify(toggledPlates), 30);
			setCookie('allPlates', JSON.stringify(allPlates), 30);
		}
	}
}

/*
	Create the strength standards table for an exercise.
*/
function calculateStrengthStandards(exerciseName){
	$('.tab .tableHead:even').html(lbkg[getCookie('lbkg')]);
	$('#'+exerciseName+'Tab .tableHead:eq(1)').html($('#'+exerciseName).children("h1").text());
	if ([getCookie('gender')] == 0) {
		var rows = 13;
	}
	if ([getCookie('gender')] == 1) {
		var rows = 11;
	}
	var columns = 6;
	for (i=0; i<rows-1; i++) {
		$('#'+exerciseName+'Tab tr:eq('+(i+2)+') td:eq(0)').html(allWeightClasses[getCookie('gender')][getCookie('lbkg')][i]);
		$('#'+exerciseName+'Tab tr:eq('+(i+2)+') td:eq(0)').css("width","20%");
		for (j=0;j<columns-1; j++) {
			$('#'+exerciseName+'Tab tr:eq('+(i+2)+') td:eq('+(j+1)+')').html(getStrengthStandardsFor(exerciseName)[getCookie('gender')][getCookie('lbkg')][i][j]);
			$('#'+exerciseName+'Tab tr:eq('+(i+2)+') td:eq('+(j+1)+')').css("width","16%");
		}
	}
	$('.tab td').addClass("auto-style1");
}

/* 
	Calculates the plates to add to each side of the bar for a given weight.
	outPlates is an array that holds number of plates to add for a plate.
	eg. allPlates = [45,35,25] outPlates = [4,NaN,1]
	Add 4x45 and 1x25 to bar.
*/
function numToPlate(weightToCalculate) {
	var availablePlates = $.parseJSON(getCookie('toggledPlates'));
	var outPlates = [];
	var barWeight = globalPlates[getCookie('lbkg')][0];
	for (i=0; i<availablePlates.length; i++) {
		outPlates[i] = NaN;
	}
	var outputString = "(";

	//If the weight is less than bar+(2*lowestPlate), output Bar
	if (weightToCalculate < barWeight + 2*availablePlates[availablePlates.length-1]) {
		outputString += "Bar";
	}
	//else calculate how mmuch of each plate to add
	else {
		weightToCalculate = (weightToCalculate-barWeight) / 2;
		for (i=0; i<outPlates.length; i++) {
			if (weightToCalculate / availablePlates[i] >= 1) {
				outPlates[i] = Math.floor(weightToCalculate/availablePlates[i]);
				weightToCalculate = weightToCalculate - (outPlates[i] * availablePlates[i]);
			}
		}
		for (i=0; i<availablePlates.length; i++) {
			if (!isNaN(outPlates[i])) {
				outputString += String(availablePlates[i]) + "x" + String(outPlates[i]) + " ";
			}
		}
		if (outputString.length > 1) {
				outputString = outputString.substring(0,outputString.length-1);	
		}
	}
	outputString += ")";
	return outputString;
}
/*
	Calculate the weight class of user based on gender, lbkg system, and user weight.
*/
function getWeightClass(userWeight) {
	var userWeightClass;
	for (i=0; i<allWeightClasses[getCookie('gender')][getCookie('lbkg')].length; i++) {
		//if weight class is > weight, set to one
		if (parseInt(allWeightClasses[getCookie('gender')][getCookie('lbkg')][i]) > userWeight) {
			if (i==0) {
				userWeightClass=0;
			}
			else {
				userWeightClass = i-1;	
			}
			break;
		}
		else {
			userWeightClass = i;
		}
	}
	return userWeightClass;
}
/*
	Returns the strength standard array for given exercise.
*/
function getStrengthStandardsFor(exercise) {
	switch (exercise) {
		case "OHP":
			return OHPStandards;
		case "Squat":
			return SquatStandards;
		case "Deadlift":
			return DeadliftStandards;
		case "Bench":
			return BenchStandards;
		case "Row":
			return RowStandards;
		case "PC":
			return PowerCleanStandards;
	}
}
/*
	Returns user's strength standard based on exercise, user's weightClass and oneRepMax
*/
function getUserStrengthStandard(exercise, weightClass, oneRepMax) {
	workout = getStrengthStandardsFor(exercise);
	var userStrengthStandard;
	for (i=0; i<workout[getCookie('gender')][getCookie('lbkg')][weightClass].length; i++) {
		if (workout[getCookie('gender')][getCookie('lbkg')][weightClass][i] > oneRepMax){
			if (i==0){
				userStrengthStandard = 0;
			}
			else {
			userStrengthStandard = i-1;
		}
			break
		}
		else {
			userStrengthStandard = i;
		}
	}
	return userStrengthStandard;
}
/*
	Removes class so new classes and css can be applied.
*/
function removeTableClasses(){
	$('tr').removeClass('weightclass');
	$('td .work').removeClass('work');
}
/*
	Called on slide change.  Adds class to table elements so that css is applied.
*/
function updateStandard(exerciseName) {
	$('#'+exerciseName+'Tab tr:eq('+(getWeightClass(getCookie('bodyweight'))+2)+')').addClass('weightclass');
	$('#'+exerciseName+'Tab tr:eq('+(getWeightClass(getCookie('bodyweight'))+2)+') td:eq('+(getUserStrengthStandard(exerciseName, (getWeightClass(getCookie('bodyweight'))) , getOneRepMax(getCookie(exerciseName)) )+1)+')').addClass('work');
}
/*
	Adds a new plate to be used in numToPlate.
*/
function addPlate() {
	var newPlate = window.prompt("Enter weight", "55");
	newPlate = parseFloat(newPlate);
	var newArray2 = $.parseJSON(getCookie('allPlates'));
    if (newArray2.indexOf(newPlate) == -1 && !isNaN(newPlate)) {
	   	var num = $('#plates input').length;
		$el = $('<input type="checkbox" id="plate'+num+'" checked="checked"><label class="plate" for="plate'+num+'">'+newPlate+'</label>');
	    $("#plates").controlgroup("container")["append"]($el);
	    $("#plates").trigger('create').controlgroup("refresh");
	    var newArray = $.parseJSON(getCookie('toggledPlates'));
	    newArray.push(newPlate);
	    setCookie('toggledPlates', JSON.stringify (newArray) , 30);
	    newArray2.push(newPlate);
	    setCookie('allPlates', JSON.stringify (newArray2) , 30);
	}
	else if (isNaN(newPlate)) {
		window.alert("Cannot add an empty plate");
	}
	else {
		window.alert("This plate has already been added");
	}
}

/* 
	Set default values on first visit
*/
function setDefaultCookies() {
	setCookie('lbkg',0,30);
	setCookie('workout', JSON.stringify(defaultWorkout),30);
	setCookie('warmups', JSON.stringify(defaultWarmup), 30);
	setCookie('first', false, 30);
	setCookie('gender',0,30);
	setCookie('toggledPlates', JSON.stringify(globalPlates[0]), 30);
	setCookie('allPlates', JSON.stringify(globalPlates[0]), 30);
}

function setUpValues(weightSystem, gender, bodyweight, warmups, allPlates, workout) {
	if (warmups != ""){
		warmups = $.parseJSON(warmups);
		for (t=0; t<5; t++) {
			 $('#warm'+t+'').val(warmups[0][t]);
			 $('#warmrep'+t+'').val(warmups[1][t]);
			 $('#warmset'+t+'').val(warmups[2][t]);
		}
	}
	if (bodyweight != "" && bodyweight != 0) {
		$('#bodyweight').attr('placeholder', "Your weight is "+ bodyweight+lbkg[getCookie('lbkg')]);
	}
	if (bodyweight == "" || bodyweight == 0) {
		$('#bodyweight').attr('placeholder', "Enter Weight");
	}
	if (weightSystem == "1") {
		$('#radio-choice-h-2b').prop('checked',"checked");
		$('#radio-choice-h-2a').prop('checked',"");	
	}
	if (weightSystem == "0") {
		$('#radio-choice-h-2b').prop('checked',"");
		$('#radio-choice-h-2a').prop('checked',"checked");		
	}
	if (gender == "1") {
		$('#genderb').prop('checked',"checked");
		$('#gendera').prop('checked',"");	
	}
	if (gender == "0") {
		$('#genderb').prop('checked',"");
		$('#gendera').prop('checked',"checked");		
	}

	$("#plates").controlgroup();
	for (i=0; i<allPlates.length; i++) {
		$el = $('<input type="checkbox" id="plate'+i+'" checked="checked"><label class="plate" for="plate'+i+'">'+allPlates[i]+'</label>');
	    $("#plates").controlgroup("container")["append"]($el);
    	$("#plates").trigger('create').controlgroup("refresh");
	}

	$('#plates input').each(function () {
		var currentRadio = $(this).attr('id');
		// if plate is not in plates cookie, uncheck it
		if ( $.inArray( parseFloat ( $('label[for='+currentRadio+']').text() ) , $.parseJSON(getCookie('toggledPlates')) ) == -1 ) {
			$(this).prop('checked','');
		}
	});

	//creates the workout page
	var output1 = 'Workout A';
	for (i=0; i<$.parseJSON(workout)[0].length; i++) {
		output1 += '<div data-role="collapsible" data-mini="true" class="ui-state-highlight ';
		output1 += eName[$.parseJSON(workout)[0][i]];
		output1 += ' ">';
		output1 += "<h3>"
		output1 += exercises[$.parseJSON(workout)[0][i]];
		output1 += "</h3><p></p></div>";
	}
	var output2 = '';
	for (i=0; i<$.parseJSON(workout)[1].length; i++) {
		output2 += '<div data-role="collapsible" data-mini="true" class="ui-state-highlight ';
		output2 += eName[$.parseJSON(workout)[1][i]];
		output2 += ' ">';
		output2 += "<h3>"
		output2 += exercises[$.parseJSON(workout)[1][i]];
		output2 += "</h3><p></p></div>";
	}
	var output3 = 'Workout B';
	for (i=0; i<$.parseJSON(workout)[2].length; i++) {
		output3 += '<div data-role="collapsible" data-mini="true" class="ui-state-highlight ';
		output3 += eName[$.parseJSON(workout)[2][i]];
		output3 += ' ">';
		output3 += "<h3>"
		output3 += exercises[$.parseJSON(workout)[2][i]];
		output3 += "</h3><p></p></div>";
	}
	$('#sortable1').html(output1);
	$('#sortable2').html(output2);
	$('#sortable3').html(output3);


	//add the warmup sets to workout page
	$('.workoutdiv div[data-role="collapsible"]').each( function() {
		var arrayIndex = $.inArray($(this).children('h3').text(),exercises);
		var exerciseClass = eName[arrayIndex];
		$(this).children('p').html('<div id="Sets"><div class="bar">'+globalPlates[getCookie('lbkg')][0]+'x5x2 (Bar)</div><div class='+exerciseClass+'warmup1></div><div class='+exerciseClass+'warmup2></div><div class='+exerciseClass+'warmup3></div><div class='+exerciseClass+'warmup4></div></div>');		
	});

}


$(document).ready(function () {
	//first time visiting site, set defaults
	if (getCookie('first') == "") {
		window.alert("Welcome to the Starting Strength calculator.  Please set your settings, otherwise the default settings will be used.")
		setDefaultCookies();
	}
	//create footer
	$(document).on("pageshow", "[data-role='page']", function() {
		if ($(this).hasClass("default_footer")) {
			$('<footer data-theme="b" data-role="footer" data-position="fixed"><nav data-role = "navbar"><ul><li><a href="#Workouts" class ="ui-btn-icon-top ui-btn ui-icon-gear">Workouts</a></li><li><a href="#Settings" data-transition="slidedown" class ="ui-btn-icon-top ui-btn ui-icon-edit">Settings</a></li></ul></nav></footer>').appendTo($(this)).toolbar({position: "fixed"});
		}
		else if ($(this).attr('id') == "Workouts") {
			$('<footer data-theme="b" data-role="footer" data-position="fixed"><nav data-role = "navbar"><ul><li><a href="#main" class ="ui-btn-icon-top ui-btn ui-icon-home">Exercises</a></li><li><a href="#Settings" data-transition="slidedown" class ="ui-btn-icon-top ui-btn ui-icon-edit">Settings</a></li></ul></nav></footer>').appendTo($(this)).toolbar({position: "fixed"});
		}
	});
	//when page loads, determine if in lb or kg, and check appropriate box and set plates
	var weightSystem = getCookie('lbkg');
	var gender = getCookie('gender');
	var warmups = getCookie('warmups');
	var bodyweight = getCookie('bodyweight');
	var allPlates = $.parseJSON(getCookie('allPlates'))
	var weightClass = getWeightClass(bodyweight);
	var workout = getCookie('workout');

	setUpValues(weightSystem, gender, bodyweight, warmups, allPlates, workout);

	//when a object in sortable list is dropped
	$('.connectedSortable').sortable({
   		stop: function(event, ui) {
   			var workouts = [[],[],[]]; 
   			for (i=0; i<3; i++) {
   				//for each item that is in the table
   				count=0;
   				$('#sortable'+(i+1)+' div[data-role="collapsible"] h3').each( function () {
   					//get the index in exercises and store that number in array
   					text = $(this).text().replace(" click to expand contents", "");
   					text = text.replace(" click to collapse contents", "");
   					var arrayIndex = $.inArray( text , exercises);
   					workouts[i][count]= arrayIndex;
   					count++;
   				});
   			}
   			setCookie('workout', JSON.stringify(workouts), 30);
   		}
	});

	$('.workoutdiv div[data-role="collapsible"]').change(function() {
		text = $(this).text().replace("I'm the collapsible set content for section 1.","");
		text = text.trim();
		if (text == "Squat") {
		}
	});

	//finds weight class
	$('#bodyweight').change(function () {
		setCookie("bodyweight", $(this).val(), 30);
		weightClass = getWeightClass($(this).val());
		removeTableClasses();
		$('.Exercise').each(function() {
			updateStandard($(this).attr('id'));
		});
	});

	//set plates
	$('#plates').change(function () {
		setPlates();
	});

	//handler for lbkg to set weight system, slider, and strength standard table
	$('#weightSystem').change(function () {
		var lbOrKg = getCookie('lbkg');
		if (lbOrKg == 0) {
			setCookie('bodyweight', Math.round(getCookie('bodyweight') * 2.2) , 30 );
		}
		else {
			setCookie('bodyweight', Math.round(getCookie('bodyweight') / 2.2) , 30 );
		}
		var array = $.parseJSON(getCookie('allPlates'));
		var array2 = $.parseJSON(getCookie('toggledPlates'));
		var array3 = array.slice(0);
		var array4 = array2.slice(0);
		for (i=0; i<globalPlates[0].length; i++) {
			$('label[for="plate'+(i)+'"]').text(globalPlates[lbOrKg][i]);

			//if the current number of the original 5 plates is in array2, replace
			if (array2.indexOf(parseFloat(array[i])) != -1) {
				array4[array2.indexOf(parseFloat(array[i]))] = globalPlates[lbOrKg][i];
			}
			array3[i] = globalPlates[lbOrKg][i];
		}			
		setCookie('allPlates', JSON.stringify(array3), 30);
		setCookie('toggledPlates', JSON.stringify(array4), 30);
		removeTableClasses();
		for (z=0; z<eName.length; z++) {
			calculateStrengthStandards(eName[z]);
			updateStandard(eName[z]);
		}
		$('.Exercise').each(function() {
			//lb to kg
			if (lbOrKg == 0) {
				setCookie($(this).attr('id'), Math.round(getCookie($(this).attr('id')) * 2.2) , 30 );
			}
			if (lbOrKg == 1) {
				setCookie($(this).attr('id'), Math.round(getCookie($(this).attr('id')) / 2.2) , 30 );
			}
			calculateWarmups($(this).attr('id'), getCookie($(this).attr('id')));
			$('.slider').attr('value', getCookie($(this).attr('id')));
		});
		$('#bodyweight').attr('placeholder', "Your weight is "+ getCookie('bodyweight')+lbkg[getCookie('lbkg')]);
		$('.slider').attr('min' ,slider[getCookie('lbkg')][0]);
		$('.slider').attr('max' ,slider[getCookie('lbkg')][1]);
		$('.slider').attr('step' ,slider[getCookie('lbkg')][2]);
	});

	$('#gender').change(function () {
		$('td .auto-style1').text('');
		removeTableClasses();
		for (y=0; y<eName.length; y++) {
			calculateStrengthStandards(eName[y]);
			updateStandard(eName[y]);
		}
	});

	//on change in warmup settings
	$('#warmupsettings').change(function () {
		var warmups = [[],[],[]];
		for (h=0; h<5; h++) {
			warmups[0][h] = $('#warm'+h+'').val();
			warmups[1][h] = $('#warmrep'+h+'').val();
			warmups[2][h] = $('#warmset'+h+'').val();
		}
		setCookie('warmups', JSON.stringify(warmups), 30);
		//recalculate warmups
		$('.Exercise').each(function() {
			calculateWarmups($(this).attr('id'), getCookie($(this).attr('id')));
		});
	})

	//each exercise, create page
	$('.Exercise').each(function createExercisePage() {
		var exerciseName = $(this).attr('id');
		$('<header data-theme="b" data-role="header"><h1>'+$(this).children("h1").text()+'</h1><a href="#" class ="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-back ui-btn-icon-left" data-rel="back">Back</a><a href="#About" class ="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-bars ui-btn-icon-left">About</a></header>').prependTo($(this));
		if (bodyweight != "" && bodyweight != 0) {
			$(this).append('<h2 class="bw"> Your bodyweight is '+bodyweight+' '+lbkg[getCookie('lbkg')]+' <h3 class="wc"> You are in the ' + allWeightClasses[getCookie('gender')][getCookie('lbkg')][weightClass]+ ' '+ lbkg[getCookie('lbkg')]+' weight class');
		}
		if (bodyweight == "" || bodyweight == 0) {
			$(this).append('<h2 class="bw">Enter a bodyweight');
		}
		//if weight was set before, set the input value
		var weight=40;
		if (getCookie(exerciseName) != ""){
			weight = parseFloat( getCookie(exerciseName) );
		}
		//add working weight slider, working sets and 1rm
		$('<p></p>Working Weight<input class="slider" id='+exerciseName+'Weight type="range" value='+weight+' min='+slider[getCookie('lbkg')][0]+' max='+slider[getCookie('lbkg')][1]+' step='+slider[getCookie('lbkg')][2]+' /><div id="Sets"><div class="bar">'+globalPlates[getCookie('lbkg')][0]+'x5x2 (Bar)</div><div class='+exerciseName+'warmup1></div><div class='+exerciseName+'warmup2></div><div class='+exerciseName+'warmup3></div><div class='+exerciseName+'warmup4></div></div><br /><div class ='+exerciseName+'max></div><p></p><div id='+exerciseName+'Standard></div>').appendTo($(this));
		//set warmup divs
		calculateWarmups(exerciseName, weight);
		//weight standards table
		$('<div data-role="collapsible"><h3>Strength Standards</h3><div id='+exerciseName+'Tab class="tab"><table align="center" style="width: 30%; height: 160px;" class="auto-style2"><tr><th class="tableHead"></th><th class="tableHead" colspan="5"></th></tr><tr><th>Body Weight</th><th>Untrained</th><th>Novice</th><th>Intermediate</th><th>Advanced</th><th>Elite</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></div></div>').appendTo($(this));
		calculateStrengthStandards(exerciseName);
		updateStandard(exerciseName);
	});

	//create handler for input
	$(document).on('pageshow', ".Exercise", function(){
		bodyweight = getCookie('bodyweight');
		weightClass = getWeightClass(bodyweight);
		if (bodyweight != "" && bodyweight != 0) {
			$('.bw').html('Your bodyweight is '+bodyweight+' '+lbkg[getCookie('lbkg')]+'');
			$('.wc').html(' You are in the ' + allWeightClasses[getCookie('gender')][getCookie('lbkg')][weightClass]+ ' '+ lbkg[getCookie('lbkg')]+' weight class');
		}
		if (bodyweight == "" || bodyweight == 0) {
			$('.bw').html('Enter a bodyweight');
			$('.wc').html('');
		}
		var exerciseName = $(this).attr('id');
		$('#'+exerciseName+'Weight').change(function (e) {
			var weight = $(this).val();
			if ($.isNumeric(weight)) {
				calculateWarmups(exerciseName, weight);
			}
			$('td').removeClass('work');
			updateStandard(exerciseName);
		});
	});
});