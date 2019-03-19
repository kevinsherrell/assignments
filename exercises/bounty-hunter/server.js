const express = require('express')
const uuid = require('uuid')
const app = express()

const port = 4000
app.use(express.json())
let data = [
    {
        firstName: 'one',
        lastName: 'lastName',
        living: true,
        bounty: 5000,
        type: 'sith',
        _id: uuid()
    },
    {
        firstName: 'two',
        lastName: 'lastName',
        living: true,
        bounty: 5000,
        type: 'sith',
        _id: uuid()
    },
    {
        firstName: 'three',
        lastName: 'lastName',
        living: true,
        bounty: 5000,
        type: 'sith',
        _id: uuid()
    },
    {
        firstName: 'four',
        lastName: 'lastName',
        living: true,
        bounty: 5000,
        type: 'sith',
        _id: uuid()
    },
]
// GET
app.get('/', (req, res) => {
    console.log(`This is a get request`)
    res.send(`Get request on port: ${port}`)
})
app.get('/items', (req, res) => {
    console.log(`Another get request on port: ${port}`)
    res.send(data)
})
app.get('/items/:_id', (req, res) => {
    const ID = req.params._id
    const findPerson = data.find(person => person._id === ID)
    if (findPerson) {
        res.send(findPerson)

    } else {
        res.send(`person not found`)

    }
})
// POST
app.post('/items', (req, res) => {
    req.body._id = uuid()
    data.push(req.body)
    res.send(req.body)
    console.log(req.body)
})

// DELETE
app.delete('/items/:_id', (req, res) => {
    const updatedPeople = data.filter(person => person._id !== req.params._id)
    data = updatedPeople
    res.send(data)
})
// PUT
app.put('/items/:_id',(req,res)=>{
    const ID = req.params._id
    const updatedPeople = data.filter(person => person._id !== req.params._id)
    const findPerson = data.find(person => person._id === ID)
    Object.assign(findPerson,req.body)
    res.send(updatedPeople)
})

app.listen(port, () => {
    console.log(`Server is litening on port: ${port}`)
})