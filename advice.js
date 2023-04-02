const generate = document.querySelector('.generate-btn');
const advice_num = document.querySelector('.number');
const advice_text = document.querySelector('.advice-text');

const setAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
    const myJson = await response.json(); //extract JSON from the http response
    advice_num.innerText = myJson.slip.id;
    advice_text.innerText = '"' + myJson.slip.advice + '"';
}

generate.addEventListener('click', setAdvice);
document.addEventListener("DOMContentLoaded", setAdvice);