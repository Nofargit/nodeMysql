const path = require('path');
const express = require('express');
const app = express();
global.Application = app;
const db = require('./db/index')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

db.Open(app).then( (state)=>
{
    if(state){
        console.log('DB server is connected ')
    }
})
.catch((err)=> console.log(err))



app.use('/api/Employee' , require('./routes/employee'))


app.listen(3000 , ()=>
{
    console.log('running on 3000')
})
