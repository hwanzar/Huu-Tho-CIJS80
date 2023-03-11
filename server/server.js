const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Received your request!');
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
