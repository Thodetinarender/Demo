function handleFormSubmit(event) {
    event.preventDefault();

    const bookmarks = {
        name: event.target.name.value,
        link: event.target.link.value,
    };

    axios
        .post("https://crudcrud.com/api/316ecec8fa224c41a7249d959b1a8483/bookmarks", bookmarks)
        .then((response) => {
            displayBookmark(response.data);
            event.target.reset();
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayBookmark(bookmark) {
    const bookmarksList = document.getElementById("bookmarks-list");

    // Create a div to contain the bookmark
    const bookmarkElement = document.createElement("div");
    bookmarkElement.setAttribute("id", `bookmark-${bookmark._id}`);  // Set a unique ID for the bookmark element
    bookmarkElement.innerHTML = `
        <p><strong>${bookmark.name}</strong>: <a href="${bookmark.link}" target="_blank">${bookmark.link}</a></p>`;
    bookmarksList.appendChild(bookmarkElement);

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        editBookmark(bookmark._id);  // Pass the bookmark ID to the edit function
    };
    bookmarkElement.appendChild(editButton);

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteBookmark(bookmark._id);  // Call deleteBookmark function with the bookmark ID
    };
    bookmarkElement.appendChild(deleteButton);
}

// Fetch all bookmarks on page load
window.onload = function () {
    axios
        .get("https://crudcrud.com/api/316ecec8fa224c41a7249d959b1a8483/bookmarks")
        .then((response) => {
            response.data.forEach((bookmark) => {
                displayBookmark(bookmark);
            });
        })
        .catch((error) => {
            console.error("Error fetching bookmarks:", error);
        });
};

// Edit bookmark
function editBookmark(id) {
    // Fetch the bookmark data using its ID
    axios
        .get(`https://crudcrud.com/api/316ecec8fa224c41a7249d959b1a8483/bookmarks/${id}`)
        .then((response) => {
            const bookmark = response.data;

            // Populate the form with the bookmark's details for editing
            document.getElementById("name").value = bookmark.name;
            document.getElementById("link").value = bookmark.link;

            // Change the form's submit event to update the bookmark instead of creating a new one
            const form = document.getElementById("bookmark");
            form.onsubmit = function (event) {
                event.preventDefault();

                // Get the updated values from the form
                const updatedBookmark = {
                    name: event.target.name.value,
                    link: event.target.link.value,
                };

                // Send the updated data to the API
                axios
                    .put(`https://crudcrud.com/api/316ecec8fa224c41a7249d959b1a8483/bookmarks/${id}`, updatedBookmark)
                    .then(() => {
                        // Update the bookmark in the DOM
                        const bookmarkElement = document.getElementById(`bookmark-${id}`);
                        const bookmarkDetails = bookmarkElement.querySelector("p");
                        bookmarkDetails.innerHTML = `
                            <strong>${updatedBookmark.name}</strong>: 
                            <a href="${updatedBookmark.link}" target="_blank">${updatedBookmark.link}</a>
                        `;

                        // Reset the form and restore its original submit event for adding new bookmarks
                        form.reset();
                        form.onsubmit = handleFormSubmit;  // Restore the original form submit handler
                    })
                    .catch((error) => {
                        console.error("Error updating bookmark:", error);
                    });
            };
        })
        .catch((error) => {
            console.error("Error fetching bookmark for editing:", error);
        });
}

// Delete bookmark
function deleteBookmark(id) {
    axios
        .delete(`https://crudcrud.com/api/316ecec8fa224c41a7249d959b1a8483/bookmarks/${id}`)
        .then(() => {
            // Remove the bookmark from the DOM
            const bookmarkElement = document.getElementById(`bookmark-${id}`);
            bookmarkElement.remove();
        })
        .catch((error) => {
            console.error("Error deleting bookmark:", error);
        });
}
