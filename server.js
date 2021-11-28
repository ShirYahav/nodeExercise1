const express = require ('express');
const bodyParser = require ('body-parser');

const app = express(); 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(express.json())

//15
// app.get('/', (req , res) => {
//     res.send('This text returned from my nodejs server')
// })


//16
app.get('/', (req , res)=>{
    console.log(req.query)
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    res.send(num1 +' '+ num2)
})

//17
app.get('/:year', (req, res)=>{
    const year = req.params.year
    res.send('you were born in the year of ' + year)
})

//18
app.post('/persons', (req, res)=>{
    console.log(req.body)
});

app.listen(3000);