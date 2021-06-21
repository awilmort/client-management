const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const enterprise = require('./enterprise');
const EnterpriseRouter = require('./routes/enterpriseRouter');

const PORT = 4002;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


app.get('/err', (req, res, next) => {
    res.status(404).send('Data not found');
});

//app.get('/enterprise', enterprise.getEnterprises);
app.use('/enterprise', EnterpriseRouter);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
});
  

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})