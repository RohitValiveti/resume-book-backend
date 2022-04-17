const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.listen(3000);

app.get('/', (req, res) => {
  res.send('Home')
})

const students =[
  {
    netid: 'abc2',
    year: 'freshman',
    major: 'CS',
    resume: 'resumefile'
  },
  {
    netid: 'fht9',
    year: 'senior',
    major: 'IS',
    resume: 'resumefile'
  },
]

const sponsers = ["Company1", "Company2"]

// Cornell Students
app.get('/student/:netid', (req, res) => {
  const netid = req.params.netid
  res.send(netid)
})

app.post('/student/:netid', (req, res) => {
  console.log(req.body);
  netid = req.params.netid
  res.status(201).send(`Uploaded ${netid}'s Resume`)
})

app.delete('/student/:netid', (req, res) => {
  const netid = req.params.netid
})

//Sponsers
app.get('/sponser', (req, res) => {
  res.send(students)
})

app.get('/sponser/:year', (req, res) => {
  const year = req.params.year
  res.send(`Students who are a ${year}`)
})

app.get('/sponser/:major', (req, res) => {
  const major = req.params.major
  res.send(`Students who are a ${major} major`)
})



//Admin
app.get('/admin', (req, res) => {
  res.send('Admin Page')
})

app.get('/admin/:netid', (req, res) => {
  const netid = req.params.netid
  res.send(`${netid}'s Profile and Resume`)
})
