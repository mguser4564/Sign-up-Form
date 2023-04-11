
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

