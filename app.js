function showPassword() {
    contatore++
    let x = document.getElementById("user");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('eye').style.display = 'block';
    } else {
        x.type = "password";
        document.getElementById('eye').style.display = 'none';
    }
}