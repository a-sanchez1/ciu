const button = document.querySelector('button');
const body = document.body

button.addEventListener('click', ()=>body.insertAdjacentHTML('beforeend', `<p>BEEP</p>`));