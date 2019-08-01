// 提交flag
var submitFlag = false;
var contextPath = "/backstage";

$(document).ready(function () {
    // 验证组件初始化 update by wl
    $.validator.setDefaults({
        ignore: ":hidden:not(select,[type='checkbox'])",
        validClass: "has-success",
        errorPlacement: function (error, element) {
            if ($(element).parent().hasClass("input-group")) {
                $(element).closest(".input-group").after(error);
            } else {
                $(element).parent().append(error);
            }
        },
        errorClass: "help-block",
        errorElement: "span",
        focusCleanup: false,
        focusInvalid: true,
        highlight: function (element, errorClass, validClass) {
            return $(element).parents(".form-group:first").addClass(
                "has-error");
        },
        unhighlight: function (element, errorClass, validClass) {
            return $(element).parents(".form-group:first").removeClass(
                "has-error");
        }
    });
})
/**
 * 画面ajax提交回调
 *
 * @param sUrl
 *            提交URL
 * @param iFormIndex
 *            提交画面form的索引
 * @param sDataType
 *            返回数据类型
 * @param fSuccess
 *            提交成功回调函数
 */
function ajaxSubmitFormCallback(sUrl, iFormIndex, sDataType, fSuccess, fCustomAjaxSetting) {
    var ajaxSettings = getAjaxGlobalSettings();
    if (fCustomAjaxSetting != null && fCustomAjaxSetting != undefined) {
        window[fCustomAjaxSetting(ajaxSettings)];
    }
    ajaxSettings.url = contextPath + sUrl;
    ajaxSettings.dataType = sDataType;
    var context = new Object();
    context.dataType = ajaxSettings.dataType;
    if ("html" == sDataType) {
        context.htmlArea = $("#main");
        ajaxSettings.context = context;
    } else {
        context.callBackFunc = fSuccess;
        ajaxSettings.context = context;
    }
    $(document.forms[iFormIndex]).ajaxSubmit(ajaxSettings);
}
/**
 * 画面不刷新提交
 *
 * @param sUrl
 *            提交URL
 * @param sConfMsg
 *            确认消息
 * @param fSuccess
 *            提交成功回调函数
 * @param iFormIndex
 *            提交画面form的索引
 * @returns {Boolean}
 */
function ajaxSubmitForm(sUrl, sConfMsg, fSuccess, iFormIndex,
                        fCustomAjaxSetting) {
    if (submitFlag) {
        return false;
    }
    if (iFormIndex == undefined) {
        iFormIndex = 0;
    }
    if (sConfMsg) {
        layer.confirm(sConfMsg, {
            icon: 3
        }, function (index) {
            submitFlag = true;
            layer.close(index);
            ajaxSubmitFormCallback(sUrl, iFormIndex, "json", fSuccess,
                fCustomAjaxSetting);
        });
    } else {
        submitFlag = true;
        ajaxSubmitFormCallback(sUrl, iFormIndex, "json", fSuccess,
            fCustomAjaxSetting);
    }
    return false;
}
                        
function getAjaxGlobalSettings() {
    // 设置ajax全局请求参数
    var ajaxSettings = {
        url: "",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        headers: getHeaderParam(),
        async: true,
        cache: false,
        crossDomain: true,
        global: false,
        beforeSend: globalAjaxBeforeSend,
        success: globalAjaxSuccess,
        error: globalAjaxError,
        complete: globalAjaxComplete
    };
    return ajaxSettings;
}

/**
 * ajax提交前回调函数
 *
 * @param xhr
 *            XMLHttpRqeust对象
 */
function globalAjaxBeforeSend(xhr) {
    // 加遮罩
    // addLoading();
    //showLoading();
}
/**
 * ajax提交成功回调函数
 *
 * @param response
 *            服务器返回数据
 * @param textStatus
 *            状态码
 * @param jqXHR
 *            jquery的XMLHttpRqeust对象
 * @returns
 */
function globalAjaxSuccess(response, textStatus, jqXHR) {
    if (response.success == false) {
        if (response.errorCode == '401') {
            alert(response.errorMsg);
            top.window.location.reload();
            return;
        } else {
            //popAlert(response.errorMsg);
            //return;
        }
    } else if (textStatus != "success") {
        popAlert("系统出现异常，请稍后再试。");
        location.href = "/html/login.html";
        return;
    }
    if (this.dataType == "html") {
        if (this.htmlArea != null && this.htmlArea != undefined) {
            this.htmlArea.html(response);
            return;
        } else if (this.callBackFunc != null && this.callBackFunc != undefined) {
            this.callBackFunc(response);
        }
    } else if (this.dataType == "json") {
        if (this.callBackFunc != null && this.callBackFunc != undefined) {
            this.callBackFunc(response);
        }
    }
}
/**
 * ajax提交出错回调函数
 *
 * @param xhr
 *            XMLHttpRqeust对象
 * @param textStatus
 *            状态码
 * @param errorThrown
 *            异常对象
 */
function globalAjaxError(xhr, textStatus, errorThrown) {
    var error = sessionStorage.getItem("timeoutError");
    if (xhr.status == 300) {
        resetSessionUserInfo();// form common.js
        popAlert("登录超时，请重新登录！");
        location.href = "/webpage/login.html";
    } else if (xhr.status == 305) {
        alert("没有权限，请联系管理员");
        /*window.history.back(-1);*/
    } else if (xhr.status == 308 && !error) {
    	resetSessionUserInfo();
        alert("登录超时，请重新登录");
        sessionStorage.setItem("timeoutError", true);
        location.href = '/webpage/login.html';
    } else if (!error){
        console.log(xhr.url + "|" + textStatus + "|" + errorThrown);
        //popAlert("系统出现异常，请稍后再试。");
    } else if (error) {
        resetSessionUserInfo();
        location.href = '/webpage/login.html';
    }
}

/**
 * ajax提交完成回调函数
 *
 * @param xhr
 *            XMLHttpRqeust对象
 * @param textStatus
 *            状态码
 */
function globalAjaxComplete(xhr, textStatus) {
    // 删除遮罩
    // removeLoading();
    //closeLoading();
    // 重置提交flag
    submitFlag = false;
}

/**
 * 弹出警告
 * @param info
 * 提示信息
 */
function popAlert(info) {
    layer.alert(info);
}

/**
 * 操作提示
 * @param str 提示内容
 * @param num 1：蓝色V图标，2：红色x图标
 * @param time 默认3s
 * @param callBack 回调函数
 * @returns
 */
function autoSuccess(str, num, time, callBack) {
    layer.msg(str, {
        icon: num,
        time: time
        // 2秒关闭（如果不配置，默认是3秒）
    }, callBack)
}

function getHeaderParam() {
    var param = {};
    var token = getToken();
    if (token) {
        param.token = token;
    }
    var userId = getUserId();
    if (userId) {
        param.userid = userId;
    }
    return param;
}

function resetSessionUserInfo() {
    setUserId("");
    setToken("");
    setLeftMenuCode("");
}

/**
 * 从SessionStorage中获取Token信息
 */
function getToken() {
    return sessionStorage.getItem('userToken');
}

/**
 * 保存Token到SessionStorage中
 */
function setToken(token) {
    sessionStorage.setItem("userToken", token);
}

/**
 * 从SessionStorage中获取UserId信息
 */
function getUserId() {
    return sessionStorage.getItem('userId');
}

/**
 * 保存UserId到SessionStorage中
 */
function setUserId(userId) {
    sessionStorage.setItem("userId", userId);
}

/**
 * 获取地址中的参数
 * @param name 参数名称
 * @returns {null}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(decodeURI(r[2]));
    } else {
        return null
    }
}

function ajaxHtml(sUrl, oParameters, fSuccess, async, cache) {
    var ajaxSettings = getAjaxGlobalSettings();
    ajaxSettings.url = sUrl;
    ajaxSettings.data = oParameters;
    if (cache != undefined && cache != null) {
        ajaxSettings.cache = cache;
    }
    if (async != undefined && async != null) {
        ajaxSettings.async = async;
    }
    ajaxSettings.beforeSend = globalAjaxBeforeSend;
    ajaxSettings.complate = globalAjaxBeforeSend;
    ajaxSettings.dataType = "html";
    ajaxSettings.type = "get";
    var context = new Object();
    context.dataType = "html";
    context.callBackFunc = fSuccess;
    ajaxSettings.context = context;
    $.ajax(ajaxSettings);
}

/**
 * ajax请求数据
 *
 * @param sUrl
 *            请求URL
 * @param oParameters
 *            请求参数
 * @param fSuccess
 *            请求成功回调函数
 * @param sContentType
 *            请求类型(默认from类型)
 * @param sDataType
 *            响应类型(默认json类型)
 */
function ajaxData(sUrl, oParameters, fSuccess, sContentType, sDataType, fCustomAjaxSetting, async) {
    var ajaxSettings = getAjaxGlobalSettings();
    if (fCustomAjaxSetting != null && fCustomAjaxSetting != undefined) {
        window[fCustomAjaxSetting(ajaxSettings)];
    }
    ajaxSettings.url = contextPath + sUrl;
    ajaxSettings.data = oParameters;
    if (sContentType != null && sContentType != undefined) {
        ajaxSettings.contentType = sContentType;
    }
    if (async != null && async != undefined) {
        ajaxSettings.async = async;
    }
    if (sDataType != null && sDataType != undefined) {
        ajaxSettings.dataType = sDataType;
    }
    var context = new Object();
    context.dataType = ajaxSettings.dataType;
    context.callBackFunc = fSuccess;
    context.headers = ajaxSettings.headers;
    ajaxSettings.context = context;
    $.ajax(ajaxSettings);
}

/**
 * 保存左侧活动菜单-code
 * @param code
 */
function setLeftMenuCode(code) {
    sessionStorage.setItem("leftMenuActiveCode", code);
}
/**
 * 获取左侧活动菜单code
 */
function getLeftMenuCode() {
    return sessionStorage.getItem("leftMenuActiveCode");
}