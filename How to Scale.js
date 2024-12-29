// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault(); 
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = {
        username: username,
        email: email,
        phone: phone,
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    
    displayUsers();
}

function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username} - ${user.email} - ${user.phone}`;
        userList.appendChild(listItem);
    });
}

window.onload = function() {
    displayUsers();
};

module.exports = handleFormSubmit;