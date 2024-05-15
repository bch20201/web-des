document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display the confirmation modal
    document.getElementById('confirmationModal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

document.getElementById('proceedButton').addEventListener('click', function() {
    // Redirect to home page
    window.location.href = 'file:///G:/Web%20Dez/index.html';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('confirmationModal')) {
        document.getElementById('confirmationModal').style.display = 'none';
    }
}
