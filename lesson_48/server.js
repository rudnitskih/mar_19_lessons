const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname));

app.get("/users", (req, res) => {
  const {limit} = req.query;

  fs.readFile('./data/database.json', (err, data) => {
    if (err) throw err;
    let database = JSON.parse(data);

    if (limit !== undefined) {
      database = database.slice(0, limit);
    }

    res.json(database);
  });
});

app.get("/users/:id", (req, res) => {
  req.params
});

app.post("/users", (req, res) => {
  const {name, died, born, father, mother, sex} = req.query;

  const user = {
    name,
    died,
    born,
    sex: sex || 'm',
    father: father || null,
    mother: mother || null
  };

  fs.readFile('./data/database.json', (err, data) => {
    if (err) throw err;
    let database = JSON.parse(data);

    database.push(user);

    fs.writeFile('./data/database.json', JSON.stringify(database,  null, ' '), 'utf8', function (err) {
      if (err) {
        res.status(500).send({ error: 'Could not add user' })
      }

      res.status(200).send('Update successfully');
    });
  });
});

app.delete("/users/:id", (req, res) => {
  const {name} = req.query;

  fs.readFile('./data/database.json', (err, data) => {
    if (err) throw err;
    let database = JSON.parse(data);

    const indexForDelete = database.findIndex((user) => user.name === name);

    database.splice(indexForDelete, 1);

    fs.writeFile('./data/database.json', JSON.stringify(database,  null, ' '), 'utf8', function (err) {
      if (err) {
        res.status(500).send({ error: 'Could not add user' })
      }

      res.status(200).send('Update successfully');
    });
  });
});

app.listen(8080);
