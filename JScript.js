$( "#form_usu" ).submit(function() {
	
	var user = $('#form_usu #user').val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/users/"+user,
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
	
			for(i in result) {
				var repositories = result[i];
				console.log(result[i]);
				$('#repositories').append("<ul><li><span id='repos_url'> <a target='_blank' href=''>"+result[i].name+"</a></span></li>");
			}
		});
	});
	return false;
});

// Limpar repositórios quando realizar nova pesquisa