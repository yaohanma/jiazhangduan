// URL常亮定义参数
var urlConstant = {
	// 首页URL
	urlMainPage: "/html/common/homepage.html",
	// 学习URL
	urlStudyPage: "/html/study/study_index.html",
	// 我的URL
	urlMyPage: "/html/my/my_home.html",
	//资源
	//urlziyuanPage: "/html/my/ziyuan.html",
	//沟通
	//urlgoutongPage: "/html/my/goutong.html"
};

// 数据加载Dialog
var loadDialog = null;
// 返回URL
var meURL = null;


$(function() {

	// 禁用虚拟按键
	// XBack.init();
	// 横屏操作提示竖屏
	// 	if (window.orientation != undefined) {
	// 		if (window.orientation != 0) {
	// 
	// 			var obj = document.getElementById('orientation');
	// 			showAlert('横屏内容太少啦，请使用竖屏观看！');
	// 			obj.style.display = 'block';
	// 		}
	// 
	// 		window.onorientationchange = function() {
	// 			var obj = document.getElementById('orientation');
	// 			if (window.orientation == 0) {
	// 				obj.style.display = 'none';
	// 			} else {
	// 				showAlert('横屏内容太少啦，请使用竖屏观看！');
	// 				obj.style.display = 'block';
	// 			}
	// 		};
	// 	}
	// 
	// 	// offline网络连接事件
	// 	window.addEventListener("offline", function() {
	// 		getDialog().alert('网络已断开，请连接网络后重新进入应用', function() {
	// 			WeixinJSBridge.call('closeWindow');
	// 		});
	// 	});

	// 关闭加载框
	closeLoadDialog();
	//安卓虚拟按键
	androidBack();
	(!YDUI.device.isMobile && navigator.userAgent.indexOf('Firefox') >= 0) && YDUI.dialog.alert('PC端请使用谷歌内核浏览器查看！');
});

function androidBack() {

	window.apiready = function() {
		api.addEventListener({
			name: 'keyback'
		}, function(ret, err) {
			if ($("#YDUI_CONFRIM").length > 0) {				
				closeYduiDialog("YDUI_CONFRIM");
				return;
			} else if ($("#YDUI_ALERT").length > 0) {
				closeYduiDialog("YDUI_ALERT");
				return;
			}
			// loading
			if($("#YDUI_LOADING").length > 0) {
				closeLoadDialog();
				return;
			}
			// 出生年，关系选择
			if($(".ysIosSelectContainer").length > 0) {
				if($(".ysIosSelectContainer").children().length > 0) {
					$(".ysIosSelectContainer").empty();
					return;
				}
			}
			// 所在地区
			if($('#J_Address2').length > 0) {
				if($(".brouce-in").length > 0) {
					$('#J_Address2').citySelect('close');
					return;
				}
			}
			// 邀请家人
			if($('#J_ActionSheet').hasClass("actionsheet-toggle")) {
				$('#J_ActionSheet').actionSheet('close');
				return;
			}
			// 科目
			if($("#ysSubjectTopSheet").length > 0) {
				$("#ysSubjectTopSheet").topsheet('close');
				return;
			}
			// 图片预览
			if($("#ImgZoomInImage").length > 0) {
				if($("#ImgZoomInImage")[0].style.display != 'none') {
					$('#ImgZoomInImage').hide();
					$('#ImgZoomInBG').hide();
					document.ontouchstart=function(){
						return true;
					}
					return;
				}
			}
			
			var url = window.location.href;
			var num = url.lastIndexOf('/') + 1;
			var numHtml = url.lastIndexOf('.') + 5;
			var name = url.substring(num, numHtml);
			if (name == "homepage.html" || name == "study_index.html" || name == "my_home.html") {
				api.toast({
					msg: '再点一次退出鹰硕家校通',
					duration: 1000,
					location: 'middle'
				});
				api.addEventListener({
					name: 'keyback'
				}, function(ret, err) {
					removeToken();
					removeUserId();
					logoutParent();
				});
			} else if (name == "login_index.html") {
				api.sendEvent({
					name: 'backTeacher'
				});
			} else if (name == "login2.html") {
				window.location.href = '/html/login/login_index.html';
			} else {
				// window.history.go(-1);
				window.location.href = meURL;
			}
		});
		//网络监听
		api.addEventListener({
			name: 'offline'
		}, function(ret, err) {
			api.toast({
				msg: '网络已断开，请连接网络后使用',
				duration: 1000,
				location: 'middle'
			});
			addNoNetwork();
		});

		api.addEventListener({
			name: 'online'
		}, function(ret, err) {
			api.toast({
				msg: '网络已链接，请使用',
				duration: 1000,
				location: 'middle'
			});
			location.reload();
		});
	}
}

function closeYduiDialog(ID) {
	window.YDUI.util.pageScroll.unlock();
	$("#" + ID).remove();
}

function logoutParent() {
	api.sendEvent({
		name: 'quitParent'
	});
}

function ysAjax(url, param, successHandler, errorHandler) {
	/*非首页不显示加载框added by stt start*/
	if (param.hasOwnProperty("page") && param.hasOwnProperty("pageFlag")) {
		if (param.page <= 1) {
			showLoadDialog();
		}
	} else {
		showLoadDialog();
	}
	/*added by stt end*/
	// end
	$.ajax({
		method: "POST",
		url: ysServerAddr + url,
		data: param,
		headers: getHeaderParam(),
		dataType: "json",
		success: function(data) {
			// 显示加载框
			closeLoadDialog();
			if (data.success) {
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			} else if (data.errorCode == "ERR_001") {
				// 权限认证错误，提示错误信息
				//				showNotify(data.errorCode + ":" + data.errorMsg);
				getDialog().alert('已经超期请重新进入应用', function() {
					//					WeixinJSBridge.call('closeWindow');
					removeToken();
					removeUserId();
					logoutParent();
					window.location.href = '/html/login/login_index.html'
				});
			} else {
				// 应用逻辑判断错误，返回Handler自主处理
				if ($.isFunction(successHandler)) {
					successHandler(data);
				}
			}
		},
		error: function(event, xhr, options) {
			// 关闭加载框
			closeLoadDialog();
			showAlert(xhr.status + ":" + xhr.statusText);
			if ($.isFunction(errorHandler)) {
				errorHandler(event, xhr, options);
			}
		}
	});
}

function ysAjaxSynchro(url, param, successHandler, errorHandler) {
	showLoadDialog();
	// end
	$.ajax({
		method: "POST",
		url: ysServerAddr + url,
		data: param,
		headers: getHeaderParam(),
		dataType: "json",
		async: false,
		success: function(data) {
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
		error: function(event, xhr, options) {
			// 关闭加载框
			closeLoadDialog();
			showAlert(xhr.status + ":" + xhr.statusText);
			if ($.isFunction(errorHandler)) {
				errorHandler(event, xhr, options);
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
	//	return sessionStorage.getItem('ysWXChatUserToken');
	return localStorage.getItem('ysWXChatUserToken')
}
/**
 * 保存Token到SessionStorage中
 */
function setToken(token) {
	//	sessionStorage.setItem("ysWXChatUserToken", token);
	localStorage.setItem("ysWXChatUserToken", token);
}
/**
 * 从SessionStorage中获取UserId信息
 */
function getUserId() {
	//	return sessionStorage.getItem('ysWXChatUserId');
	return localStorage.getItem('ysWXChatUserId');
}
/**
 * 保存UserId到SessionStorage中
 */
function setUserId(userId) {
	//	sessionStorage.setItem("ysWXChatUserId", userId);
	localStorage.setItem("ysWXChatUserId", userId);

}
//  清除userid信息 added by stt 20190508
function removeUserId() {
	localStorage.removeItem("ysWXChatUserId");
}
// 清除token信息 added by stt 20190508
function removeToken() {
	localStorage.removeItem("ysWXChatUserToken");
}

function getNickName() {
	//	return sessionStorage.getItem("ysWXNickName");
	return localStorage.getItem('ysWXNickName');
}

function setNickName(nickname) {
	//	sessionStorage.setItem("ysWXNickName", nickname);
	localStorage.setItem("ysWXNickName", nickname);
}

function getHeadImgUrl() {
	//	return sessionStorage.getItem("ysWXHeadImgUrl");
	return localStorage.getItem("ysWXHeadImgUrl");
}

function setHeadImgUrl(headimgurl) {
	//	sessionStorage.setItem("ysWXHeadImgUrl", headimgurl);
	localStorage.setItem("ysWXHeadImgUrl", headimgurl);
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
	meURL = backUrl;
	headHtml.push("<header class='m-navbar'>");
	// 返回按钮
	if (backUrl) {
		if (backUrl == 'switch') {
			headHtml.push("<a class='navbar-item' id='switchId'><i class='switching_btn'>切换身份</i></a>"); //我的header 修改	
		} else {
			headHtml.push("<a href='" + backUrl + "' class='navbar-item'><i class='back-ico'></i></a>");
		}
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
				if (rightOpt.text == '语文') {
					headHtml.push(getSubject());
				} else {
					headHtml.push(rightOpt.text);
				}
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
 * 追加无网络页面
 * @returns
 */
function addNoNetwork() {
	var headHtml = [];
	headHtml.push('<section class="g-flexview">');
	headHtml.push('<section class="g-scrollview">');
	headHtml.push('<div class="nonetwork">');
	headHtml.push('<div class="bg_img">');
	headHtml.push(
		'<svg class="img" version="1.1" id="Layer_1"  x="0px" y="0px" width="300px" height="213px" viewBox="0 0 300 213" enable-background="new 0 0 300 213" xml:space="preserve">  <image id="image0" width="300" height="213" x="0" y="0"\n' +
		'    href="data:image/png;base64,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" />\n' +
		'</svg>');
	headHtml.push('</div>');
	headHtml.push('<p>网络不给力哦，请稍后再试</p>');
	headHtml.push('<a href="javascript:void(0)" onclick="reload()">重新加载</a>');
	headHtml.push('</div>');
	headHtml.push('</section>');
	headHtml.push('</section>');
	//清空页面内容
	document.body.innerHTML = "";
	$(document.body).append(headHtml.join(""));
}

function reload() {
	api.toast({
		msg: '网络已断开，请连接网络后使用',
		duration: 2000,
		location: 'middle'
	});
}

/**
 * 追加主页Foot菜单功能
 * @param activeIndex
 * @returns
 */
function addMainPageFooter(activeIndex) {

	if (activeIndex != 2 && activeIndex != 3 && activeIndex != 4 && activeIndex != 5) {
		activeIndex = 1;
	}
	var footHtml = [];
	footHtml.push("<footer class='m-tabbar'>");

	// 首页URL
	footHtml.push("<a href='" + urlConstant.urlMainPage + "' class='tabbar-item" + (activeIndex == 1 ? " tabbar-active" :
		"") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 1) {
		footHtml.push(
			'<span style="background: url(/static/images/ysimg/nav_home_highlighted.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);

	} else {
		footHtml.push(
			'<span style="background: url(/static/images/ysimg/nav_home_default.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);
		//	
	}

	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>首页</span>");
	footHtml.push("</a>");
	// 沟通URL
//	footHtml.push("<a href='" + urlConstant.urlgoutongPage + "' class='tabbar-item" + (activeIndex == 2 ? " tabbar-active" :
//		"") + "'>");
//	footHtml.push("<span class='tabbar-icon'>");
//	if (activeIndex == 2) {
//		footHtml.push(
//			'<span style="background: url(/static/images/ysimg/nav_goutong_highlighted.png)no-repeat;background-position: center;background-size: 100%;"></span>'
//		);
//
//	} else {
//		footHtml.push(
//			'<span style="background:  url(/static/images/ysimg/nav_goutong_default.png)no-repeat;background-position: center;background-size: 100%;"></span>'
//		);
//	}
//		footHtml.push("<i class='ys-icons-nav-home'></i>");
//	footHtml.push("</span>");
//	footHtml.push("<span class='tabbar-txt'>沟通</span>");
//	footHtml.push("</a>");


	// 资源URL
//	footHtml.push("<a href='" + urlConstant.urlziyuanPage + "' class='tabbar-item" + (activeIndex == 3 ? " tabbar-active" :
//		"") + "'>");
//	footHtml.push("<span class='tabbar-icon'>");
//	if (activeIndex == 3) {
//		footHtml.push(
//			'<span style="background: url(/static/images/ysimg/ziyuan_highlighted.png)no-repeat;background-position: center;background-size: 100%;"></span>'
//		);
//
//	} else {
//		footHtml.push(
//			'<span style="background:  url(/static/images/ysimg/ziyuan_default.png)no-repeat;background-position: center;background-size: 100%;"></span>'
//		);
//	}
//		footHtml.push("<i class='ys-icons-nav-home'></i>");
//	footHtml.push("</span>");
//	footHtml.push("<span class='tabbar-txt'>资源</span>");
//	footHtml.push("</a>");


	// 学习URL
	footHtml.push("<a href='" + urlConstant.urlStudyPage + "' class='tabbar-item" + (activeIndex == 4 ? " tabbar-active" :
		"") + "'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 4) {
		footHtml.push(
			'<span style="background: url(/static/images/ysimg/nav_study_highlighted.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);

	} else {
		footHtml.push(
			'<span style="background:  url(/static/images/ysimg/nav_study_default.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);

	}
	//	footHtml.push("<i class='ys-icons-nav-home'></i>");
	footHtml.push("</span>");
	footHtml.push("<span class='tabbar-txt'>学习</span>");
	footHtml.push("</a>");

	// 我的URL
	footHtml.push("<a href='" + urlConstant.urlMyPage + "' class='tabbar-item" + (activeIndex == 5 ? " tabbar-active" : "") +
		"'>");
	footHtml.push("<span class='tabbar-icon'>");
	if (activeIndex == 5) {
		footHtml.push(
			'<span style="background:url(/static/images/ysimg/nav_my_highlighted.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);

	} else {
		footHtml.push(
			'<span style="background:url(/static/images/ysimg/nav_my_default.png)no-repeat;background-position: center;background-size: 100%;"></span>'
		);

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
 * added by stt 20190627 错题本、日常成绩科目名称特殊处理
 */
function getSubject() {
	var subjectName = '';
	ysAjaxSynchro("/common/getsubject", {}, function(data) {
		if (data.result != undefined && data.result != null && data.result != '' && data.result.length > 0) {
			subjectName = '语文';
		} else {
			subjectName = '全部科目';
		}
	}, function(err) {
		subjectName = '全部科目';
	});
	return subjectName;
}
/**
 * 显示科目选择弹出框
 * @param backsetHandler 选择科目时，回调函数Handler，回调时两个参数，1是code，2是科目名
 */
function showSubjectPicker(backsetHandler) {
	$("#ysYduiNavBarRightBtn").css({
		"background-image": "url(/static/images/homework/popup_up@2x.png)"
	});
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
		for (var i = 0; i < data.result.length; i++) {
			// 设置动态选择数据
			//			html.push("<li class='grids-item' data-code='" + data.result[i].value + "'><div class='grids-txt'>" + data.result[i].label + "</div></li>");
			if (subjectTitle == data.result[i].label) {
				html.push("<li class='grids-item' data-code='" + data.result[i].value +
					"'><div class='grids-txt'><a class='selected'>" + data.result[i].label + "</a></div></li>");
			} else {
				html.push("<li class='grids-item' data-code='" + data.result[i].value +
					"'><div class='grids-txt'><a class='item'>" + data.result[i].label + "</a></div></li>");
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
		$(".mask-black-dialog").css("top", $(".m-navbar").height()).css("z-index", "900").show();
		// 设置科目选择点击事件
		$("#ysSubjectTopSheet li.grids-item").on("click", function() {
			backsetHandler($(this).data("code"), $(this).text());
			$("#ysSubjectTopSheet").topsheet('close');
		});
		// 关闭TopSheet时，移除选择HtmlContext
		$("#ysSubjectTopSheet").on('close.ydui.topsheet', function() {
			$("#ysSubjectTopSheet").remove();
			// stt-mask
			$(".mask-black-dialog").hide();
		});
		if ($(".m-navbar")) {
			$(".mask-black").css("top", $(".m-navbar").height());
			$("#ysSubjectTopSheet").css("top", $(".m-navbar").height());
		}

	});

}

/**
 * 初始化关系选择时间
 * @param valueId 保存关系Code的hidden控件的ID
 * @param labelId 显示关系名称的Div或Label的控件ID
 */
function initRelationshipSelect(valueId, labelId, callbackHandler) {
	if ($(".ysIosSelectContainer").length == 0) {
		$(document.body).append("<div class='ysIosSelectContainer'></div>");
	}

	ysAjax("/common/getcode/relationship", {}, function(data) {
		var selRelationShipData = [];
		for (var i = 0; i < data.result.length; i++) {
			selRelationShipData.push({
				'id': data.result[i].value,
				'value': data.result[i].label
			});
		}
		$("#" + labelId).on("click", function() {
			var _val = $("#" + valueId).val();

			var example = new IosSelect(1, // 第一个参数为级联层级，演示为1
				[selRelationShipData], // 演示数据
				{
					container: '.ysIosSelectContainer', // 容器class
					title: '选择关系', // 标题
					itemHeight: 50, // 每个元素的高度
					itemShowCount: 5, // 每一列显示元素个数，超出将隐藏
					oneLevelId: _val, // 第一级默认值
					callback: function(selectOneObj) { // 用户确认选择后的回调函数
						$("#" + valueId).val(selectOneObj.id)
						$("#" + labelId).text(selectOneObj.value);
						if ($.isFunction(callbackHandler)) {
							callbackHandler();
						}
					}
				});
		});

	});
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

	var selYearData = [];
	for (var i = 1940; i <= nowDate.getFullYear(); i++) {
		selYearData.push({
			'id': i,
			'value': i
		});
	}
	$("#" + yearId).on("click", function() {
		var _val = $("#" + yearId).text();
		if (_val == "") {
			_val = new Date().getFullYear();
		}

		var example = new IosSelect(1, // 第一个参数为级联层级，演示为1
			[selYearData], // 演示数据
			{
				container: '.ysIosSelectContainer', // 容器class
				title: '选择出生年', // 标题
				itemHeight: 50, // 每个元素的高度
				itemShowCount: 5, // 每一列显示元素个数，超出将隐藏
				oneLevelId: _val, // 第一级默认值
				callback: function(selectOneObj) { // 用户确认选择后的回调函数
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
function buriedPoint(classify_flag) {
	ysAjax("/mob/medal/statistics_data", {
		classify_flag: classify_flag
	}, function(data) {}, function(err) {
		showAlert('服务器异常，请稍后重试');
	});
}

/**
 * 禁用手机自带返回键
 */
XBack = {};

(function(XBack) {
	XBack.STATE = 'xback';
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
