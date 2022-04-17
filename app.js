const express = require('express')
const app = express()

app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p>Hhefrwigreighierg<p>')
})

// Cornell Students
app.get('/student/:netid', (req, res) => {
  
})


//Sponsers
app.get('/sponser', (req, res) => {
  
})



//Admins
app.get('/admin', (req, res) => {
  res.send('<p>Admin<p>')
})