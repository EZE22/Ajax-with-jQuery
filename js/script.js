$(function() {
  //***Fast Feedback From***
  let form = $("#form");
  enableFastFeedback(form);

  form.submit(function () {
    let name = $("#name").val();
    let password = $("#password").val();
    let message = $("#message").val();
    let checked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePassWord(password, event);
    validateMessageField(message, event);
    validateCheckbox(checked, event);

  });
});

//Enable fast feedback
function enableFastFeedback(formElement) {
  let nameInput = formElement.find("#name");
  let passwordInput = formElement.find("#password");
  let messageInput = formElement.find("#message");
  let checkboxInput = formElement.find("#checkbox");

  //Fast feedback nameInput
  nameInput.blur(function (event) {
    let name = $(this).val();
    validateNameField(name, event);
    if(!isValidName(name)) {
      $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
    } else {
      $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
    }
  });

  //Fast feedback passwordInput
  passwordInput.blur(function (event) {
    let password = $(this).val();
    if(!isValidPassword(password)) {
      $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
    } else {
      $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
    }
  });

  //Fast feedback messageInput
  messageInput.blur(function (event) {
    let message = $(this).val();
    if(!isValidMessage(message)) {
      $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
    } else {
      $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
    }
  });

  //Fast feedback checkboxInput
  checkboxInput.change(function (event) {
    let isChecked = $(this).is(":checked");
    validateCheckbox(isChecked, event);
    if(!isChecked) {
      $(this).add("label[for='']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
    } else {
      $(this).add("label[for='']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
    }
  });
}

//Validate name field
function validateNameField(name, event) {
  if(!isValidName(name)) {
    $("#name-feedback").text("Please enter at least two characters");
    event.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
}
function isValidName(name) {
  return name.length >= 2;
}

//Validate password field
function validatePassWord(password, event) {
  if(!isValidPassword(password)) {
    $("#password-feedback").text("The password should have at least 6 characters");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}
function isValidPassword(password) {
  return password.length >= 6 && /.*[0-9].*/.test(password);
}

//Validate message field
function validateMessageField(message, event) {
  if(!isValidMessage(message)) {
    $("#message-feedback").text("Please enter a message");
    event.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
}
function isValidMessage(message) {
  return message.trim() !== "";
}

//Validate checkbox
function validateCheckbox(isCheckbox, event) {
  if(!isCheckbox) {
    $("#checkbox-feedback").text("Please agree to this");
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
  }
}
