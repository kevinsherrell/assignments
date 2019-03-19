const express = require('express')
const app = express()
const uuid = require('uuid')

const port = 6500

const Todo = {
    "name": "The Name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage...",
    "completed": false,
    "_id": uuid()
}

app.get('/',(req,res)=>{
    res.send(`This is todo express`)
})
app.get('/list',(req,res)=>{
    res.send(Todo)
})
app.listen(port, ()=>{
    console.log(`This server is listening on port: ${port}`)
})