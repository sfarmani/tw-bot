var test = [];
// Load different parts of the pages
$(function () {
    let heroes_url = "json/heros.json";
    let skills_url = "json/skills.json";

    var dom =
        "<'row'<'col-sm-4 col-md-2'i>>" +
        "<'row'<'col-auto mr-3 ml-3'f><'col-md-1 mr-md-auto'l><'col-auto'p>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>";
    $('#load_headers').load('headers.html');
    $('#load_sidebar').load('sidebar.html');
    $('#load_banner').load('banner.html');
    $('#load_footer').load('footer.html');


    $.getJSON(heroes_url, heroVar);
    console.log("outside function: " + test);
});

function heroVar(json){
    test = json;
    console.log("inside function: " + test);
}