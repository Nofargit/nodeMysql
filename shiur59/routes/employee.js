const express = require('express');
const router = express.Router();
const handler = require('../handlers/empHandler')

router.get('/', (res,req)=>
{
   console.log("ok get")
   handler.saveEmp(req,res)
  
})

module.exports= router;