const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { groceryItems } = require('./data.js');

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/groceries', (request, response) => {
    response.status(200).send(groceryItems);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});