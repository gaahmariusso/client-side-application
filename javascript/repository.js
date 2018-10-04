$( "#form_usu" ).submit(function() {
	
	var user = $('#form_usu #user').val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/users/"+user,

	}).done(function(result) {

		$("#name").text(result.name);
		$("#avatar_url").attr("src",result.avatar_url).attr("height",150);
		$("#followers").text(result.followers);
		$("#following").text(result.following);
		$("#email").text(result.email);
		$("#bio").text(result.bio);

		$.ajax({
			method: "GET",
			url: "https://api.github.com/users/"+user+"/repos",
		}).done(function(result) {

			$("#fullname").text(result.full_name);
			console.log(result);
		});
	});
	return false;
});

$( "#repo_detail" ).click(function openWindow() {
	
	var full_name = document.getElementById("fullname").val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/repos/"+full_name,
	}).done(function(result) {

		console.log(full_name);
		$("#name").text(result.name);
		$("#description").text(result.description);
		$("#stargazers_count").text(result.stargazers_count);
		$("#language").text(result.language);
		$("#html_url").text(result.html_url);
		});
	return false;
});

// $(repositories).on('click',function(){
//     $('#repo_detail').show(); // aparece o div
//     window.open(repositories.html,'_blank'); // abre nova janela
// });