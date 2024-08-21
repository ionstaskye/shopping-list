const express = require('express')

const app = express()
const items = require('./fakeDb')

app.get('/items', function(req,res){
    return res.json(items)
})

