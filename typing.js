const words = 'Puppy orange just can and love Jupiter eat pizza dogs cats bunnies Fat Chubby long number hit hurry cute adorable kitten flower ice cream pasta long short tired calm kind nice worry sad mad happy pink yellow orange red blue purple brown black hat cap clothes hoodie jacket t-shirts pants jeans skirt shoes sandals sneakers public private much more work time need open closed closer change also ready not no sleep bed blanket Yelling'.split(' ');
const wordsCount = words.length;

function addClass(el,name){
    el.className += ' '+name;
}
function removeClass(el,name){
    el.className = el.className.replace(name,'');
}

function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex -1  ];
}
function formatWord(word) {
    return `<div class= "word">
        <span class= "letter">${word.split('').join('</span><span class= "letter">')}</span></div>`;
}


function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatWord(randomWord() + '');
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
}


document.getElementById('game').addEventListener('keyup', (event)=>{
    const key = event.key;
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter.innerHTML;
    const isLetter = key.length === 1 && key !== ' ';

    console.log({key,expected});
})


newGame();