// URL常亮定义参数
var urlConstant = {
		// 首页URL
		urlMainPage : "/html/common/homepage.html",
		//沟通URL
		urlGtPage : "/html/common/communicate.html",
		// 学习URL
		urlStudyPage : "/html/study/study_index.html",
		// 我的URL
		urlMyPage : "/html/my/my_home.html"
};		

// 数据加载Dialog
var loadDialog = null;

$(function() {

	// 禁用虚拟按键
	//XBack.init();
	// 横屏操作提示竖屏
	if(window.orientation != undefined) {
		if(window.orientation!=0){

		    var obj=document.getElementById('orientation');
		    showAlert('横屏内容太少啦，请使用竖屏观看！');
		    obj.style.display='block';
		}

		window.onorientationchange=function(){ 
		var obj=document.getElementById('orientation');
		if(window.orientation==0){
		            obj.style.display='none';
		    }else
		    {
		            showAlert('横屏内容太少啦，请使用竖屏观看！');
		            obj.style.display='block';
		    }
		};
	}
	
	 // offline网络连接事件
    window.addEventListener("offline",function() {
    	getDialog().alert('网络已断开，请连接网络后重新进入应用', function () {
    		WeixinJSBridge.call('closeWindow');
        });
    });
	// 关闭加载框
	closeLoadDialog();

	(!YDUI.device.isMobile && navigator.userAgent.indexOf('Firefox') >= 0) && YDUI.dialog.alert('PC端请使用谷歌内核浏览器查看！');
});

function ysAjax(url, param, successHandler, errorHandler) {
	/*非首页不显示加载框added by stt start*/
	if(param.hasOwnProperty("page")){
		if(param.page <=1 ){
			showLoadDialog();
		}
	}else{
		showLoadDialog();
	}
	/*added by stt end*/
	// end
	$.ajax({
		method : "POST",
		url : ysServerAddr + url,
		data : param,
		headers : getHeaderParam(),
		dataType : "json",
		success : function(data) {
			// 显示加载框
			closeLoadDialog();
			if (data.success) {
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			} else if (data.errorCode == "ERR_001") {
				// 权限认证错误，提示错误信息
//				showNotify(data.errorCode + ":" + data.errorMsg);
				getDialog().alert('已经超期请重新进入应用', function () {
		    		WeixinJSBridge.call('closeWindow');
		        });
			} else {
				// 应用逻辑判断错误，返回Handler自主处理
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			}
		},
		error : function(event,xhr,options) {
			// 关闭加载框
			closeLoadDialog();
			showAlert(xhr.status + ":" + xhr.statusText);
			if ($.isFunction(errorHandler)) {
				errorHandler(event,xhr,options);
			}
		}
	});
}

function ysAjaxSynchro(url, param, successHandler, errorHandler) {
	showLoadDialog();
	// end
	$.ajax({
		method : "POST",
		url : ysServerAddr + url,
		data : param,
		headers : getHeaderParam(),
		dataType : "json",
		async:false,
		success : function(data) {
			// 显示加载框
			closeLoadDialog();
			if (data.success) {
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			} else if (data.errorCode == "ERR_001") {
				// 权限认证错误，提示错误信息
				showNotify(data.errorCode + ":" + data.errorMsg);
			} else {
				// 应用逻辑判断错误，返回Handler自主处理
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			}
		},
		error : function(event,xhr,options) {
			// 关闭加载框
			closeLoadDialog();
			showAlert(xhr.status + ":" + xhr.statusText);
			if ($.isFunction(errorHandler)) {
				errorHandler(event,xhr,options);
			}
		}
	});
}
function getHeaderParam() {
	var param = {};	
	var token = getToken();
	if (token) {
		param.ysToken = token;
	}
	var userId = getUserId();
	if (userId) {
		param.ysUserId = userId;
	}
	return param;
}
function getAjaxParam(param) {
	if (!param || param == null || param == undefined) {
		param = {};
	}
	var token = getToken();
	if (token) {
		param.ysToken = token;
	}
	var userId = getUserId();
	if (userId) {
		param.ysUserId = userId;
	}
	return param;
}

/**
 * 获取url中的参数
 * @param name
 * @returns
 */
function getUrlParam(name) {
	//构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) {
    	return decodeURI(r[2]);
    }
    return null; 
}
/**
 * 从SessionStorage中获取Token信息
 */
function getToken() {
	return sessionStorage.getItem('ysWXChatUserToken');
}
/**
 * 保存Token到SessionStorage中
 */
function setToken(token) {
	sessionStorage.setItem("ysWXChatUserToken", token);
}
/**
 * 从SessionStorage中获取UserId信息
 */
function getUserId() {
	return sessionStorage.getItem('ysWXChatUserId');
}
/**
 * 保存UserId到SessionStorage中
 */
function setUserId(userId) {
	sessionStorage.setItem("ysWXChatUserId", userId);
}
function getNickName() {
	return sessionStorage.getItem("ysWXNickName");
}
function setNickName(nickname) {
	sessionStorage.setItem("ysWXNickName", nickname);
}
function getHeadImgUrl() {
	return sessionStorage.getItem("ysWXHeadImgUrl");
}
function setHeadImgUrl(headimgurl) {
	sessionStorage.setItem("ysWXHeadImgUrl", headimgurl);
}

function getDialog() {
	if (loadDialog == null) {
		loadDialog = YDUI.dialog;
	}
	return loadDialog;
}
/**
 * 显示数据加载Dialog
 * @returns
 */
function showLoadDialog() {
	getDialog().loading.open('数据加载中');
	console.log("打开数据加载框");
}
/**
 * 关闭数据加载对话框
 * @returns
 */
function closeLoadDialog() {
	//移除loading
	getDialog().loading.close();
	console.log("关闭数据加载框");
}
/**
 * 显示消息提示框
 * @param message
 * @returns
 */
function showAlert(msg) {
	getDialog().alert(msg);
}
/**
 * 显示Toast消息提示
 * @param message
 * @returns
 */
function showToast(msg) {
	getDialog().toast(msg, "success", 1000);
}
/**
 * 显示顶部提示框,5秒后自动关闭
 * @param message
 * @returns
 */
function showNotify(msg) {
	getDialog().notify(msg, 5000);
}
function isNull(value) {
	if (value == null || value == undefined || value == "") {
		return true;
	}
	return false;
}
function isNotNull(value) {
	return !isNull(value);
}
function setPageTitle(headTitle) {
	if (headTitle) {
		$(".navbar-title").text(headTitle);
	}
}
/**
 * 追加页面导航栏方法
 * @param backUrl 返回上一页的URL
 * @param headTitle 页面的Title，为空不显示title
 * @param rightOpt {
 * 	text : 显示文本,
 *  hasIcon : true 或false 设置是否显示右箭头
 *  action ：点击回调事件
 * }
 * @returns
 */
function addMainPageHeader(backUrl, headTitle, rightOpt) {

	var headHtml = [];
	headHtml.push("<header class='m-navbar'>");
	// 返回按钮
	if (backUrl) {
		headHtml.push("<a href='" + backUrl + "' class='navbar-item'><i class='back-ico'></i></a>");
//		XBack.listen(function() {
//			window.location.href=backUrl;
//		});
//	} else {
//		XBack.listen(function() {});
	}
	// title
	headHtml.push("<div class='navbar-center'><span class='navbar-title'></span></div>");
	// 右边按钮
	var rightActionFlag = false;
	if (rightOpt) {
		if (rightOpt.text || rightOpt.action) {
			headHtml.push("<a href='#' class='navbar-item' id='ysYduiNavBarRightBtn'>");
			if (rightOpt.text) {
				headHtml.push(rightOpt.text);
			}
			if (rightOpt.hasIcon == true) {
				//headHtml.push("<i class='next-ico'></i>");
			}
			if ($.isFunction(rightOpt.action)) {
				rightActionFlag = true;
				
			}
			headHtml.push("</a>");
		}
	}
	
	headHtml.push("</header>");

	if ($("section.g-flexview").length == 1) {
		$("section.g-flexview").prepend(headHtml.join(""));
	} else {
		$(document.body).append(headHtml.join(""));
	}
	setPageTitle(headTitle);

	if (rightActionFlag) {
		//$("#ysYduiNavBarRightBtn").unbind("click");
		$("#ysYduiNavBarRightBtn").off().on("click", function() {
			rightOpt.action();
		});
	}
}
/**
 * 追加主页Foot菜单功能
 * @param activeIndex
 * @returns
 */
function addMainPageFooter(activeIndex) {

	if (activeIndex != 2 && activeIndex != 3 && activeIndex != 4) {
		activeIndex = 1;
	}
	var footHtml = [];
	footHtml.push("<footer class='m-tabbar'>");

	// 首页URL
	footHtml.push("<a href='" + urlConstant.urlMainPage + "' class='tabbar-item" + (activeIndex == 1 ? " tabbar-active" : "") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 1) {
		footHtml.push("<img src='/static/images/ysimg/nav_home_highlighted.png'>");
	} else {
		footHtml.push("<img src='/static/images/ysimg/nav_home_default.png'>");
	}

	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>首页</span>");
	footHtml.push("</a>");
	// 沟通URL
	footHtml.push("<a href='" + urlConstant.urlGtPage + "' class='tabbar-item" + (activeIndex == 2 ? " tabbar-active" : "") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 2) {
		footHtml.push("<img src='/static/images/ysimg/nav_goutong_highlighted.png'>");
	} else {
		footHtml.push("<img src='/static/images/ysimg/nav_goutong_default.png'>");
	}
//	footHtml.push("<i class='ys-icons-nav-home'></i>");
	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>沟通</span>");
	footHtml.push("</a>");
	// 学习URL
	footHtml.push("<a href='" + urlConstant.urlStudyPage + "' class='tabbar-item" + (activeIndex == 3 ? " tabbar-active" : "") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 3) {
		footHtml.push("<img src='/static/images/ysimg/nav_study_highlighted.png'>");
	} else {
		footHtml.push("<img src='/static/images/ysimg/nav_study_default.png'>");
	}
//	footHtml.push("<i class='ys-icons-nav-home'></i>");
	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>学习</span>");
	footHtml.push("</a>");

	// 我的URL
	footHtml.push("<a href='" + urlConstant.urlMyPage + "' class='tabbar-item" + (activeIndex == 4 ? " tabbar-active" : "") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 4) {
		footHtml.push("<img src='/static/images/ysimg/nav_my_highlighted.png'>");
	} else {
		footHtml.push("<img src='/static/images/ysimg/nav_my_default.png'>");
	}
//	footHtml.push("<i class='demo-icons-weixin'></i>");
	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>我的</span>");
	footHtml.push("</a>");

	// 帮助
//	footHtml.push("<a href='/ydui/index.html' class='tabbar-item" + (activeIndex == 4 ? " tabbar-active" : "") + "'>");
//	footHtml.push("<span class='tabbar-icon'>");
//	footHtml.push("<i class='demo-icons-weixin'></i>");
//	footHtml.push("</span>");
//	footHtml.push("<span class='tabbar-txt'>帮助</span>");
//	footHtml.push("</a>");

	footHtml.push("</footer>");

	if ($(".g-flexview").length == 1) {
		$(".g-flexview").append(footHtml.join(""));
	} else {
		$(document.body).append(footHtml.join(""));
	}
    
}

/**
 * 显示科目选择弹出框
 * @param backsetHandler 选择科目时，回调函数Handler，回调时两个参数，1是code，2是科目名
 */
function showSubjectPicker(backsetHandler) { // TODO APP
/*	$("#ysYduiNavBarRightBtn").css({"background-image":"url(/static/images/homework/popup_up@2x.png)"});	
	if (!$.isFunction(backsetHandler)) {
		showAlert("科目选择对话框回调函数设置不正确。");
		return;
	}
	// 刷新后台科目数据，设置科目选项列表
	ysAjax("/common/getsubject", {}, function(data) {
		// stt-PC测试用
//		var subject = ['数学','语文','地理','政治','生物','英语'];
		var subjectTitle = $("#ysYduiNavBarRightBtn").text();
		var html = [];
		// 初始化显示topsheet样式
		html.push("<div class='m-topsheet' id='ysSubjectTopSheet'>");
		// 采用3Grid网格显示数据
		html.push("<ul class='m-grids-3'>");
		if (subjectTitle == "全部科目") {
			html.push("<li class='grids-item' data-code='9999'><div class='grids-txt'><a class='selected'>全部科目</a></div></li>");
		} else {
			html.push("<li class='grids-item' data-code='9999'><div class='grids-txt'><a class='item'>全部科目</a></div></li>");
		}
		for (var i = 0 ; i < data.result.length; i++) {
			// 设置动态选择数据
//			html.push("<li class='grids-item' data-code='" + data.result[i].value + "'><div class='grids-txt'>" + data.result[i].label + "</div></li>");
			if(subjectTitle == data.result[i].label){
				html.push("<li class='grids-item' data-code='" + data.result[i].value + "'><div class='grids-txt'><a class='selected'>" + data.result[i].label + "</a></div></li>");
			}else{
				html.push("<li class='grids-item' data-code='" + data.result[i].value + "'><div class='grids-txt'><a class='item'>" + data.result[i].label + "</a></div></li>");
			}
			// stt-PC测试用
//			if(subjectTitle == subject[i]){
//				html.push("<li class='grids-item' data-code='" + subject[i] + "'><div class='grids-txt'><a class='selected'>" + subject[i] + "</a></div></li>");
//			}else{
//				html.push("<li class='grids-item' data-code='" + subject[i] + "'><div class='grids-txt'><a class='item'>" + subject[i] + "</a></div></li>");
//			}
		}
		html.push("</ul>");
		html.push("</div>");
		// 追加显示数据
		$(document.body).append(html.join(""));
		// 调用TopSheet显示事件
		$("#ysSubjectTopSheet").topsheet('open');
		// stt-mask
		$(".mask-black-dialog").css("top", $(".m-navbar").height()).css("z-index","900").show();
		// 设置科目选择点击事件
		$("#ysSubjectTopSheet li.grids-item").on("click", function() {
			backsetHandler($(this).data("code"), $(this).text());
			$("#ysSubjectTopSheet").topsheet('close');
		});
		// 关闭TopSheet时，移除选择HtmlContext
		$("#ysSubjectTopSheet").on('close.ydui.topsheet', function () {
            $("#ysSubjectTopSheet").remove();
            // stt-mask
            $(".mask-black-dialog").hide();
        });
        if ($(".m-navbar")) {
        	$(".mask-black").css("top", $(".m-navbar").height());
        	$("#ysSubjectTopSheet").css("top", $(".m-navbar").height());
        }
        
	});*/
	
}

/**
 * 初始化关系选择时间
 * @param valueId 保存关系Code的hidden控件的ID
 * @param labelId 显示关系名称的Div或Label的控件ID
 */
function initRelationshipSelect(valueId, labelId, callbackHandler) { // TODO APP
	/*if ($(".ysIosSelectContainer").length == 0) {
		$(document.body).append("<div class='ysIosSelectContainer'></div>");
	}

	ysAjax("/common/getcode/relationship", {}, function(data) {
		var selRelationShipData=[];
		for (var i = 0 ; i < data.result.length; i++) {
			selRelationShipData.push({'id': data.result[i].value, 'value' : data.result[i].label});
		}
		$("#" + labelId).on("click", function() {
			var _val = $("#" + valueId).val();

			var example = new IosSelect(1,               // 第一个参数为级联层级，演示为1
				[selRelationShipData],                             // 演示数据
				{
					container: '.ysIosSelectContainer',             // 容器class
					title: '选择关系',                    // 标题
					itemHeight: 50,                      // 每个元素的高度
					itemShowCount: 5,                    // 每一列显示元素个数，超出将隐藏
					oneLevelId: _val,                     // 第一级默认值
					callback: function (selectOneObj) {  // 用户确认选择后的回调函数
						$("#" + valueId).val(selectOneObj.id)
						$("#" + labelId).text(selectOneObj.value);
						if ($.isFunction(callbackHandler)) {
							callbackHandler();
						}
					}
				});
		});
		
	});*/
}

/**
 * 初始化关系选择时间
 * @param valueId 保存关系Code的hidden控件的ID
 * @param labelId 显示关系名称的Div或Label的控件ID
 */
function initBirthdayYearSelect(yearId, callbackHandler) {
	if ($(".ysIosSelectContainer").length == 0) {
		$(document.body).append("<div class='ysIosSelectContainer'></div>");
	}

	var nowDate = new Date();

	var selYearData=[];
	for (var i = 1940 ; i <= nowDate.getFullYear(); i++) {
		selYearData.push({'id': i, 'value' : i});
	}
	$("#" + yearId).on("click", function() {
		var _val = $("#" + yearId).text();
		if (_val == "") {
			_val = new Date().getFullYear();
		}

		var example = new IosSelect(1,               // 第一个参数为级联层级，演示为1
			[selYearData],                             // 演示数据
			{
				container: '.ysIosSelectContainer',             // 容器class
				title: '选择出生年',                    // 标题
				itemHeight: 50,                      // 每个元素的高度
				itemShowCount: 5,                    // 每一列显示元素个数，超出将隐藏
				oneLevelId: _val,                     // 第一级默认值
				callback: function (selectOneObj) {  // 用户确认选择后的回调函数
					$("#" + yearId).val(selectOneObj.id)
					$("#" + yearId).text(selectOneObj.value);
					if ($.isFunction(callbackHandler)) {
						callbackHandler();
					}
				}
			});
	});

}
/**
 * added by stt 埋点
 * @param {Object} classify_flag
 */
function buriedPoint(classify_flag){ // TODO APP
//	ysAjax("/medal/statistics_data",{
//			classify_flag: classify_flag
//		}, function(data) {
//		}, function(err) {
//			showAlert('服务器异常，请稍后重试');
//	});
}
/**
 * 禁用手机自带返回键
 */
XBack = {};

(function(XBack) {
	XBack.STATE = 'x - back';
	XBack.element;

	XBack.onPopState = function(event) {
			event.state === XBack.STATE && XBack.fire();
			XBack.record(XBack.STATE); //初始化事件时，push一下
	};

	XBack.record = function(state) {
		history.pushState(state, null, location.href);
	};

	XBack.fire = function() {
		var event = document.createEvent('Events');
		event.initEvent(XBack.STATE, false, false);
		XBack.element.dispatchEvent(event);
	};

	XBack.listen = function(listener) {
		XBack.element.addEventListener(XBack.STATE, listener, false);
	};

	XBack.init = function() {
		XBack.element = document.createElement('span');
		window.addEventListener('popstate', XBack.onPopState);
		XBack.record(XBack.STATE);
	};

})(XBack); 