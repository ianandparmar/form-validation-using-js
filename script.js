var fname = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmPassword');
var contactNumber = document.querySelector('#contactNumber');

var nameError = document.querySelector('#nameError');
var emailError = document.querySelector('#emailError');
var passwordError = document.querySelector('#passwordError');
var confirmPasswordError = document.querySelector('#confirmPasswordError');
var contactNumberError = document.querySelector('#contactNumberError');

function Submit() {
  nameError.innerHTML = emailError.innerHTML = passwordError.innerHTML = confirmPasswordError.innerHTML = contactNumberError.innerHTML =
    '';
  if (fname.value.length <= 5) {
    nameError.innerHTML = 'UserName is less than 5 chracter';
    return false;
  } else if (password.value != confirmPassword.value) {
    passwordError.innerHTML = 'password do not match';
    return false;
  } else if (contactNumber.value.length != 10) {
    contactNumberError.innerHTML = 'Invalid contact no';
    return false;
  }
  return true;
}
