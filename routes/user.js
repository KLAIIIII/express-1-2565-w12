const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Router Home")
})

router.get('/user',(req,res)=>{
    res.send('User Router Working')
})

router.get('/admin',(req,res)=>{
    res.send('Admin Router Working')
})

module.exports = router