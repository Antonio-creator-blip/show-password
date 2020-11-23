let contatore = 0;
function showPassword() {
    contatore ++
    var x = document.getElementById("user");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById('eye').style.visibility = 'visible'; 
    } else {
      x.type = "password";
      document.getElementById('eye').style.visibility = 'hidden'; 
    }
  }


  