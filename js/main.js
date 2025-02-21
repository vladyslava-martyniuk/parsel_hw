
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

 
    let formData = {
        name: name,
        email: email,
        message: message
    };

   
    let successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    setTimeout(function() {
        successMessage.classList.add('hidden');
    }, 3000);


    document.getElementById('feedbackForm').reset();
});
