const pool = require('./dbconn');


const getEnterprises = (req, res) => {
    pool.query('select * from enterprise', (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};


module.exports = {
    getEnterprises
};