const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middlewre
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From simple JWT')
});
app.post('/login', (req, res) => {
    res.send({ success: true });
})
app.listen(port, () => {
    console.log('Listeing to port', port);
})
