//add Women and kg


//Men + Pounds
var weightClass = [114,123,132,148,165,181,198,220,242,275,319,"320+"];
//index from weightClass determines standard

//ohp standards are current powerclean
var OHPStandards = [[55,75,90,110,130], [60,80,100,115,140], [65,85,105,125,150], [70,95,120,140,170] ,
 [75,100,130,155,190], [80,110,140,165,220], [85,115,145,175,235], [90,120,155,185,255], [95,125,160,190,265],
 [95,130,165,195,275], [100,135,170,200,280] , [100,140,175,205,285]];
var SquatStandards = [[80,145,175,240,320], [85,155,190,260,345],[90,170,205,280,370], [100,190,230,315,410] ,
 [110,205,250,340,445],[120,220,270,370,480], [125,230,285,390,505], [130,245,300,410,530], [135,255,310,425,550],
 [140,260,320,435,570], [145,270,325,445,580], [150,275,330,455,595]];
var DeadliftStandards = [[95,180,205,300,385], [105,195,220,320,415],[115,210,240,340,440], [125,235,270,380,480] ,
 [135,255,295,410,520],[150,275,315,440,550], [155,290,335,460,565], [165,305,350,480,585], [170,320,365,490,595],
 [175,325,375,500,600], [180,335,380,505,610], [185,340,390,510,615]];
var BenchStandards=[[85,110,130,180,220], [90,115,140,195,240],[100,125,155,210,260], [110,140,170,235,290] ,
 [120,150,185,255,320],[130,165,200,275,345], [135,175,215,290,360], [140,185,225,305,380], [145,190,230,315,395],
 [150,195,240,325,405], [155,200,245,335,415], [160,205,250,340,425]];
 //no row standards
var RowStandards = [[80,145,175,240,320], [85,155,190,260,345],[90,170,205,280,370], [100,190,230,315,410] ,
 [110,205,250,340,445],[120,220,270,370,480], [125,230,285,390,505], [130,245,300,410,530], [135,255,310,425,550],
 [140,260,320,435,570], [145,270,325,445,580], [150,275,330,455,595]];
var PowerCleanStandards= [[55,105,125,175,205], [ 60,110,135,185,225], [65,120,150,200,240], [75,135,165,225,265] ,
 [80,145,180,245,290], [85,160,195,265,310], [90,165,205,280,325], [95,175,215,295,345], [100,185,225,305,355],
 [105,190,230,315,365], [110,195,235,320,375] , [115,200,240,330,385]];
var standard = ["Untrained", "Novice", "Intermediate", "Advanced", "Elite"];
var exercises = ["Squat", "Bench Press", "Deadlift", "Overhead Press", "Pendlay Rows"];
var lbkg = ["Pounds", "Kg"];

function getWeight(cname) {
	var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) console.log( c.substring(name.length,c.length));
    }
    return c.substring(name.length,c.length);
    
	}

//add custom plates and kg
function numToPlate(data) {
	var orig = data;
	var plates = [NaN,NaN,NaN,NaN,NaN,NaN];
	var weight = [45,35,25,10,5,2.5];
	var string = "(";
	if (data > 45) {
		data = (data-45) / 2;
		for (i=0; i<plates.length; i++) {
			if (data / weight[i] >= 1) {
				plates[i] = Math.floor(data/weight[i]);
				data = data - (plates[i] * weight[i]);
			}
		}
		for (i=0; i<weight.length; i++) {
			if (!isNaN(plates[i])) {
				string += String(weight[i]) + "x" + String(plates[i]) + " ";
				}
		}
		if (string.length > 1){
				string = string.substring(0,string.length-1);	
		}
	}
	if (orig < 50) {
		string += "Bar";
	}
	string += ")";
	return string;
}

function getWeightClass(data) {
	var w;
	for (i=0; i<weightClass.length; i++) {

		if (weightClass[i] > data) {
			if (i==0){
				w=0;
			}
			else{
			w = i-1;	
		}
			break
		}
		else {
			w = i;
		}
	}
	return w;
}

function weightStandard(exercise, wc, oneRM) {
	var workout;
	switch (exercise) {
		case "OHP":
			workout = OHPStandards;
			break;
		case "Squat":
			workout = SquatStandards;
			break;
		case "Deadlift":
			workout = DeadliftStandards;
			break;
		case "Bench":
			workout = BenchStandards;
			break;
		case "Row":
			workout = RowStandards;
			break;
	}
	var w;
	for (i=0; i<workout[wc].length; i++) {

		if (workout[wc][i] > oneRM){
			if (i==0){
				w = 0;
			}
			else {
			w = i-1;
		}
			break
		}
		else {
			w = i;
		}
	}
	return w;
}

$(document).ready(function () {

	var table = $('#tab');
	console.log(table);



	//gets first 
	//replace with h1
	$('#tab th:nth-child(1)').html(lbkg[0]);
	$('#tab th:nth-child(2)').html(exercises[0]);
	var rows = $('#tab td:nth-child(1)').length;
	for (i=0; i<rows-1; i++) {
		// $('#tab td:nth-child('+i+')').html("Here");
		//writes the weight classes
		$('#tab tr:nth-child('+(i+3)+') td:nth-child(1)').html(weightClass[i]);
		$('#tab tr:nth-child('+(i+3)+') td:nth-child(1)').css("width", "20%");
		var columns = $('#tab td').length
		for (j=0; j<columns-1; j++) {
			$('#tab tr:nth-child('+(i+3)+') td:nth-child('+(j+2)+'').html(OHPStandards[i][j]);
			$('#tab tr:nth-child('+(i+3)+') td:nth-child('+(j+2)+'').css("width", "16%");
		}
	}
	$('#tab td').addClass("auto-style1");
	// $('#tab th:nth-child(1)').html("	Hello");
	
	// for int

	//finds weight class
	var bodyweight=getWeight('bodyweight');
	var wc = getWeightClass(bodyweight);
	console.log("You are in the " + weightClass[wc] + " lbs weight class");
	$('#bodyweight').change(function (e) {
		bodyweight = $(this).val();
		var d = new Date();
    	d.setTime(d.getTime() + (2*24*60*60*1000));
    	var expires = "expires=" + d.toUTCString();
		document.cookie = "bodyweight=" + bodyweight + "; " + expires;
	});

	//each exercise, create page
	$('.Exercise').each(function () {
		var exerciseName = $(this).attr('id');
		$('<header data-theme="b" data-role="header"><h1>'+$(this).children("h1").text()+'</h1><a href="#" class ="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-back ui-btn-icon-left" data-rel="back">Back</a><a href="#" class ="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-gear ui-btn-icon-left">Settings</a></header>').prependTo($(this));
		$(this).append('<h2 class="bw"> Your bodyweight is '+bodyweight+' pounds');
		$(this).append('<h3 class="wc"> You are in the ' + weightClass[wc] + ' lbs weight class');
		//add working weight slider, working sets and 1rm
		$('<p></p>Working Weight<input class="Weight" type="range" min="45" max="500" step="5" /><div id="Sets"><div>45x5x2 (Bar)</div><div id='+exerciseName+'warmup1></div><div id='+exerciseName+'warmup2></div><div id='+exerciseName+'warmup3></div><div class="work" id='+exerciseName+'warmup4></div></div><br /><div id ='+exerciseName+'max></div>').appendTo($(this));
		$('<p></p><div id='+exerciseName+'Standard></div>').appendTo($(this));
	});


	//create handler for input
	$(document).on('pageshow', ".Exercise", function(){
		bodyweight = getWeight('bodyweight');
		wc = getWeightClass(bodyweight);
		$('.bw').html('Your bodyweight is '+bodyweight+' pounds');
		$('.wc').html(' You are in the ' + weightClass[wc] + ' lbs weight class');
		var exerciseName = $(this).attr('id');
		$('.Weight').change(function (e) {
			var weight = $(this).val();
			var set = [];
			var max;
			if ($.isNumeric(weight))
			{
				for (j=1; j<5; j++) {
					mult = ((j+1)*.2).toFixed(1) * weight;
					if (mult < 45) {
						mult = 45;
					}
					mult = Math.floor(mult/5) * 5;
					set[j] = mult;
					if (j == 1){
						set[j] += "x5"
					}
					if (j == 2){
						set[j] += "x3"
					}
					if (j == 3){
						set[j] += "x2"
					}
					if (j == 4){
						set[j] += "x5x3"
					}
					set[j] += " "  + numToPlate(mult);
					$('#'+exerciseName+'warmup'+[j]).html(set[j]);
				}
				max = Math.round(weight / (1.0278 - (.0278 * 5)));
				$('#'+exerciseName+'max').html("Your 1 Rep Max is " + max + " "  + numToPlate(max));
				$('#'+exerciseName+'Standard').html("You are in the category "+ standard[weightStandard(exerciseName, wc, max)]);
			}
		});
	});
});