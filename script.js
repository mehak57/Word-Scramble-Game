const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word")

let correctWord, timer;
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() =>{
       if(maxTime>0){
        maxTime--;
        return timeText.innerText = maxTime;
       }
       clearInterval(timer)
       alert(`Time Over ${CorrectWord.toUpperCase()} was the correct word`);
       initGame();
    },1000)

}


const initGame = () =>{
    initTimer(30);
    let randomObj = words [Math.floor(Math.random () * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i =wordArray.length -1; i>0; i-- ){
        let j = Math.floor(Math.random() *(i+1));
        [wordArray[i],wordArray[j]] =[wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value="";
    inputField.setAttribute("Maxlength", correctWord.length )
    console.log(randomObj);

}
initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Please Enter to Check Word");

    if(userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
    
    alert (`Congrats ${userWord.toUpperCase()} is Correct Word`);
    initGame();

}

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);