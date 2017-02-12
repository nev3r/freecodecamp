var $ = jQuery.noConflict();
$(function() {
	var totaldiv = $('#total');
	var log ="";
	var result = "";
	var input = "";
	var testNumLength = function() {
		if (input.length > 9) {
 			log = "";
 			input = "";
 			result = "";
			$("#history").html("Error");
			totaldiv.text("Error");
			console.log('hre');
		}
	}
	var round = function(value) {
	    value = value.toString().split('');   
	    if (value.indexOf('.') !== -1) {
	    	var div = value.slice(0,value.indexOf('.'));
	    	var mod = value.slice(value.indexOf('.')+1,value.length);
	    	value = div.join('');
			var temp = mod.join('');
			var totalNumbers = 9 - (value.length+1);
			value = value + '.' + temp;
			value = parseFloat(value);
			value = value.toFixed(totalNumbers);
			var valueToString = value.toString();
			var i = valueToString.length-1;
			var ok = false;
			do {
				if (valueToString[i] == "0") {
					valueToString = valueToString.slice(0, i);
					i = i - 1;
				}
				else {
					ok = true;
				}
			} while (!ok);
			return valueToString;    	 	
	    }
	    else {
	    	value = value.join('');
	    	value = parseFloat(value);
	    	if (value > 999999999) {
	    		var strValue = value.toString();
	    		var strOutcome = "";
	    		for (var i = 0; i <= 8; i++){
	    			strOutcome += strValue[i];
	    		}
	    		value = parseFloat(strOutcome);
	    		return Math.round(value);
	    	}
	    	else {
	    		return value;
	    	}
	    	return temp;
	    };
  	}
	totaldiv.text('0');
	$("#equals").click(function() {
		if (result === 0) {
			result = "";
		}
		result = round(eval(log));
		totaldiv.text(result);
		log += "=";
		log += result;
		$("#history").html(log);
		log = "";
		log = result;
	});
	$("#decimal").click(function(){
		if (input.indexOf('.') === -1) {
			log += ".";
			input += ".";
			testNumLength(input);
			$("history").html(log);
			totaldiv.text(input);
		}	
	});
	$("#sqrt").click(function(){
		if (result !== ""){
			log = '√' + result + "=";
			result = (Math.sqrt(parseFloat(result))).toString(10);
			result = round(result);
			log += result;
			$("#history").html(log);
			totaldiv.text(result);
		}
		else {
			log = '√' + input + "=";
			result = (Math.sqrt(parseFloat(input))).toString(10);
			$("#history").html(log);
			result = round(result);
			log += result;
			input = result;
			$("#history").html(log);
			totaldiv.text(result);
		}
	
	});
	$("#plusminus").click(function(){
		result = result.toString();
		log = log.toString();
		if (result !== "" && result[0] !== "-") {
			result = result.substr(0,0)+'-'+result.substr(0);
			log = log.substr(0,log.length-result.length) + result;
			totaldiv.text(result);
			$("#history").html(log);
		} else if (result !== "" && result[0] == "-") {
			result = result.substr(1);
			log = log.substr(0,log.length-result.length-1) + result;
			totaldiv.text(result);
			$("#history").html(log);
		} else if (result == "" && input !== "" && input[0] !== "-") {
			input = input.substr(0,0)+'-'+input.substr(0); 
			log = log.substr(0,log.length-input.length) + input;
			totaldiv.text(input);
			$("#history").html(log);
		} else if (result == "" && input !== "" && input[0] == "-") {
			input = input.substr(1);
			log = log.substr(0,log.length-input.length-1) + input;
			totaldiv.text(input);
			$("#history").html(log);
		}
	});
	$("#plus").click(function() {
		log += "+";
		input = "";
		totaldiv.text("0");
		$('#history').html(log);
	});
	$("#minus").click(function(){
		log += "-";
		input = "";
		totaldiv.text("0");
		$('#history').html(log);
	});	
	$('#times').click(function(){
		log += "*";
		input = "";
		totaldiv.text("0");
		$('#history').html(log);
	});
	$("#divide").click(function() {
		log += "/";
		input = "";
		totaldiv.text("0");
		$('#history').html(log);
	});
	$("#bracketLeft").click(function(){
		log += "(";
		totaldiv.text(input);
		$('#history').html(log);
	});
	$("#bracketRight").click(function(){
		log += ")";
		totaldiv.text(input);
		$('#history').html(log);
	});
	$("#clearall").click(function(){
		log = "";
		result = "";
		input = "";
		$('#history').html(log);
		totaldiv.text("0");
	});
	$("#clear").click(function(){
		if (result != ""){
			log = "";
			result = "";
			input = "";
			$('#history').html(log);
			totaldiv.text("0");
		}
		else {
			log = log.slice(0,log.length-input.length);
			input = "";
			$('#history').html(log);
			totaldiv.text("0");
		};
	});
	$("#one").click(function() {
		log += "1";
		input += "1";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#two").click(function(){
		log += "2";
		input += "2";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#three").click(function(){
		log += '3';
		input += "3";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#four").click(function(){
		log += "4";
		input += "4";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#five").click(function(){
		log += "5";
		input += "5";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#six").click(function(){
		log += "6";
		input += "6";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#seven").click(function(){
		log += "7";
		input += "7";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#eight").click(function(){
		log += "8";
		input += "8";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#nine").click(function(){
		log += "9";
		input += "9";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
	$("#zero").click(function(){
		log += "0";
		input += "0";
		totaldiv.text(input);
		$('#history').html(log);
		testNumLength();
	});
});
