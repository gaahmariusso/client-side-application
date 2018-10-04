$(document).ready(function () {
    params 		= getParams();
    repository 	= params.repository;
    user 		= params.user;

    $.ajax({
        method: "GET",
        url: "https://api.github.com/repos/"+user+"/"+repository
    }).done(function (result) {
        $("#name").text(result.name);
        $("#description").text(result.description);
        $("#stargazers_count").text(result.stargazers_count);
        $("#language").text(result.language);
        $("#html_url").text(result.html_url).val();
    });
});

function getParams() {

    var params = {},
        pairs = document.URL.split('?')
        .pop()
        .split('&');

    for(var i = 0, p; i < pairs.length; i++) {
        p = pairs[i].split('=');
        params[p[0]] = p[1];
    }
    return params;
}