template.defaults.imports.dateFormat = function (value, format) {
	if(value != null && value != undefined){
		date = new Date(value);
		var map = {
				"M": date.getMonth() + 1, //月份 
				"d": date.getDate(), //日 
				"h": date.getHours(), //小时 
				"m": date.getMinutes(), //分 
				"s": date.getSeconds(), //秒 
				"q": Math.floor((date.getMonth() + 3) / 3), //季度 
				"S": date.getMilliseconds() //毫秒 
		};
		format = format.replace(/([yMdhmsqS])+/g, function(all, t){
			var v = map[t];
			if(v !== undefined){
				if(all.length > 1){
					v = '0' + v;
					v = v.substr(v.length-2);
				}
				return v;
			}
			else if(t === 'y'){
				return (date.getFullYear() + '').substr(4 - all.length);
			}
			return all;
		});
		return format;
	} else {
		return '';
	}
}

template.defaults.imports.getItemName = function (value, groupCode) {
	return getItemName(value, groupCode);
}

template.defaults.imports.getRegionName = function (value) {
	return getRegionName(value);
}
template.defaults.imports.contains = function (value, tar) {
    if (tar && value){
        var result = tar.indexOf(value);
        if (result < 0){
        	return false;
		} else {
        	return true;
		}
    }
	return false;
}



