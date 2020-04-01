const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/', (req,res) => {
    res.status(200).send(`<h1>Welcome to my API</h1>`)
});
app.post('/post', (req,res) => {
    console.log(req.body)
    /*
    Axios.post(API_URL, data)
    req.body => ambil data dari frontend
    req.params => data dari url endpoint
    req.query => search
    */
   if (req.body.username === 'lian') {
        res.status(200).send('<h1>Lanjut</h1>')
    } else {
        res.status(200).send('<h1>Ga Boleh</h1>')
    }
    res.status(200).send(`<h1>POST</h1>`)
});
app.patch('/patch', (req,res) => {
    console.log(req.params)
    res.status(200).send(`<h1>PATCH</h1>`)
});
app.put('/put', (req,res) => {
    console.log(req.query)
    res.status(200).send(`<h1>PUT</h1>`)
});
app.delete('/', (req,res) => {
    console.log(req.delete)
    res.status(200).send(`<h1>DELETE</h1>`)
});

const { userRouter } = require('./router');
app.use('/users', userRouter);

app.listen(port, () => console.log(`API active at port ${port}`));