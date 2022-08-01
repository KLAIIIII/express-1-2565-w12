const express = require('express')
const http = require('http')
const { nextTick } = require('process')
// Multiple routing
const router = express.Router()
const router2 = express.Router()
const router3 = express.Router()
const app = express()


const server = http.createServer(app)
app.use(router,router2,router3)

router.get('/',(req,res)=>{
    res.send("Router Home")
})

router2.get('/user',(req,res)=>{
    res.send('User Router Working')
})

router3.get('/admin',(req,res)=>{
    res.send('Admin Router Working')
})

server.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }
})