document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  var path = window.location.pathname.replace(/\\/g, '/');
  var current = path.split('/').pop() || 'index.html';
  var inArticles = path.indexOf('/articles/') !== -1;

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var target = href.split('/').pop();
    if (target === current) {
      a.classList.add('active');
    }
    if (inArticles && target === 'awareness.html') {
      a.classList.add('active');
    }
  });

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Check if we are running in http/https or localhost
      if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
        e.preventDefault();
        
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        var name = document.getElementById('name').value.trim();
        var contact = document.getElementById('contact').value.trim();
        var topic = document.getElementById('topic').value;
        var message = document.getElementById('message').value.trim();
        
        fetch("https://formsubmit.co/ajax/cybershieldspk@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            contact: contact,
            topic: topic,
            message: message
          })
        })
        .then(function(response) { return response.json(); })
        .then(function(data) {
          if (data.success === "true" || data.success === true) {
            // Show inline success message
            form.innerHTML = '<div class="success-message" style="padding: 24px; background: #e6f4ea; color: #137333; border-radius: 8px; text-align: center; font-weight: 500; border: 1px solid #c2e7cd; margin-top: 15px;">' +
              '<h3 style="margin-top: 0; margin-bottom: 8px; font-size: 1.25rem;">Message Sent!</h3>' +
              '<p style="margin: 0; font-size: 0.95rem; line-height: 1.5;">Thank you for contacting us. We have received your message and will get back to you within 24 hours.</p>' +
              '</div>';
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            alert('Failed to send message: ' + (data.message || 'Unknown error') + '. Please try again or email us directly.');
          }
        })
        .catch(function(error) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
          alert('Failed to send message. Please try again or email us directly.');
        });
      }
      // If file:// protocol, let standard form POST handle the submission
    });
  }
});
