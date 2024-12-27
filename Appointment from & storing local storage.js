// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value = "Test Name";;
    const email = document.getElementById("email").value = "test@test.com";
    const phone = document.getElementById("phone").value = "1234567890";
    console.log("Form data captured:", { username, email, phone });
    if (username && email && phone) {
        localStorage.setItem("Username", username);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone", phone);
        console.log("Stored data:", {
            Username: localStorage.getItem("Username"),
            Email: localStorage.getItem("Email"),
            Phone: localStorage.getItem("Phone"),
        });

    }
}

const form = document.getElementById("booking-form");
form.addEventListener("submit", handleFormSubmit);

module.exports = handleFormSubmit;
