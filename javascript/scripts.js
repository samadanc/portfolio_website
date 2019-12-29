//JQuery Example
$(document).ready(function(){
	$("#header").load("reusables/header.html");
	$("#footer").load("reusables/footer.html");
	$('#social-links').load("reusables/social-links.html");
});

$('.nav-item').click(function(){
	$(this).tab('active');
});

// if(window.location.protocol != "https"){
// 	window.location.href = window.location.href.replace('http', 'https');    
// }