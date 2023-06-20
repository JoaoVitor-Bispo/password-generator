const range = document.querySelector('#range_characters');
const password = document.querySelector('.password');
const quantity_characters = document.querySelector('.quantity_characters');
const copy = document.querySelector('.icon')
const button = document.querySelector('.button');

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, '~', '/', '+', '-', '_', '@', '!', '%', '$', '#', '&'];

range.addEventListener('mousemove', (e) => {
    quantity_characters.innerHTML = e.target.value;
});

button.addEventListener('click', (e) => {

    const newArr = [];
    const passwordLength = parseInt(range.value);

    for(let c = 0;c < passwordLength;c++) {
        const randomLetter = characters[parseInt(Math.random() * ((characters.length - 1) - 0) + 0)];
        newArr.push(randomLetter);
    };

    document.querySelector('.icon').style.display = 'inline-block'

    password.innerText = newArr.join('');
    password.style.display = 'inline-block'
});

copy.addEventListener('click', (e) => {
    navigator.clipboard.writeText(password.innerHTML)
    alert('Link copiado para a área de transferência')
})
