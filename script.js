
var form = {
  emailInput: document.getElementById("emailInput"),
  passwordInput: document.getElementById("passwordInput"),
};


var validator = {
  validateEmail: function() {
    var email = form.emailInput.value;
    if (!email) {
      alert("Please enter your email address.");
      return false;
    }

    if (!/^\w+@\w+\.\w+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  },

  validatePassword: function() {
    var password = form.passwordInput.value;
    if (!password) {
      alert("Please enter your password.");
      return false;
    }

    if (password.length < 8) {
      alert("password must be at least 8 characters long.");
      return false;
    }

    return true;
  },
};

document.getElementById("loginForm").addEventListener("submit", function() {
  if (!validator.validateEmail() || !validator.validatePassword()) {
    return false;
  }
  else{
    alert("Login successful!");
    window.open('thanks.html','_blank')
  }
});
