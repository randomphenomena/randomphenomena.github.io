function copyText(){

    var element = document.getElementById("mail-text") ;
    var text = element.textContent;
    navigator.clipboard.writeText(text);
}


function sendEmail(){

    var textElement = document.getElementById("mail-text") ;
    var text = textElement.textContent;
    var element = document.getElementById("mail-icon") ;
    window.location = "mailto:"+text;
}

