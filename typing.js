const words = 'Puppy orange just can and love Jupiter eat pizza dogs cats bunnies Fat Chubby long number hit hurry cute adorable kitten flower ice cream pasta long short tired calm kind nice worry sad mad happy pink yellow orange red blue purple brown black hat cap clothes hoodie jacket t-shirts pants jeans skirt shoes sandals sneakers public private much more work time need open closed closer change also ready not no sleep bed blanket Yelling'.split(' ');
const wordsCount = words.length;
function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex];
}
function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += randomWord() + '';
    }
}
newGame();