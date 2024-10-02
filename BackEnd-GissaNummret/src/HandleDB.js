import fs from 'fs/promises';

async function getAllResults(){
    const rawdata = await fs.readFile('./src/highscores.json');
    return JSON.parse(rawdata);
}


async function addScore(newScore) {
    let results = await getAllResults()
    results.push(newScore);
    results.sort((a, b)=> b.score - a.score);
    results = results.slice(0, 5);
    await fs.writeFile("./src/highscores.json", JSON.stringify(results, null, 2));

    //await fs.writeFile('./src/highScore.json', JSON.stringify(results, null, 2));
    
}


export {getAllResults, addScore};