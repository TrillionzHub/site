let password = "ayorinde";
        let attempts = 3;

        let submit = document.getElementById('submit');

        submit.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the form from submitting

            let username = document.getElementById('username');
            let pass = document.getElementById('pass').value;

            let validPass = password === pass;
            let usernameE = username.value;

            if (usernameE === "" || !pass) {
                alert("Fill all fields");
            } else if (password !== pass) {
                alert('Password does not match');
            } else {
                alert("Password correct");
                alert("Welcome, Benjamin Ayorinde");
                location.href = 'form.html'; // Uncomment this line to redirect
                alert(`Welcome ${usernameE}`);
            }
        });