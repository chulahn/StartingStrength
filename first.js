//add Women and kg


//Men + Pounds
var weightClass = [114,123,132,148,165,181,198,220,242,275,319,"320+"];
//index from weightClass determines standard

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

var slider = [[45,500,5],[20,250,2.5]];
var standard = ["Untrained", "Novice", "Intermediate", "Advanced", "Elite"];
var exercises = ["Squat", "Bench Press", "Deadlift", "Overhead Press", "Pendlay Rows", "Power Cleans"];
var plates = [[45,35,25,10,5,2.5] ,[20,15,10,5,2.5,1]];
var lbkg = ["Pounds", "Kg"];

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function calculateWarmups(exerciseName, weight){
	var set = [];
	var max;
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
				setCookie(exerciseName, weight, 30);
			}
			max = Math.round(weight / (1.0278 - (.0278 * 5)));
			$('#'+exerciseName+'max').html("Your 1 Rep Max is " + max + " "  + numToPlate(max));
			$('#'+exerciseName+'Standard').html("You are in the category "+ standard[weightStandard(exerciseName, getWeightClass(getCookie('bodyweight')), max)]);
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

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        <!-- alert("Welcome again " + user); -->
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
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

function pickWorkout(exercise) {
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
		case "PC":
			workout = PowerCleanStandards;
			break;
	}
	return workout;
}

function weightStandard(exercise, wc, oneRM) {
	workout = pickWorkout(exercise);
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

	//finds weight class
	var bodyweight=getCookie('bodyweight');
	var wc = getWeightClass(bodyweight);
	$('#bodyweight').change(function (e) {
		setCookie("bodyweight", $(this).val(), 30);
	});

	//when page loads, determine if in lb or kg, and check appropriate box and set plates
	var weightSystem = getCookie('lbkg');
	if (weightSystem = ""){
		weightSystem = 0;
	}
	var numPlates = $('#plates input').length;
	if (weightSystem == "1") {
		$('#radio-choice-h-2b').prop('checked',"checked");
		$('#radio-choice-h-2a').prop('checked',"");
			
	}
	if (weightSystem == "0") {
		$('#radio-choice-h-2b').prop('checked',"");
		$('#radio-choice-h-2a').prop('checked',"checked");
			
	}
	for (i=0; i<numPlates+1; i++) {
		// plateWeight = parseFloat($('label[for="plate'+i+'"]').text());
		$('label[for="plate'+(i+1)+'"]').text(plates[weightSystem][i]);
	}

	//handler for lbkg to set weights
	$('#weightSystem').change(function () {
		for (i=0; i<numPlates+1; i++) {
		$('label[for="plate'+(i+1)+'"]').text(plates[getCookie('lbkg')][i]);
		$('.slider').attr('min' ,slider[getCookie('lbkg')][0]);
		$('.slider').attr('max' ,slider[getCookie('lbkg')][1]);
		$('.slider').attr('step' ,slider[getCookie('lbkg')][2]);
	}
	})

	//each exercise, create page
	$('.Exercise').each(function () {
		var exerciseName = $(this).attr('id');
		$('<header data-theme="b" data-role="header"><h1>'+$(this).children("h1").text()+'</h1><a href="#" class ="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-back ui-btn-icon-left" data-rel="back">Back</a><a href="#" class ="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-icon-gear ui-btn-icon-left">Settings</a></header>').prependTo($(this));
		$(this).append('<h2 class="bw"> Your bodyweight is '+bodyweight+' '+lbkg[getCookie('lbkg')]+' <h3 class="wc"> You are in the ' + weightClass[wc]+ ' '+ lbkg[getCookie('lbkg')]+' weight class');
		// $(this).append('<h3 class="wc"> You are in the ' + weightClass[wc] + ' lbs weight class');

		//if weight was set before, set the input value
		var weight=40;
		if (getCookie(exerciseName) != ""){
			weight = parseInt( getCookie(exerciseName) );
		}
		//add working weight slider, working sets and 1rm
		$('<p></p>Working Weight<input class="slider" id='+exerciseName+'Weight type="range" value='+weight+' min='+slider[getCookie('lbkg')][0]+' max='+slider[getCookie('lbkg')][1]+' step='+slider[getCookie('lbkg')][2]+' /><div id="Sets"><div>45x5x2 (Bar)</div><div id='+exerciseName+'warmup1></div><div id='+exerciseName+'warmup2></div><div id='+exerciseName+'warmup3></div><div class="work" id='+exerciseName+'warmup4></div></div><br /><div id ='+exerciseName+'max></div><p></p><div id='+exerciseName+'Standard></div>').appendTo($(this));
		//set warmup divs
		calculateWarmups(exerciseName, weight);
		//weight standards table
		$('<div data-role="collapsible"><h3>Strength Standards</h3><div id='+exerciseName+'Tab class="tab"><table align="center" style="width: 30%; height: 160px;" class="auto-style2"><tr><th></th><th colspan="5"></th></tr><tr><td>Body Weight</td><td>Untrained</td><td>Novice</td><td>Intermediate</td><td>Advanced</td><td>Elite</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td style="height: 26px"></td><td style="height: 26px"></td><td style="height: 26px"></td><td style="height: 26px"></td><td style="height: 26px"></td><td style="height: 26px"></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></div></div>').appendTo($(this));

		//replace with h1
		$('.tab th:nth-child(1)').html(lbkg[0]);
		$('#'+exerciseName+'Tab th:nth-child(2)').html($(this).children("h1").text());
		var rows = $('#'+exerciseName+'Tab td:nth-child(1)').length;

		for (i=0; i<rows-1; i++) {
			//writes the weight classes
			$('.tab tr:nth-child('+(i+3)+') td:nth-child(1)').html(weightClass[i]);
			$('.tab tr:nth-child('+(i+3)+') td:nth-child(1)').css("width", "20%");
			var columns = $('#'+exerciseName+'Tab td').length
			for (j=0; j<columns-1; j++) {
				$('#'+exerciseName+'Tab tr:nth-child('+(i+3)+') td:nth-child('+(j+2)+'').html(pickWorkout(exerciseName)[i][j]);
				$('.tab tr:nth-child('+(i+3)+') td:nth-child('+(j+2)+'').css("width", "16%");
			}
		}
		$('.tab td').addClass("auto-style1");
	});


	//create handler for input
	$(document).on('pageshow', ".Exercise", function(){
		bodyweight = getCookie('bodyweight');
		wc = getWeightClass(bodyweight);
		$('.bw').html('Your bodyweight is '+bodyweight+' '+lbkg[getCookie('lbkg')]+'');
		$('.wc').html(' You are in the ' + weightClass[wc]+ ' '+ lbkg[getCookie('lbkg')]+' weight class');
		var exerciseName = $(this).attr('id');

		$('#'+exerciseName+'Weight').change(function (e) {
			var weight = $(this).val();
			if ($.isNumeric(weight))
			{
				calculateWarmups(exerciseName, weight);
			}
		});
	});
});