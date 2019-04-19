console.log('Hello, World!');

const inputField = document.getElementById('message');
const artOne = document.getElementById('articleOne');
const artTwo = document.getElementById('articleTwo');

inputField.addEventListener('keyup', event => {
    console.log(event);
    artOne.innerHTML = event.target.value;
    artTwo.innerHTML = event.target.value;
})