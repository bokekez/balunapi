require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Termin = require('./Models/termini')

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected'))

app.use(express.json());

app.get('/', (req, res) =>{
    const tempTermin = Termin.find();
    res.json(tempTermin)
})

app.post('/unos', (req, res) => {
    const tempTermin = new Termin({
        igrač1: req.body.igrač1,
        igrač1G: req.body.igrač1G
    })
    try {
        const newTermin = tempTermin.save();
        res.status(201).json(newTermin)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

app.listen(3000, () => console.log('10 4 dinosaur'));