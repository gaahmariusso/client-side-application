$( "#form_usu" ).submit(function() {
	
	var user = $('#form_usu #user').val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/users/"+user,
		statusCode: {
			404: function(request, status, error) {
				console.log("404 - Not Found");
	            console.log(error);
				// var modal = document.getElementById('myModal');
				// var btn = document.getElementById("btn_search");
				// var span = document.getElementsByClassName("close")[0];
				// btn.onclick = function() {
    // 			modal.style.display = "block";
				// }
				// span.onclick = function() {
    // 			modal.style.display = "none";
				// }
				// window.onclick = function(event) {
				//     if (event.target == modal) {
				//         modal.style.display = "none";
				//     }
				// }
			},
			403: function(request, status, error) {
				console.log("403 - Not Found");
	            console.log(error);
	        }
		}
	}).done(function(result) {

		$("#avatar_url").attr("src",result.avatar_url).attr("height",150);
		$("#followers").text(result.followers);
		$("#following").text(result.following);
		$("#email").text(result.email);
		$("#bio").text(result.bio);

		$.ajax({
			method: "GET",
			url: "https://api.github.com/users/"+user+"/repos",
		}).done(function(result) {

			result.sort(function(a,b){
				return b.stargazers_count - a.stargazers_count;
			});
			console.log(result);
			$('#repositories').empty();
			for(i in result) {
				var repositories = result[i];
				console.log(result[i]);
				$('#repositories').append("<ul><li><span id='repos_url'> <a target='_blank' href='repositories.html'>"+result[i].name+"</a></span></li>");
			}
		});
	});
	return false;
});

$('#btn_list').click(function() {
	if($('#repositories').hasClass('hide')) {
		$('#repositories').removeClass('hide');
	} else {
		$('#repositories').addClass('hide');
	}
});