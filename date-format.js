function autoDateFormat(obj) {
	//DELETE 키버튼이 눌리지 않은 경우에만 실행
	if(event.keyCode != 8) {

		//숫자와 하이픈(-)기호의 값만 존재하는 경우 실행
		if(obj.value.replace(/[0-9 \-]/g, "").length == 0) {

			//하이픈(-)기호를 제거한다.
			let number = obj.value.replace(/[^0-9]/g,"");
			let ymd = "";
			
			if(number.length < 4) {
				return number;

			}else if(number.length < 6){
				ymd += number.substr(0, 4)+"-";
				ymd += number.substr(4);

			}else {
				ymd += number.substr(0, 4)+"-";
				ymd += number.substr(4, 2)+"-";
				ymd += number.substr(6);
			}

			obj.value = ymd;

		}else {
			//숫자와 하이픈(-)기호 이외의 모든 값은 삭제한다.
			obj.value = obj.value.replace(/[^0-9 ^\-]/g,"");
			return false;
		}

	}else {
		return false;
	}
}

function dateFormatCheck(id1, id2) {
	var getFromDt = $("#"+id1).val();
	var getToDt = $("#"+id2).val();
	
	var year1 = getFromDt.substr(0, 4);
	var month1 = getFromDt.substr(5, 2);
	var day1 = getFromDt.substr(8, 2);
	
	var year2 = getToDt.substr(0, 4);
	var month2 = getToDt.substr(5, 2);
	var day2 = getToDt.substr(8, 2);
	
	//월 체크
	if(month1 > 12 || month2 > 12) {
		alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
		return false;
	}
	
	//31일 체크
	if((month1 == "04" || month1 == "06" || month1 == "09" || month1 == "11") && day1 == "31") {
		alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
		return false;
		
	}else if((month2 == "04" || month2 == "06" || month2 == "09" || month2 == "11") && day2 == "31") {
		alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
		return false;
		
	}else if(day1 > 31 || day2 > 31) {
		alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
		return false;
	}
	
	//윤년&윤달 체크
	if(month1 == 2 || month2 == 2) {
		var check1 = (year1 % 4 == 0 && (year1 % 100 != 0 || year1 % 400 == 0));
		var check2 = (year2 % 4 == 0 && (year2 % 100 != 0 || year2 % 400 == 0));
		
		if(day1 > 29 || (day1 == 29 && !check1)) {
			alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
			return false;
			
		}else if(day2 > 29 || (day2 == 29 && !check2)) {
			alert("날짜 형식이 맞지 않습니다. 다시 입력해 주세요.");
			return false;
		}
	}
	
	return true;
}