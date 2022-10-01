function copyText(){

    var element = document.getElementById("mail-text") ;
    var text = element.textContent;
    navigator.clipboard.writeText(text);
}

