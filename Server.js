require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Termin = require('./Models/termini');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected'))

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.get('/', cors(), async (req, res) =>{
    const tempTermin = await Termin.find();
    // const totalTermin = tempTermin.map(element => ({
    //     // 'totalG' = element.igrač1G+element.igrač2G+element.igrač3G+element.igrač4G+element.igrač5G+element.igrač6G+element.igrač7G+element.igrač8G
    //     'totalG': element.igrač1G +element.igrač2G,
    // }));
    console.log('1', tempTermin)
    res.json(tempTermin)
})

app.post('/unos', async (req, res) => {
    const tempTermin = new Termin({
        igrač1: req.body.igrač1,
        igrač1G: req.body.igrač1G,
        igrač2: req.body.igrač2,
        igrač2G: req.body.igrač2G
    })
    try {
        const newTermin = await tempTermin.save();
        res.status(201).json(newTermin)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

app.listen(3000, () => console.log('10 4 dinosaur'));