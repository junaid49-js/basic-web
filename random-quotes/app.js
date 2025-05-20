const quote = document.getElementById('p');
const author = document.getElementById('h4');
const getQuote = document.getElementById('button');

getQuote.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 100);

    quote.textContent = `${quotes[randomNumber]}`;
    author.textContent = `${authors[randomNumber]}`;

})
