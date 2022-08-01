const express = require('express')
const http = require('http')
const user = require('./routes/user')

const app = express()

app.use('/v1',user)

const server = http.createServer(app)

server.listen(5000,(err)=>{
    if(err)
        console.log(err)
        console.log(`Server running at http://localhost:5000`)
    
})