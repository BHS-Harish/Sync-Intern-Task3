const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        "server": true
    })
})
app.post('/create-pdf', (req, ress) => {
    pdf.create(pdfTemplate(req.body), {
        "height": "795px",        // allowed units: mm, cm, in, px
        "width": "1122px",            // allowed units: mm, cm, in, px
        "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
        "orientation": "portrait",}).toFile('./resume.pdf', (err, res) => {
            if (err) {
                return console.log(err)
            }
            ress.json({res})
        });
});
app.get('/resume', (req, res) => {
    res.sendFile(`${__dirname}/resume.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));