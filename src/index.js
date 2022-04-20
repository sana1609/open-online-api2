const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3050

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

// Keep alive server
setInterval(function () {
    connection.query('SELECT 1');
}, 4000);


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
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

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO category SET ?';

    const categoryObj = {
        name: req.body.name
    }

    connection.query(sql, categoryObj, err => {
        if (err) throw err;
        res.send('Category created!');
    })
});

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO product SET ?';

    const productObj = {
        name: req.body.name
    }

    connection.query(sql, productObj, err => {
        if (err) throw err;
        res.send('Product created!');
    })
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const sql = `UPDATE category SET name = '${name}' WHERE id = ${id}`;

    connection.query(sql, err => {
        if (err) throw err;
        res.send('Category updated!');
    })
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE from category WHERE id = ${id}`;

    connection.query(sql, err => {
        if (err) throw err;
        res.send('Category deleted!');
    })
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));