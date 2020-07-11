const express = require('express');
const bodyParser = require('body-parser')();
const cors = require('cors')();

const app = express();
app.use(bodyParser);
app.use(cors);

app.post('/api/register', (req, res) => {
  const errors = {};
  // if (!req.body.username) {
  //   errors.username = 'username is required'
  // }
  // if (!req.body.password) {
  //   errors.password = 'password is required'
  // }
  if (!req.body.option) {
    errors.option = 'This field is required'
  }
  if (Object.keys(errors).length) {
    return setTimeout(() => {
      return res.status(422).json(errors)
    }, 2000)
  }
  setTimeout(() => {
    res.status(200).json({...req.body});
  }, 2000)
});
app.use('*', (req, res) => {
  res.status(404).json ({ error: 'Not found'})
});


app.listen(5000, () => console.log('=========>'));
