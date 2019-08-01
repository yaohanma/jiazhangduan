// 手机号码验证  
jQuery.validator.addMethod("isMobile", function(value, element) {  
    var length = value.length;  
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;  
    return this.optional(element) || (length == 11 && mobile.test(value));  
}, "请正确填写您的手机号码");  

jQuery.validator.addMethod("isUserName",function(value, element){
	var testRep = /^[0-9a-zA-Z]+$/;
	return this.optional(element) || (testRep.test(value)); 
},"只能输入字母或数字");

jQuery.validator.addMethod("isEnAndNum",function(value, element){
	var testRep = /^[0-9a-zA-Z]+$/;
	return this.optional(element) || (testRep.test(value)); 
},"只能输入字母或数字");

jQuery.validator.addMethod("isUpper",function(value, element){
	var testRep = /^[A-Z]+$/;
	return this.optional(element) || (testRep.test(value)); 
},"只能输入大写字母");

jQuery.validator.addMethod("isLower",function(value, element){
	var testRep = /^[a-z]+$/;
	return this.optional(element) || (testRep.test(value)); 
},"只能输入小写字母");

jQuery.validator.addMethod("isCH",function(value, element){
	var testRep = /^[\u4E00-\u9FA5]+$/;
	return this.optional(element) || (testRep.test(value));
},"只能输入中文");

jQuery.validator.addMethod("isEmail",function(value, element){
	var testRep = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return this.optional(element) || (testRep.test(value));
},"email格式不正确");

jQuery.validator.addMethod("isEN",function(value, element){
	var testRep = /^([a-zA-Z0-9]+\_?\-?[a-zA-Z0-9]+)+$/;
	return this.optional(element) || (testRep.test(value));
},"只能输入英文、数字、下划线、中划线并且字符数大于1");

jQuery.validator.addMethod("isUserIdcard",function(value, element){
	var testRep = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
	var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
    var sum = 0, idx;  
    if(this.optional(element) || (testRep.test(value))){
	    if(value.length==18){
	        for(var i = 0; i < value.length - 1; i++){  
	            // 对前17位数字与权值乘积求和  
	            sum += parseInt(value.substr(i, 1), 10) * arrExp[i];  
	        }  
	        // 计算模（固定算法）  
	        idx = sum % 11;  
	        // 检验第18为是否与校验码相等  
	        return arrValid[idx] == value.substr(17, 1).toUpperCase();  
	    }else{
	    	return this.optional(element) || (testRep.test(value));
	    }
	}else{
		return this.optional(element) || false;
	}
},"请正确填写您的身份证号码");

jQuery.validator.addMethod("isUserIdcardWidthType",function(value, element,param){
	var testRep = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
	var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
    var sum = 0, idx;  
	if($(param).val()!=""&&$(param).val()=="1"){
		if(this.optional(element) || (testRep.test(value))){
		    if(value.length==18){
		        for(var i = 0; i < value.length - 1; i++){  
		            // 对前17位数字与权值乘积求和  
		            sum += parseInt(value.substr(i, 1), 10) * arrExp[i];  
		        }  
		        // 计算模（固定算法）  
		        idx = sum % 11;  
		        // 检验第18为是否与校验码相等  
		        return arrValid[idx] == value.substr(17, 1).toUpperCase();  
		    }else{
		    	return this.optional(element) || (testRep.test(value));
		    }
		}else{
			return this.optional(element) || false;
		}
	}else{
		return this.optional(element) || true;
	}
},"请正确填写您的身份证号码");

jQuery.validator.addMethod("socialCreditCode",function(value, element){
	var patrn = /^[0-9A-Z]+$/;
	  //18位校验及大写校验  
	  if ((value.length != 18) || (patrn.test(value) == false)) {  
	    return this.optional(element) || false;  
	  } else {  
	    var Ancode;//统一社会信用代码的每一个值  
	    var Ancodevalue;//统一社会信用代码每一个值的权重   
	    var total = 0;  
	    var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子   
	    var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';  
	    //不用I、O、S、V、Z   
	    for (var i = 0; i < value.length - 1; i++) {  
	      Ancode = value.substring(i, i + 1);  
	      Ancodevalue = str.indexOf(Ancode);  
	      total = total + Ancodevalue * weightedfactors[i];  
	      //权重与加权因子相乘之和   
	    }  
	    var logiccheckcode = 31 - total % 31;  
	    if (logiccheckcode == 31) {  
	      logiccheckcode = 0;  
	    }  
	    var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";  
	    var Array_Str = Str.split(',');  
	    logiccheckcode = Array_Str[logiccheckcode];  
	    var checkcode = value.substring(17, 18);  
	    if (logiccheckcode != checkcode) {  
	      return this.optional(element) || false;  
	    } 
	    return this.optional(element) || true;  
	  }  
},"请正确填写您的统一社会信用代码");

jQuery.validator.addMethod("isOrganizationCode",function(value, element){
	if(value!=""){
		var ws = [3, 7, 9, 10, 5, 8, 4, 2];
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var reg = /^([0-9A-Z]){8}-[0-9|X]$/;
        if (!reg.test(value)) {
        	return this.optional(element) || false;
        }
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            sum += str.indexOf(value.charAt(i)) * ws[i];
        }
        var c9 = 11 - (sum % 11);
        if (c9 == 10) {
            c9 = 'X';
        } else if (c9 == 11) {
            c9 = '0';
        }
        if (c9 != value.charAt(9)) {
            return this.optional(element) || false;
        }else{
        	return this.optional(element) || true;
        }
	}else{
		return this.optional(element) || false
	}
},"请正确填写您的组织机构代码");

jQuery.validator.addMethod("isPhone",function(value, element){
	var testRep = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
	return this.optional(element) || (testRep.test(value));
},"请正确填写您的电话号码");

jQuery.validator.addMethod("isTel",function(value, element){
	var testRep = /^0\d{2,3}-[1-9]\d{6,7}$/;
	return this.optional(element) || (testRep.test(value));
},"请正确填写您的电话号码");

jQuery.validator.addMethod("contact",function(value, element){
	var testRep = /^(0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
	return this.optional(element) || (testRep.test(value));
},"请正确填写您的联系方式");

jQuery.validator.addMethod("isFax",function(value, element){
	var testRep = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
	return this.optional(element) || (testRep.test(value));
},"请正确填写您的传真");

//企业人数判断
jQuery.validator.addMethod("compareMaxCoMemberNum" , function(value, element, param) {
    var maxNum = jQuery(param).val();
    if(maxNum != ''&&value != ''){
    	if(maxNum.indexOf('+') > 0){
    		return this.optional(element) || true;
    	} else {
    		if(value.indexOf('+') > 0){
        		return this.optional(element) || false;
        	} else {
        		return this.optional(element) || parseInt(value) <= parseInt(maxNum);
        	}
    	}
    } else{
    	return this.optional(element) || true;
    }
},"人数不得超过企业总人数");

//企业人数判断
jQuery.validator.addMethod("compareMinCoMemberNum" , function(value, element, param) {
    if(value != ''){
    	var params=param.split(",");
    	var flag = true;
    	$.each(params,function(i,item){
    		var minNum = jQuery(item).val();
    		if(minNum != ''){
    			if(value.indexOf('+') > 0){
    				flag = true;
    				return;
            	} else {
            		if(minNum.indexOf('+') > 0){
            			flag = false;
                		return;
                	} else {
                		flag = parseInt(value) >= parseInt(minNum);
                		return;
                	}
            	}
    		}
    	});
    	return this.optional(element) || flag;
    } else{
    	return this.optional(element) || true;
    }
},"企业总人数不得小于其他人数");

//数字大小比较
jQuery.validator.addMethod("compareNum" , function(value, element, param) {
    var minNum = jQuery(param).val();
    if(minNum != ''&&value != ''){
    	return minNum < value;
    } else{
    	return true;
    }
},"最高薪资必须大于最低薪资");

//日期大小比较
jQuery.validator.addMethod("compareDatePlusOneDay" , function(value, element, param) {
    var startDate = jQuery(param).val();
    var date1 = new Date(Date.parse(startDate.replace(/-/g, "/")));
    var date2 = new Date(Date.parse(value.replace(/-/g, "/")));
    if(startDate != ''&&value != ''){
    	return date1 < date2;
    } else{
    	return true;
    }
},"结束日期必须大于开始日期");

jQuery.validator.addMethod("soFar" , function(value, element, param) {
    var date1 = new Date(Date.parse(value.replace(/-/g, "/")));
    var date2 = new Date();
    if(value != ''){
    	return date1 <= date2;
    } else{
    	return true;
    }
},"日期不得超过今天");

jQuery.validator.addMethod("latestToday" , function(value, element, param) {
    var date1 = new Date(Date.parse(value.replace(/-/g, "/")));
    var date2 = new Date();
    if(value != ''){
    	return date1 >= date2;
    } else{
    	return true;
    }
},"日期不得早于今天");
