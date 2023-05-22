
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



   
    // Add smooth scrolling behavior to anchor links
    var anchorLinks = document.querySelectorAll('a.nav-item');
  
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
  
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  