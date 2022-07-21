const express = require("express");
const app = express()
const bodyParser = require("body-parser");

const PORT=  4000

app.set('views', 'views')
app.set('views engine', 'ejs')

app.use('bodyParser.json()')


app.get('/', (req, res)=>{
    if(res.status<=200 && res.status>=301){
        res.send('views/welcome')
    }
    if (res.status<=400 && res.status>=501) {
        res.send('views/404')
    }
})

require('Routes/login')(app)


app.listen(PORT)