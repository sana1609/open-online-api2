const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3050

app.use(bodyParser.json());


    const connection = mysql.createConnection({
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test'
    });

    // connection.on('error', function(err) {
    //     console.log(err.code);
    //   });


// Keep alive server
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

// const pool = mysql.createPool({
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     user: 'bsale_test',
//     password: 'bsale_test',
//     database: 'bsale_test'
//   });
  
//   // ... later
//   pool.query('select 1 + 1', function (error, results, fields) {
//     if (error) throw error;
//     console.log('keeping connection');
//   }
//   );

//Routes
app.get('/', (req, res) => {
    res.send('Welcome')
});

app.get('/category', (req, res) => {
    const sql = 'SELECT * from category';

    connection.query(sql, function (error, result) {
        if (error)
            throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result')
        };
    })
});

app.get('/product', (req, res) => {
    const sql = 'SELECT * from product';

    connection.query(sql, function (error, result) {
        if (error)
            throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result')
        };
    })
});

app.get('/category/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * from category WHERE id = ${id}`;

    connection.query(sql, function (error, result) {
        if (error)
            throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result')
        };
    })
});

app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * from product WHERE id = ${id}`;

    connection.query(sql, function (error, result) {
        if (error)
            throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result')
        };
    })
});

app.post('/', (req, res) => {
    res.send('')
});

app.put('/', (req, res) => {
    res.send('')
});

app.delete('/', (req, res) => {
    res.send('')
});

// Check connect
connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('successful connection');
    }
});

// connection.query('SELECT * from product', function(error, result, fields) {
//     if(error)
//     throw error;

//     result.forEach(res => {
//         console.log(res);
//     });
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// connection.end();