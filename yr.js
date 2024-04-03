let password = "ayorinde";
let username = "benjamin";
let attempts = 3;

function login(){
    let usernameInput = document.getElementById('username');
    let pass = document.getElementById('pass').value;

    let validPass = password === pass;
    let usernameE = usernameInput.value;

    if (usernameE === "" || !pass){
        alert("Fill all fields");
    } else if(password !== pass) {
        alert('Password does not match');
    } else {
        alert("Password correct");
        alert("Welcome, Benjamin Ayorinde to MELODIA ACADEMY.");
        alert("Registration Successful!");
        if (!alert("Password correct")) { // Check if the alert hasn't been shown
            location.href = 'index.html'; // Redirect only if the alert hasn't been shown
        }
        alert(`Welcome ${usernameE}`);
    }
}