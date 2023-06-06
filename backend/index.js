const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
	res.json({
	"server":true
})
})
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            //res.send(Promise.reject()).json({
	//status:false,
	//message:"resume creation failed"
	//});;
	res.json({status:false,message:"Resume creation failed"})
        }
        //res.send(Promise.resolve()).json({
	//status:true,
	//message:"resume created"});
        res.json({status:true,message:"Resume creation failed"})

    });
});
app.get('/resume', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));