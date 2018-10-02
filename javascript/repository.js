$( "#repo_detail" ).submit(function() {
	
	var full_name	= $('#repo_detail #fullname').val();
	$.ajax({
		method: "GET",
		url: "https://api.github.com/repos/"+full_name,
	}).done(function(result) {

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