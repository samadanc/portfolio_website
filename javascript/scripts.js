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

function getFormDataInGoodFormat(form_data)
{
console.log(form_data)
    return  form_data.reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj
            });
}

function validateData(form_data)
{
    const validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(form_data["value"]==="") {
        alert("Please enter a name.");
        return false
    }
    if(form_data["email"]==="") {
        alert("Please enter an email.");
        return false
    }
    if(!form_data["email"].match(validRegexForEmail)) {
        alert("Please enter an appropriate email.");
        return false
    }
    return true
}

function onContactSend() {
    let form_data = getFormDataInGoodFormat($("form#contact-form").serializeArray());
    const validated = validateData(form_data)
    try {
        if(validated) {
            Email.send({
                Host : "smtp.mailtrap.io",
                Username : "1a2b528d40d880",
                Password : "e66a15d616af3a",
                To : 'charaniasamad@gmail.com',
                From : form_data["email"],
                Subject : "From Portfolio Website by ".concat(form_data["value"]),
                Body : "<html><h2>".concat(form_data["subject"]).concat("</h2><p>").concat(form_data["message"]).concat("</p></html>")
            }).then(
                message => {
                    console.log(message)
                    alert("Message Sent Successfully! :)")
                }
            );
        }
    }
    catch(err) {
        alert("A problem occurred while sending the email. \nPlease feel free to email me directly at charaniasamad@gmail.com.")
    }
}