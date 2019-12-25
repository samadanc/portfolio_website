//JQuery Example
$(document).ready(function(){
	$("#header").load("reusables/header.html");
	$("#footer").load("reusables/footer.html");
	$('#social-links').load("reusables/social-links.html");
});

$('.nav-item').click(function(){
	$(this).tab('active');
  })

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
// if(window.location.protocol != "https"){
// 	window.location.href = window.location.href.replace('http', 'https');    
// }