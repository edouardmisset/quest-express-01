const express = require('express');
const app = express();
const port = 3000;
const fruits = ['Apple', 'Banana', 'Kiwi'];
const miniFruits = fruits.map((fruit) => fruit.toLowerCase());
const cocktails = [
  {
    id: 0,
    name: 'Margarita',
  },
  {
    id: 1,
    name: 'Mojito',
  },
  {
    id: 2,
    name: 'Cuba Libre',
  },
];

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.get('/users/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get('/fruits', (req, res) => {
  const queryName = req.query.name;

  if (miniFruits.includes(queryName.toLowerCase())) {
    res.send(`Here is your ${queryName}`);
  } else {
    res.send(`Sorry, we couldn't find any ${queryName}`);
  }
});

app.get('/cocktails', (req, res) => {
  res.status(200).json(cocktails);
});

// app.get('/search', HANDLER);
// app.get('/users', HANDLER);
// app.post('/post', HANDLER);
