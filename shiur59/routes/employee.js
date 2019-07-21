

const express = require('express')
const router = express.Router()
const handlers = require('../handlers/emphandler')

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next();
// })

// POST api/Employee 
//  { fn: ', , last: ''}
router.post('/' , (req,res) => {
    handlers.saveEmp(req,res)
})



module.exports = router



