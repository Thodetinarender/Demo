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
