import { getAllResults, addResult } from "./resultrequests.js";
import { displayResults } from "./gui.js";

getAllResults().then(displayResults);

//Datorn tänker på numret
let correctNummer = Math.floor(Math.random()*3)+1;
console.log(correctNummer);

let points = 0;

//Skapar ett form
const formEL = document.querySelector('form');


//När man ska skicka in nummet som man ska gissa 
formEL.addEventListener('submit', getUserGuess);

    //callback funktion
    function getUserGuess(event){
    event.preventDefault();

    const userAnswer = document.querySelector('input').value;
   
    formEL.reset();
    


    const resultEl = document.querySelector('#resultP');

    if(correctNummer == userAnswer){
        //Får poäng för varje rätt gissning
        points++
        resultEl.innerText = `Rätt! Du har ${points} poäng.`;
        
        //datorn tänker på ett nytt nummer
        correctNummer = Math.floor(Math.random() * 3) + 1;
        console.log(correctNummer);
        
    }
    else if (correctNummer !== userAnswer){
        resultEl.innerText = `Din gissning var fel! Du fick ${points} poäng.`;

        const userName = prompt('Skriv in ditt namn för att få upp det i highscore listan');
        console.log(userName);

        const resultToAdd = {
            name: userName,
            score: points
        };

        //displaya updaterade highsocre-listan
        addResult(resultToAdd).then(displayResults);

        resultEl.innerText = 'Gissa igen för att starta om spelet!';
        points = 0 ;
        correctNummer = Math.floor(Math.random() * 3) + 1;
        console.log(correctNummer);
    
    }

}

