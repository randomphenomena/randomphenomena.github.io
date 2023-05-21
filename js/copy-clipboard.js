
    function copyText(element) {
      var text = element.textContent || element.innerText;
      navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
        showMessage(element, 'email copied!');
        setTimeout(function() {
          hideMessage();
        }, 2000); // 2 seconds delay
      }, function(err) {
        console.error('Failed to copy text: ', err);
      });
    }

    function showMessage(element, message) {
      var messageElement = document.createElement('span');
      messageElement.className = 'message';
      messageElement.textContent = message;
      element.parentNode.insertBefore(messageElement, element.nextSibling);
    }

    function hideMessage() {
      var messageElement = document.querySelector('.message');
      if (messageElement) {
        messageElement.parentNode.removeChild(messageElement);
      }
    }