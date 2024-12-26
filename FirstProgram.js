//getElementById

const mainHeading = document.getElementById('main-heading');

mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor='green';
header.style.borderBottom = '2px solid orange';

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';
 
const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';

//getElementsByClassName

const fruit = document.getElementsByClassName('fruit');

fruit[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruit.length;i++) {
    fruit[i].style.fontWeight = 'bold';
}

//getElementsByTagName

const line = document.getElementsByTagName('li');

line[4].style.color = 'blue';

for (let i = 0; i < line.length; i++){
    line[i].style.fontStyle = 'italic';
}

//querySelector & querySelectorAll Methods
// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'end';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit, index) => {
    if (index % 2 === 1) { 
        if (index === 1) {
            fruit.style.backgroundColor = 'brown';
            fruit.style.color = 'white';
        } else if (index === 3) {
            fruit.style.backgroundColor = 'brown';
            fruit.style.color = 'white';
        } else {
            fruit.style.backgroundColor = 'red';
            fruit.style.color = 'white';
        }
    }
});