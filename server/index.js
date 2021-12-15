//building out server
const express = require('express')
const path = require('path')
const app = express()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.use('/js', express.static(path.join(__dirname, 'public/index.js')))


const port = process.env.PORT || 4005

app.listen(port, ()=>{console.log(`Port works ${port}`)})

