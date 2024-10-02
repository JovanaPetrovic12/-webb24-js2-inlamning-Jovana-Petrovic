const baseURL = 'http://localhost:3000/results';

async function getAllResults() {
    const res = await fetch (baseURL);
    const results = await res.json();
    return results;
}

async function addResult(newResult) {
    const options = {
        method: 'POST',
        body: JSON.stringify(newResult),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const res = await fetch(baseURL, options);
    const data = await res.json();
    return data;
}

export {getAllResults, addResult}