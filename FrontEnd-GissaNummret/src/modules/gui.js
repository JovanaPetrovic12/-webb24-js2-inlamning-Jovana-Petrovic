function displayResults(resultScore){
    const container = document.querySelector('#resultDiv');
    container.innerHTML = '';

    for(const result of resultScore){

        //Skapa alla element som behövs
        const resultDiv = document.createElement('div');
        const titleEl = document.createElement('h2');
        const resultP = document.createElement('p');
        //lägger till textinnehåll till elementen
        titleEl.innerText = result.name;
        resultP.innerText = `${result.score}`;

        resultDiv.append(titleEl, resultP);
        container.append(resultDiv);
    }
}

export{displayResults};