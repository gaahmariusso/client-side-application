var backpRepositories;
var user;

$( "#form_usu" ).submit(function() {
	
	 user = $('#form_usu #user').val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/users/"+user,
		statusCode: {
			404: function(request, status, error) {
				var modal = document.getElementById('error404');
				var btn = document.getElementById("btn_search");
				var span = document.getElementsByClassName("close")[0];
				btn.onclick = function() {
					modal.style.display = "block";
				}
				span.onclick = function() {
					modal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == modal) {
						modal.style.display = "none";
					}
				}
			},
			403: function(request, status, error) {
				var modal = document.getElementById('error403');
				var btn = document.getElementById("btn_search");
				var span = document.getElementsByClassName("close")[0];
				btn.onclick = function() {
					modal.style.display = "block";
				}
				span.onclick = function() {
					modal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == modal) {
						modal.style.display = "none";
					}
				}
			}
		}
	}).done(function(result) {

		$("#name").text(result.name);
		$("#avatar_url").attr("src",result.avatar_url).attr("width:100%");
		$("#followers").text(result.followers);
		$("#following").text(result.following);
		$("#email").text(result.email);
		$("#bio").text(result.bio);
		$("#repos_url").text(result.repos_url);

		$.ajax({
			method: "GET",
			url: "https://api.github.com/users/"+user+"/repos",
		}).done(function(result) {

			$("#fullname").text(result.full_name);
			result.sort(function(a,b){
				return b.stargazers_count - a.stargazers_count;
			});
			
			showRepositories(result);
			backpRepositories = result;

		});
	});
	return false;
});

function showRepositories(repo,ordem='asc') {
	
	if(ordem == 'asc') {
		repo.sort(function(a, b){
			return a.id - b.id;
		});
	} else {
		repo.sort(function(a, b){
			return b.id - a.id;
		});
	}
	console.log(repo);
	
	$('#repositories').empty();
	for(i in repo ) {
		$('#repositories').append("<ul><li><span id='repos_url'> <a id='display_repo_"+[i]+"' href='repositories.html'>"+repo[i].name+"</a></span></li></ul>");
		document.getElementById("display_repo_"+[i]).href='repositories.html?repository='+repo[i].name+'&user='+user
	}
}

$('a#display_repo').click(function() {
});

$('#btn_asc').click(function() {
	showRepositories(backpRepositories,'asc');
});

$('#btn_desc').click(function() {
	showRepositories(backpRepositories,'desc');
});


$('#btn_search').click(function() {
	if($('#hide_usu').hasClass('hide')) {
		$('#hide_usu').removeClass('hide');
	} else {
		$('#hide_usu').addClass('hide');
	}
});

$('#btn_list').click(function() {
	if($('#hide_repo').hasClass('hide')) {
		$('#hide_repo').removeClass('hide');
	} else {
		$('#hide_repo').addClass('hide');
	}
});