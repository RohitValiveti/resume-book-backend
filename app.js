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
    resume: 'resume'
  },
  {
    netid: 'fht9',
    year: 'senior',
    major: 'IS',
    resume: 'resume'
  },

]

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



//Admin
app.get('/admin', (req, res) => {
  res.send('Admin Page')
})