// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
//Add edit button
const fruitItems = document.querySelectorAll('.fruits .fruit');

fruitItems.forEach((item) => {
  const editButton = document.createElement('button');
  editButton.className = 'edit-btn'; 
  editButton.textContent = 'Edit'; 
  item.appendChild(editButton);
});

//add Item functionality
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitToAdd = document.getElementById('fruit-to-add'); 

    const newLi = document.createElement('li');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';

    fruits.appendChild(newLi);
});


// delete item
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains ('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});

