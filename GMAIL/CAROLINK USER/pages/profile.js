// profile.js
document.getElementById('edit-button').addEventListener('click', function() {
    // Show input fields and the save button
    document.getElementById('username-input').classList.remove('hidden');
    document.getElementById('change-picture-button').classList.remove('hidden');
    document.getElementById('password-input').classList.remove('hidden');
    document.getElementById('edit-button').classList.add('hidden');
    document.getElementById('save-button').classList.remove('hidden');

    // Populate input fields with current values
    document.getElementById('username-input').value = document.getElementById('user-name').textContent;
});

document.getElementById('save-button').addEventListener('click', function() {
    // Update displayed values with input field values
    document.getElementById('user-name').textContent = document.getElementById('username-input').value;

    // Hide input fields and the save button
    document.getElementById('username-input').classList.add('hidden');
    document.getElementById('change-picture-button').classList.add('hidden');
    document.getElementById('password-input').classList.add('hidden');
    document.getElementById('edit-button').classList.remove('hidden');
    document.getElementById('save-button').classList.add('hidden');
});

document.getElementById('logout-button').addEventListener('click', function() {
    // Redirect to index.html
    window.location.href = 'index.html';
});

document.getElementById('change-picture-button').addEventListener('click', function() {
    document.getElementById('profile-picture-input').click();
});

document.getElementById('profile-picture-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-picture').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
