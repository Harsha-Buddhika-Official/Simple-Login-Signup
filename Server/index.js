const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./employee/Employee.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employee');

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.status(200).json({ success: true, message: "Successfully Logged In" });
        } else {
          res.status(401).json({ success: false, message: "Password is incorrect" });
        }
      } else {
        res.status(404).json({ success: false, message: "User does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, message: "Server error", error: err });
    });
});

app.post('/register', (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});