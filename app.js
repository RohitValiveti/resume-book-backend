const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000);

app.get("/", (req, res) => {
  res.send("Home");
});

const students = [
  {
    netid: "abc2",
    year: "freshman",
    major: "CS",
    resume: "resumefile",
  },
  {
    netid: "fht9",
    year: "senior",
    major: "IS",
    resume: "resumefile",
  },
];

const sponsers = ["Company1", "Company2"];

// Cornell Students
app.get("/student/:netid", (req, res) => {
  const netid = req.params.netid;
  res.send(netid);
});

app.post("/student/:netid/upload", (req, res) => {
  console.log(req.body);
  netid = req.params.netid;
  res.status(201).send(`Uploaded ${netid}'s Resume`);
});

app.delete("/student/:netid/delete", (req, res) => {
  const netid = req.params.netid;
});

app.get;

//Sponsers
app.get("/sponsor", (req, res) => {
  res.send(students);
});

app.get("/sponsorr/:students", (req, res) => {
  const year = req.params.year;
  res.send(`View or Filter our Students`);
});

//Commenting this out because i dont just wanna delete, but i think just have a
//page with all students, and then we can manage filters on the template.
// app.get("/sponsorr/:major", (req, res) => {
//   const major = req.params.major;
//   res.send(`Students who are a ${major} major`);
// });

//Admin
app.get("/admin", (req, res) => {
  res.send("Admin Page");
});

//Admin CRUD
app.get("/admin/:netid", function (req, res) {
  //Eventually have to check to see if this is in databse of admins i believe
  const netid = req.params.netid;
  console.log(netid);
  res.send(`${netid}'s Profile and Resume`);
});

//possibly useful, so we can manage sponsor accounts, upload/delete/edit, or whatever
app.post("/admin/:netid/:sponsor", function (req, res) {
  const sponsor = req.params.sponsor;
  //i think render different templates depending on if sponsor exists or not
});

app.get("/admin/manage", function (req, res) {
  //manage students
});
