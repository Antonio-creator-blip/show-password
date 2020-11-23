function showPassword() {
    var x = document.getElementById("user");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

