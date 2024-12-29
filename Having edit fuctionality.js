function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const UserDetails = {
        username: username,
        email: email,
        phone: phone,
    };

    // Retrieve existing users or initialize an empty array
    const Users = JSON.parse(localStorage.getItem('User Details')) || [];

    // Add the new user details to the array
    Users.push(UserDetails);

    // Save the updated user list back to localStorage
    localStorage.setItem('User Details', JSON.stringify(Users));

    addUserToUI(UserDetails);
}

function addUserToUI(user) {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = `${user.username} - ${user.email} - ${user.phone}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = function () {
        deleteUser(user, li);
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

function deleteUser(user, listItem) {
    let users = JSON.parse(localStorage.getItem('User Details')) || [];
    users = users.filter(
        u => u.username !== user.username || u.email !== user.email || u.phone !== user.phone
    );
    localStorage.setItem('User Details', JSON.stringify(users));

    listItem.remove();
}

window.onload = function () {
    const users = JSON.parse(localStorage.getItem('User Details')) || [];
    users.forEach(user => addUserToUI(user));
};

module.exports = handleFormSubmit;
