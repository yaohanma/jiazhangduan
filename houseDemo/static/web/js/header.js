$(document).ready(function () {
	
	
	ajaxHtml("/webpage/common/header.html", null, function(html){
   		
		$(".header").html(html);
   	}, false);
	$("#logout_btn").click(function () {
		var token = getToken();
        ajaxData('/sys/login/logout', {param:token},
            function (data) {
                if (data.success) {
                    resetSessionUserInfo();
                    window.location.href = '/webpage/login.html';
                }
            }, null, 'json', null);
    });
})

