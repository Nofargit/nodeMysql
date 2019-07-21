const path = require('path');
const express = require('express');
const db = require('./db');
const app = express();
const Emp = require('./routes/employee');
global.Application = app;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

db.Open(app).then( (state) => {
    if (state) {
        console.log('DB Server connected...')
    }
}).catch( (err) => {
    console.log(err)
})

app.use('/api/Employee' ,  require('./routes/employee') )


// app.get('/dbs' , (req , res) => {
//     Emp.getDBs(req , res,  app.get('CONNECTION'))
// });

app.listen(3000 , () => console.log(`Server is running on port 3000`))
