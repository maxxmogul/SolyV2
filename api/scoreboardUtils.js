
document.addEventListener("DOMContentLoaded", function() {

	window.getUsername = function(){
		var username = $("#username").val();

		if(username.trim().length <= 0){ 
			$(".err-msg").show(); 
		}
		else{
			window.SCORE_DATA.name = username;
			$(".api-container").hide();
		}
	}

	window.SCORE_DATA = { name: null, score: 0 }
	
});