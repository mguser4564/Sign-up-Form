const form = document.getElementById('myForm');
const passwordInput = document.getElementById('password1');
const confirmPasswordInput = document.getElementById('password2');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');

function handleFormSubmit(event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    errorMessage.textContent = 'Passwords do not match, try again.';
  } else {
    errorMessage.textContent = '';
    console.log('Passwords match!');
  }
}

form.addEventListener('submit', handleFormSubmit);


function formatPhoneNumber(input) {
  // Strip all characters from the input except digits
  input = input.value.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve a 10-digit phone number
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = '(' + input;
  } else if (size < 7) {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
  } else {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6, 10);
  }
  // Set the new input value
  document.getElementById('phone_number').value = input;
}

