
(function(){
    emailjs.init({
        publicKey: "8V6GAXMo1bm5c0tQ0"
    })
  })();


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_gjqt25k', 'template_s6jhw1t', this)
      .then(function() {
        alert('✅ Message sent successfully!');
      }, function(error) {
        alert('❌ Failed to send message: ' + JSON.stringify(error));
      });
  }); 
