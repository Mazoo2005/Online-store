const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
  
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
  
}


// JavaScript for form interactions, if needed
document.addEventListener("DOMContentLoaded", () => {
  // Example: Add focus and blur effects on input fields
  const inputs = document.querySelectorAll('.input-group input');
  
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          input.parentElement.classList.add('focus');
      });

      input.addEventListener('blur', () => {
          if (input.value === '') {
              input.parentElement.classList.remove('focus');
          }
      });
  });
});


// Function to toggle the password visibility
function togglePassword(id) {
  const passwordInput = document.getElementById(id);
  const eyeIcon = passwordInput.nextElementSibling;
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  }
}

