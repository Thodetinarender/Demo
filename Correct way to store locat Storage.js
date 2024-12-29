// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
     const username = event.target.username.value;
     const email = event.target.email.value
     const phone = event.target.phone.value

    const UserDetails = {
        username: username,
        email: email,
        phone: phone,
    };

    const user_serialized = JSON.stringify(UserDetails);
    localStorage.setItem('User Details',user_serialized);
}
module.exports = handleFormSubmit;