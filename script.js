function getFormValue() {
    let firstName = document.getElementById("fn").value;
    let lastName = document.getElementById("ln").value;
    let fullName = firstName + " " + lastName;
    alert(fullName);
    return false;
}
