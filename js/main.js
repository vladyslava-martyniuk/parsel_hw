// index.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо дефолтну поведінку форми

    // Отримуємо значення полів форми
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Створюємо об'єкт з даними форми
    let formData = {
        name: name,
        email: email,
        message: message
    };

    // Демонстрація успішного відправлення форми
    let successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    // Видалення повідомлення про успішність через 3 секунди
    setTimeout(function() {
        successMessage.classList.add('hidden');
    }, 3000);

    // Очищення полів форми
    document.getElementById('feedbackForm').reset();
});
