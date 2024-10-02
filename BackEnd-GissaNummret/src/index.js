import express from "express";
import cors from "cors";
import *  as db from "./HandleDB.js";

const PORT = 3000;

const app = express();



app.use(express.json());
app.use(cors());

//Hämta resultat från databasen
app.get('/results', async (req, res)=>{
    const result = await db.getAllResults();
    res.json(result);
})

app.post('/results', async (req, res) => {
    //const {name, score} = req.body;
    //console.log(`Saving score for ${name}: ${score} points`);
    await db.addScore(req.body)
    const result = await db.getAllResults();
    res.json(result);

})

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});